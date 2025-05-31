import React, { useState } from 'react'
import { Search, Download, RotateCcw, BookOpen } from 'lucide-react';
import './index.css'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [downloadURL, setDownloadURL] = useState("");
  const [topic, setTopic] = useState("");
  const [error, setError] = useState("");

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
        body: JSON.stringify({ topic, clues }),
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
    /* Header */
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <header className="bg-indigo-600 text-white p-6">
        <div className="max-w-4xl mx-auto float-left">
          <h1 className="text-3xl font-bold ">AnkiMate</h1>
          <p className="mt-2 text-indigo-100">Generate smarter.</p>
        </div>
        <div className="float-right my-2">
            <a href="https://github.com/dannypeelen/central-website/tree/ankimate" target="_blank"><i className="text-3xl bi bi-github"></i></a>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-2 sm:px-4 lg:px-6 expand-item w-[1800px]">
        <main className="bg-white rounded-xl shadow-lg p-6 mb-8 my-3 ml-24">
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
            <input type="text"
                  placeholder="Enter any topic (e.g., Athol Fugard, Kyrgyzstan, Torque, etc.)"
                  value={topic}
                  onKeyPress = {(e) => e.key === 'Enter' && generateFlashcards()}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
            />
            </div>
            <button
            onClick={generateFlashcards}
            disabled={isLoading}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:border-transparent text-medium flex items-center"
            >
              {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <Search size={20} />)}
              {isLoading ? 'Generating...' : 'Generate'}
            </button>
          </div>
        </main>
      </div>

      {/* Results section */}
      {flashcards.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{topic} Flashcards</h2>
                <p className="text-gray-600">{flashcards.length} cards generated.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={downloadDeck}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
              >
                <Download size={18}></Download>
                Download Deck
              </button>
            </div>
          </div>

          
        </div>
      )}

      {/* Extra Info Block */}
      {flashcards.length === 0 && !isLoading && (
          <div className="px-2 sm:px-4 lg:px-6 expand-item">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to Create Flashcards?
              </h3>
              <p className="text-gray-600 mb-4">
                Enter any academic topic to generate AI-powered flashcards from quiz bowl questions
              </p>
              <div className="text-sm text-gray-500 font-bold">
                <p>• Questions sourced from QBReader's API</p>
                <p>• Clues generated using fine-tuned <a href="https://huggingface.co/dpeelen9/flashcarder">model</a></p>
                <p>• Download as Anki-compatible .apkg files</p>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default App
