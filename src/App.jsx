import React, { useState } from 'react'

import './styles.css'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [downloadURL, setDownloadURL] = useState("");
  const [topic, setTopic] = useState("");

  const handleSubmit = async () => {
    if (!topic.trim()) return;

    setIsLoading(true);
    setFlashcards([]);
    setDownloadURL('');

  }

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
