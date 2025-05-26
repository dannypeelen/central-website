import genanki
from random import randint
import os

def create_deck(flashcards, topic, deck_name="My Deck", file_name="ankimate_deck.apkg"):
    """
    Creates a deck out of flashcards

    Args:
    flashcards -> : list of clues
    topic -> : answer (for all clues)
    """

    model = genanki.Model(randint(0, 10000000),
        "Basic Model",
        fields=[{"name": "Question"}, {"name": "Answer"}],
        templates=[{
                "name": "Card 1",
                "qfmt": "{{Question}}",
                "afmt": "{{Answer}}"
            }]
        )

    my_deck = genanki.Deck(randint(0, 10000000), deck_name)

    for card in flashcards:
        note = genanki.Note()
        my_deck.add_note(model=model, fields=[str(card), str(topic)])

    package = genanki.Package(my_deck)

    print("deck is built in genanki")

    output_dir = "output"
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, file_name)
    genanki.package(my_deck).write_to_file(output_path)

    return output_path