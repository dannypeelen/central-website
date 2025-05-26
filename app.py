from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import requests, re, os, json
import genanki
from transformers import pipeline
from random import randint

app = Flask(__name__)
CORS(app)

MODEL_NAME = "dpeelen9/flashcarder"
API_URL = "qbreader.org/api/query"

try:
    flashcarder = pipeline('text2text-generation', model=MODEL_NAME)
except:
    flashcarder = None
    print("Warning: fine-tuned model not properly loaded")


def search(topic, params={"searchType":"answer", "difficulties": [3,4,5], "minYear": 2016}, limit=10):
    """queries QBReader API, returns string of all questions"""
    response = requests.get(API_URL, params=params)
    response.raise_for_status()
    data = response.json()

    data = list(response["tossups"])

    questions = []
    for i in range(len(data)):
        questions.append(data[i]["question_sanitized"])
    
    combined = ""
    #combine questions all into 
    for i in range(len(questions)):
        combined += questions[i]

    return questions

def generate_cards(questions, max_clues=15):
    if not flashcarder:
        print("no model exists")
        return []
    
    try:
        #get list from fine-tuned model
        result = flashcarder(questions, max_length=512, num_return_sequences=1)
        clues_text = result[0]['generated_text']

        try:
            clues = list(clues_text)
            return clues[:max_clues]
        except:
            print("output was not in list-convertable format")
            if cleaned.startswith('[') and cleaned.endswith(']'):

                cleaned = cleaned[1:-1] #removes brackets

                clues = []
                current = ""
                in_quotes = False
                
                for char in cleaned:
                    if char == '"' or char == "'":
                        in_quotes = not in_quotes
                        current += char
                    elif char == ',' and not in_quotes:
                        clues.append(current.strip())
                        current = ""
                    else:
                        current += char

                #cleanup
                if current:
                    clues.append(current.strip())

                clues = [c.strip().strip('"\'').strip('\n') for c in clues]
                clues = [c for c in clues if c]
                
            return clues[:max_clues]
    except Exception as e:
        print("Error generating clues: {e}")
        return []
    
def create_deck(flashcards, topic):

    model = genanki.Model(randint(0, 10000000),
        "Basic Model",
        fields=[{"name": "Question"}, {"name": "Answer"}],
        templates=[{
                "name": "Card 1",
                "qfmt": "{{Question}}",
                "afmt": "{{Answer}}"
            }]
        )

    my_deck = genanki.Deck(randint(0, 10000000), "{topic} Flashcards")

    for card in flashcards:
        my_deck.add_note(model=model, fields=[str(card), str(topic)])

    package = genanki.Package(my_deck)

    print("deck is built in genanki")

    tempFile = tempFile.NamedTemporaryFile(delete=False, suffix=".apkg")
    genanki.package(my_deck).write_to_file(tempFile.name)

    return tempFile.name

#flask szn

@app.route('/api/generate-flashcards', methods=['POST'])
def generate_flashcards():
    data = request.json
    topic = data.get('topic', '').strip()

    if not topic:
        return jsonify({'error': 'topic is needed'}), 400

    try:
        questions = search(topic, limit=15)
        if not questions:
            return jsonify({'error': 'no questions found on this topic'}), 404
        
        clues = generate_cards(questions)

        #make flashcard data
        flashcards = [{'front': clue, 'back': topic} for clue in clues]
        
        return jsonify({
            'flashcards': flashcards,
            'topic': topic,
            'total_questions_found': len(questions)
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('api/download-deck', methods=['POST'])
def download_deck():
    data = request.json
    topic = data.get('topic', '').strip()
    clues = data.get('clues', [])

    if not topic or not clues:
        return jsonify({'error': 'Topic and clues are needed'}), 400
    
    try:
        deck_file = create_deck(clues, topic)
        
        return send_file(
            deck_file,
            as_attachment=True,
            download_name=f'{topic.replace(" ", "_")}_flashcards.apkg',
            mimetype='application/octet-stream'
        )

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)

