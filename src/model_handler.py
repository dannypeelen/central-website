import os, torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

class ModelHandler:

    def __init__(self, model_path):
        """
        Initializes the class

        arg:
        model_path -> str: the path needed to access the model
        """

        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

        self.tokenizer = AutoTokenizer.from_pretrained(model_path)
        self.model = AutoModelForSeq2SeqLM.from_pretrained(model_path)

        print("Model loaded")

    def gen_clues(self, question_text, max_clues=15, max_length=128):
        """
        Generates the clues 

        args:
        question_text -> str: a continuous string of content pulled from the model API
        max_clues -> int: maximum number of clues generated (for parse clues)
        max_length -> int: maximum length of each individual clue
        """

        #process input
        input = f"Extract flashcard clues: {question_text}"
        input_ids=self.tokenizer(input, return_tensors="pt").input_ids.to(self.device)

        output = self.model.generate(
            input_ids,
            max_length = max_length,
            num_return_sequences=1,
            temperature=0.7,
            do_sample=True,
            top_k=20,
            top_p=0.85
        )

        decoded_output = self.tokenizer.decode(output[0], skip_special_tokens=True)

        return self.parse_clues(decoded_output, max_clues)

    def parse_clues(self, output, max_clues):
        """
        Parses the model's outputs, cleans it up, and returns as needed for the front-end

        args:
        output -> str: Is the decoded output of self.model
        max_clue -> int: passed down from gen_clues it is how many total clues is wanted
        """
        
        try:
            cleaned = output.strip()

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
            
            else:
                import re
                sentences = re.split(r'(?<=[.!?])\s+', cleaned)
                return [s.strip() for s in sentences if s.strip()][:max_clues]
        

        except Exception as e:
            print(f"Error parsing output: {e}")
            return [output.strip()]
        
if __name__ == "__main__":
    model = ModelHandler("dpeelen9/flashcarder")

    input = "This man advised individuals to \"act as if what you do makes a difference\" and wrote about a \"moral holiday\" in a work arguing that determinism and free will are compatible. This man discussed the \"blindness\" of humans due to their \"selective interests\" and examined \"temperaments\" in a work that categorized \"tender-minded" and "tough-minded\" philosophers. In a lecture, this man asked his audience to imagine a squirrel circling around a tree trunk. This man examined how people experience their own consciousnesses as constantly changing in The Principles of Psychology, which introduced the term \"stream of consciousness.\" For 10 points, name this American pragmatist philosopher who delivered The Varieties of Religious Experience."

    clues= model.gen_clues(input)
    print("Generated clues: ")
    for i, clue in enumerate(clues, 1):
        print(f"{i}: {clue}")