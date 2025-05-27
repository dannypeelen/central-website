import React, { useState } from 'react'
import { Search, Download, RotateCcw, BookOpen } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [downloadURL, setDownloadURL] = useState("");
  const [topic, setTopic] = useState("");

  const generateFlashcards = async () => {
    if (!topic.trim()) return;

    setIsLoading(true);
    setError('');
    setFlashcards([]);

    try{
      const response = await fetch('http://localhost:5000/api/generate-flashcards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: topic.trim() }),
      });

      const data = await response.json();

      if (!response.ok){
        throw new Error(data.error || "Failed to generate flashcards");
      }

      setFlashcards(data.flashcards)
      setTotalQuestions(data.total_questions_found);
      setFlippedCards({});

    } catch(err){
      setError(err.message);
    } finally {
      setIsLoading(false);
    }

  };

  const downloadDeck = async () => {
    if (flashcards.length === 0) return;

    try{
      const clues = flashcards.map(card => card.front);

      const response = await fetch('http://localhost:5000/api/download-deck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: clues }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to download deck');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${topic.replace(/\s+/g, '_')}_flashcards.apkg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

    } catch(err) {
      setError('Download failed: ${err.message}');
    }
  };

  const flipCard = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="">
      <header className="">
        <div>
          <h1></h1>
          <p></p>
        </div>
      </header>

      <main className="">
        <div className="">
          <input type="text"
          value={topic}
          onChange={(e) => setTopic(e)}
          placeholder="Enter a topic (e.g. 'Athol Fugard', 'Kyrgyzstan')"
          className=""
          disabled="isLoading"
          />
          {isLoading && (
                <div className="absolute right-3 top-3 text-gray-400">
                  <Loader2 className="animate-spin" size={20} />
                </div>
              )}
        </div>
      </main>
    </div>
  )
}

export default App
