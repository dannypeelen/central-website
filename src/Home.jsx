import React, { useState } from 'react';
import myImage from './Portrait.jpeg';
import Anki from './anki.jpeg';
import GPT from './gpt.jpeg';

export default function App(){
  const BASE_URL = import.meta.env.BASE_URL;
  const [deepLearningOpen, setDeepLearningOpen] = useState(true);
  const [generalOpen, setGeneralOpen] = useState(true);


  return(
  <div class="row">

    <div class="leftside animate__animated animate__fadeInUp">
      <div class="profile">
        <img src={myImage} alt="Me!"></img>
        <h3>Danny Peelen</h3>
        <ul>
          <li><i class="bi bi-envelope"> </i><a href="mailto:dapeelen@gmail.com">dapeelen@gmail.com</a></li>
          <li><i class="bi bi-linkedin"> </i><a href="https://linkedin.com/in/daniel-peelen" target="_blank">LinkedIn</a></li>
          <li><i class="bi bi-github"> </i><a href="https://github.com/dannypeelen" target="_blank">GitHub</a></li>
          <li><i class="bi bi-journal-text"> </i><a href="/blog" target="_blank">Blog</a></li>
          <li></li>
        </ul>
      </div>
      <div class="updates">
        <h1>Updates</h1>
        <h4>11.09.2025</h4>
        <p>I have a few awesome project updates from attending HackHarvard in Boston and CalHacks in SF! I also re-vamped the resume page, since the UI seemed a little shaky.</p>
        <h4>08.25.2025</h4>
        <p>Last month I completed my internship at PNC! I am still continuing steadily with Thursday, a CMU startup. I have a had really fun time being head architect of this recommendation system they have. But now, back to school! Also updated a bunch of the UI to be more minimamlist.</p>
        <h4>04.30.2025</h4>
        <p>I have been working on various language modeling interests, trying to learn different approaches and getting comfortable using PyTorch. As for the website, I have updated my project portfolio and improved the UI!</p>
        <h4>03.05.2025</h4>
        <p>Updated my resume and gave some updates (projects & PNC internship)! Also tinkered with some style changes to improve the UI.</p>
        <h4>01.08.2025</h4>
        <p>Re-structured the site to include more of my portfolio and move parts! Flashcard maker is becoming a separate page.</p>
        <h4>12.27.2024</h4>
        <p>I launched this site, with Flashcard maker in the works!</p>
      </div>
    </div>
    
    <div class="bar">
      <hr class="vert"></hr>
    </div>

    <div class="rightside animate__animated animate__fadeInUp">
      <div class="features">
        <div class="entries">
          <h1>Projects</h1>
          
          <div class="project-category">
            <button 
              class="category-header"
              onClick={() => setDeepLearningOpen(!deepLearningOpen)}
            >
              <h2>Deep Learning</h2>
              <i class={`bi bi-chevron-${deepLearningOpen ? 'up' : 'down'}`}></i>
            </button>
            {deepLearningOpen && (
              <div class="category-content">
                <div class="section">
                  <div class="icon">
                    <img src={Anki} alt="AnkiMate Icon" class="icon"></img>
                  </div>
                  <div class="content">
                    <div class="project-header">
                      <p><b>AnkiMate</b></p>
                      <div class="project-links">
                        <a href="https://ankimate.dannypeelen.com/" target="_blank"><i class="bi bi-github"></i></a>
                        <i class="project-date">Releasing Soon</i>
                      </div>
                    </div>
                    <p><i>Tech: Python, HuggingFace (Flan-T5), PyTorch, Flask, React</i></p>
                    <p>Using a pre-trained model from HuggingFace, I am compiling a dataset to fine-tune a model to specialize in converting text in Anki-readable flashcard content. The .apkg file produce will then be built into a front-end.</p>
                    <p>Automated PDF/PPT →flashcard pipelined; fine-tuned model on self-built 10k-row dataset, reduced validation loss by 58%.</p>
                    <p>Designed and deployed a Flask backend for flashcard and file generation; used React with Tailwind CSS for a responsive UI.</p>
                  </div>
                </div>

                <div class="section">
                  <div class="icon">
                    <img src={GPT} alt="GPT Icon" class="icon"></img>
                  </div>
                  <div class="content">
                    <div class="project-header">
                      <p><b>LLM Prototype</b></p>
                      <div class="project-links">
                        <a href="#" target="_blank"><i class="bi bi-github"></i></a>
                        <i class="project-date">Nov-Dec 2025</i>
                      </div>
                    </div>
                    <p><i>Tech: PyTorch, NumPy, HuggingFace</i></p>
                    <p>Following lessons by Andrej Karpathy, I am re-building ChatGPT-2 as a simple exercise to understand the building, and optimization of deployment-ready LLMs, taking a step further from transformers.</p>
                    <p>Implemented minimal GPT-2 (attention, GeLU, LayerNorm) with HuggingFace weights; matched behavior and loss within 10%.</p>
                    <p>Developed a custom model loader for HuggingFace GPT-2 weights, fixing parameter mismatches and shape incompatibilities.</p>
                  </div>
                </div>

                <div class="section">
                  <div class="icon">
                    <img src={GPT} alt="Transformer Icon" class="icon"></img>
                  </div>
                  <div class="content">
                    <div class="project-header">
                      <p><b>Transformer Prototype</b></p>
                      <div class="project-links">
                        <a href="https://github.com/dannypeelen/transformer-cs1678" target="_blank"><i class="bi bi-github"></i></a>
                        <i class="project-date">April 2025</i>
                      </div>
                    </div>
                    <p><i>Tech: PyTorch, GPU Computing</i></p>
                    <p>As part of Deep Learning class, I built a simple transformer trained on Shakespeare's <i>Richard III</i> that was based off the paper <a href="https://arxiv.org/abs/1706.03762">Attention Is All You Need</a>.</p>
                  </div>
                </div>

                <div class="section">
                  <div class="icon">
                    <img src={GPT} alt="Magyarizer Icon" class="icon"></img>
                  </div>
                  <div class="content">
                    <div class="project-header">
                      <p><b>Magyarizer</b></p>
                      <div class="project-links">
                        <a href="#" target="_blank"><i class="bi bi-github"></i></a>
                        <i class="project-date">In Progress</i>
                      </div>
                    </div>
                    <p><i>Tech: PyTorch, Encoding</i></p>
                    <p>Taking one step further, combining my knowledge of Hungarian, I am learning how to build an optimized tokenizer specialized in agglutinative languages such as Hungarian. While the tokenizer itself is fun to build, it has been interesting to realize its limitations and alternates such as OCR.</p>
                  </div>
                </div>

                <div class="section">
                  <div class="icon">
                    <img src={GPT} alt="March Madness Icon" class="icon"></img>
                  </div>
                  <div class="content">
                    <div class="project-header">
                      <p><b>March Madness Predictor</b></p>
                      <div class="project-links">
                        <a href="https://github.com/dannypeelen/MLMadness" target="_blank"><i class="bi bi-github"></i></a>
                        <i class="project-date">March 2025</i>
                      </div>
                    </div>
                    <p><i>Tech: Data Science, PyTorch, APIs</i></p>
                    <p>For March Madness 2025, I pulled and transformed data from SportsData.IO and built a simple PyTorch regression model to predict how many points teams would score on their opponent based regular season statistics.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div class="project-category">
            <button 
              class="category-header"
              onClick={() => setGeneralOpen(!generalOpen)}
            >
              <h2>General</h2>
              <i class={`bi bi-chevron-${generalOpen ? 'up' : 'down'}`}></i>
            </button>
            {generalOpen && (
              <div class="category-content">
                <div class="section">
                  <div class="icon">
                    <img src={GPT} alt="GhostPIN Icon" class="icon"></img>
                  </div>
                  <div class="content">
                    <div class="project-header">
                      <p><b>GhostPIN</b></p>
                      <div class="project-links">
                        <a href="https://github.com/dannypeelen/ghostpin/tree/ved" target="_blank"><i class="bi bi-github"></i></a>
                        <i class="project-date">October 2025</i>
                      </div>
                    </div>
                    <p><i>Tech: JavaScript, SDK, MFA</i></p>
                    <p>Built at HackHarvard, GhostPIN is a drop-in SDK that acts as an "invisible handshake" between merchants and customers. Not only does it verify the user but also that the merchant is legit.</p>
                  </div>
                </div>

                <div class="section">
                  <div class="icon">
                    <img src={GPT} alt="Mantis Icon" class="icon"></img>
                  </div>
                  <div class="content">
                    <div class="project-header">
                      <p><b>Mantis</b></p>
                      <div class="project-links">
                        <a href="https://github.com/oviozz/mantis" target="_blank"><i class="bi bi-github"></i></a>
                        <i class="project-date">October 2025</i>
                      </div>
                    </div>
                    <p><i>Tech: Computer Vision, Cloud</i></p>
                    <p>Built at CalHacks, Mantis is a live-time surveillance tool geared towards small businesses. Mantis helps ensure activities such as shoplifiting or weapon-carrying are detected and store employees are alerted.</p>
                  </div>
                </div>

                <div class="section">
                  <div class="icon">
                    <img src={GPT} alt="Isabella Website Icon" class="icon"></img>
                  </div>
                  <div class="content">
                    <div class="project-header">
                      <p><b><a href="https://iloveisa.dannypeelen.com">Isabella Delahunty Website</a></b></p>
                      <div class="project-links">
                        <a href="https://iloveisa.dannypeelen.com" target="_blank"><i class="bi bi-github"></i></a>
                        <i class="project-date">April 2025</i>
                      </div>
                    </div>
                    <p><i>Tech: React (JavaScript), CSS, AWS</i></p>
                    <p>For my girlfriend, Isa's, graduation and eventual departure to London to grad school, I built her a little website with a little photo gallery and a daily compliment for her found <a href="https://www.iloveisa.com">here.</a></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
);
}
