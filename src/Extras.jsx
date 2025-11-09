import pittImage from './edu.png';
import PNC from './pnc.png';
import Synopsys from './synopsys.jpeg';
import Thursday from './thursday.jpeg';
import Microsoft from './microsoft.png';
import Anki from './anki.jpeg';
import GPT from './gpt.jpeg';
import CSC from './csc.jpeg';
import SteelHacks from './steelhacks.jpeg';
import QB from './pittqb.png';
import usahun from './usahun.jpeg';



export default function Extras(){
    return(
    <div class="row">
      <div class="features animate__animated animate__fadeInUp">
        <div class="entries">
          <h2>Education</h2>
          <div class="section">
            <div class="icon">
              <img src={pittImage} alt="Education Icon" class="icon"></img>
            </div>
            <div class="content">

              <p><b>University of Pittsburgh, School of Computing & Information</b></p>
              <p><i>B.S, Computer Science, Hungarian</i></p>
              <p><b>Achievements:</b> Dean's List, 3.9 GPA</p>
              <p><b>Coursework:</b> Introduction to Deep Learning, Introduction to Machine Learning, Data Structure & Algorithms, Systems Software</p>
            </div>
            <div class="timespan">
              <p class="date">2023 - 2027</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div>
          <h2>Work Experience</h2>

          {/* <div class="section">
            <div class="icon">
            <img src={Microsoft} alt="MSFT Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>Software Engineer Intern</b></p>
            <p><i>Microsoft</i></p>
            <p>Worked on Microsoft Word, incorporating LLM technologies for enhanced user experience.</p>
            <p>Decreased latency by 10% using SDK-based agents to engage users and ensure productivity.</p>

            </div>
            <div class="timespan">
              <p class="date">May 2026 - August 2026</p>
              <p class="location">Seattle, WA</p>
            </div>
          </div> */}

          {/* <div class="section">
            <div class="icon">
            <img src={CAI} alt="CharacterAI Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>AI Engineer Intern</b></p>
            <p><i>Character AI</i></p>
            <p>Built agentic AI systems using Retrieval-Augmented Generation (RAG) with LangChain, improving large language model reasoning and adaptability for internal Synopsys research projects.</p>
            <p>Implemented and optimized backend services in Go (Golang) to enhance the scalability and responsiveness of RAG-driven AI tools, contributing to early-stage exploration of next-generation LLM applications at Synopsys.</p>

            </div>
            <div class="timespan">
              <p class="date">January 2026 - April 2026</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div> */}

          {/* <div class="section">
            <div class="icon">
            <img src={Synopsys} alt="Synopsys Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>Software Engineer Intern</b></p>
            <p><i>Synopsys</i></p>
            <p>Built agentic AI systems using Retrieval-Augmented Generation (RAG) with LangChain, improving large language model reasoning and adaptability for internal Synopsys research projects.</p>
            <p>Implemented and optimized backend services in Go (Golang) to enhance the scalability and responsiveness of RAG-driven AI tools, contributing to early-stage exploration of next-generation LLM applications at Synopsys.</p>

            </div>
            <div class="timespan">
              <p class="date">January 2026 - April 2026</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div> */}

          <div class="section">
            <div class="icon">
              <img src={Thursday} alt="Thursday Icon" class="icon"></img>
            </div>
            <div class="content">
              <p><b>Machine Learning Engineer Intern</b></p>
              <p><i>Thursday</i></p>
              <p>Built an Dockerized end-to-end recommendation pipeline (ingest data →build features →train model →serve)</p>
              <p>Implemented CI/CD (GitHub Actions + Docker) and canary staging; added real-time monitoring to cut rollback time.</p>
              <p>Integrated model endpoints into React frontend with &lt; 200ms latency per prediction, scaled system for ~10k MAUs.</p>
            </div>
            <div class="timespan">
              <p class="date">Jun 2025 - Now</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div>

          <div class="section">
            <div class="icon">
              <img src={PNC} alt="PNC Icon" class="icon"></img>
            </div>
            <div class="content">
              <p><b>Software Engineering Intern</b></p>
              <p><i>PNC Financial Services Inc.</i></p>
              <p>Built a Spring Boot + Angular micro-app from scratch to analyze housing data, set to be integrated into production.</p>
              <p>Standardized error handling and refactored back-end logic, shipping changes biweekly in an Agile team.</p>
              <p>Wrote Angular unit tests, raising coverage by 40% across the application to meet SonarQube requirements.</p>
            </div>
            <div class="timespan">
              <p class="date">May 2025 - Aug 2025</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div>

          <div class="section">
            <div class="icon">
            <img src={pittImage} alt="Pitt Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>Teaching Assistant for Discrete Mathematics</b></p>
            <p><i>University of Pittsburgh, School of Computing & Information</i></p>
            <p>Led recitations (~30 students), office hours, and built problem sets, improving exam scores from the previous year by 6%.</p>
            <p>Ran focused sessions, iterating through key material while factoring in student feedback to build algorithmic thinking skills.</p>

            </div>
            <div class="timespan">
              <p class="date">Aug 2024 - Dec 2024</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div>

          <div class="section">
            <div class="icon">
            <img src={pittImage} alt="Pitt Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>Data Analyst</b></p>
            <p><i>University of Pittsburgh Women's Volleyball Team</i></p>
            <p>Coded 40+ matches and produced 25+ scouting reports alongside coaches, used for enhanced practice quality and match prep.</p>
            <p>Implemented strategies to optimize practices in real-time, using constant communication to ensure maximum efficiency.</p>

            </div>
            <div class="timespan">
              <p class="date"> Sep 2023 - Dec 2024</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div>

          <h2>Projects</h2>
          <div class="section">
            <div class="icon">
              <img src={Anki} alt="Anki Icon" class="icon"></img>
            </div>
            <div class="content">
              <p><b>AnkiMate</b></p>
              <p><i>Tech: Python, HuggingFace (Flan-T5), PyTorch, Flask, React </i></p>
              <p>Automated PDF/PPT →flashcard pipelined; fine-tuned model on self-built 10k-row dataset, reduced validation loss by 58%.</p>            
              <p>Designed and deployed a Flask backend for flashcard and file generation; used React with Tailwind CSS for a responsive UI.</p>
            </div>
          </div>
          
          <div class="section">
            <div class="icon">
              <img src={GPT} alt="GPT Icon" class="icon"></img>
            </div>
            <div class="content">
              <p><b>GPT-2 Prototype</b></p>
              <p><i>Tech: PyTorch, NumPy, HuggingFace</i></p>
              <p>Implemented minimal GPT-2 (attention, GeLU, LayerNorm) with HuggingFace weights; matched behavior and loss within 10%.</p>
              <p>Developed a custom model loader for HuggingFace GPT-2 weights, fixing parameter mismatches and shape incompatibilities.</p> 
            </div>
          </div>
          <h2>Skills</h2>
          <div class="section">
            <div class="icon">

            </div>
            <div class="content">
            <p><b>Programming Languages:</b> Python, Java, JavaScript, C/C++, SQL, HTML5, CSS</p>
            <p><b>Libraries/Frameworks:</b> PyTorch, Docker, React, HuggingFace, NumPy, Pandas, Kafka, Angular, Hadoop, NodeJS, Spring Boot</p>
            <p><b>Techincal Skills:</b>  Unit Testing, CI/CD, Deep Learning, Machine Learning, Natural Language Processing, APIs, A/B Testing</p>
            <p><b>Languages:</b> English (native), Hungarian (advanced)</p>
            </div>
          </div>
          <h2>Extracurriculars & Awards</h2>
          <div class="section">
            <div class="icon">
              <img src={CSC} alt="CSC Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>Officer, Computer Science Club @ Pitt</b></p>
            <p>Help organize speakers from Microsoft, Google, and Amazon for the largest organization on Pitt campus.</p>
            <p>Increased unique attendance by 40% and helped in growing the Instagram account to almost 15,000 followers.</p>
            
            </div>
          </div>

          <div class="section">
            <div class="icon">
            <img src={SteelHacks} alt="SteelHacks Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>Director, SteelHacks</b></p>
            <p>Secured connections with organizations at UC Berkeley, CMU, and Columbia through email campaigns.</p>
            <p>Helped bring in over 300+ attendees from 20+ schools and sponsors, including Google, Amazon, and PNC. </p>
            </div>
          </div>

          <div class="section">
            <div class="icon">
            <img src={QB} alt="SteelHacks Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>Officer, Quiz Bowl</b></p>
            <p>Placed 3rd in the national tournament against top schools and organized several tournaments for local high school teams.</p>
            </div>
          </div>
          <h2>Citizenship</h2>
          <div class="section">
            <div class="icon">
            {/* <img src={usahun} alt="Flags Icon" class="icon"></img> */}
            </div>
            <div class="content">
            <p><b>USA, Hungary</b></p>
            </div>
          </div>
          {/* <h1>Resume</h1>
          <hr/>
          <h2>Education</h2>
          <ul>
            <li><p><b>University of Pittsburgh, School of Computing & Information</b></p>
            <p><i>B.S, Computer Science, Hungarian</i></p>
            <p><li><b>Achievements:</b> Dean's List, 3.9 GPA</li>
            <li><b>Coursework:</b> Introduction to Deep Learning, Introduction to Machine Learning, Data Structure & Algorithms, Systems Software</li></p>
            </li>
          </ul>
          <hr/>
          <h2>Work Experience</h2>
          <ul>
          <li><p><b>Machine Learning Engineer Intern</b></p>
            <p><i>Thursday</i></p>
            <p><li>Built an Dockerized end-to-end recommendation pipeline (ingest data →build features →train model →serve)</li>
            <li>Implemented CI/CD (GitHub Actions + Docker) and canary staging; added real-time monitoring to cut rollback time.</li>
            <li>Integrated model endpoints into React frontend with &lt; 200ms latency per prediction, scaled system for ~10k MAUs.</li>
            </p>
            </li>
          <li><p><b>Software Engineering Intern</b></p>
            <p><i>PNC Financial Services Inc.</i></p>
            <p><li>Built a Spring Boot + Angular micro-app from scratch to analyze housing data, set to be integrated into production.</li>
            <li>Standardized error handling and refactored back-end logic, shipping changes biweekly in an Agile team.</li>
            <li>Wrote Angular unit tests, raising coverage by 40% across the application to meet SonarQube requirements.</li>
             </p>
            </li>
          <li><p><b>Teaching Assistant for Discrete Mathematics</b></p>
            <p><i>University of Pittsburgh, School of Computing & Information</i></p>
            <p><li>Led recitations (~30 students), office hours, and built problem sets, improving exam scores from the previous year by 6%.</li>
            <li>Ran focused sessions, iterating through key material while factoring in student feedback to build algorithmic thinking skills.</li></p>
            </li>
            <li><p><b>Data Analyst</b></p>
            <p><i>University of Pittsburgh Women's Volleyball Team</i></p>
            <p><li>Coded 40+ matches and produced 25+ scouting reports alongside coaches, used for enhanced practice quality and match prep.</li>
            <li>Implemented strategies to optimize practices in real-time, using constant communication to ensure maximum efficiency.</li></p>
            </li>
          </ul>
          <hr/>
          <h2>Projects</h2>
          <ul>
          <li><p><b>AnkiMate</b></p>
              <p><i>Tech: Python, HuggingFace (Flan-T5), PyTorch, Flask, React </i></p>
              <p><li>Automated PDF/PPT →flashcard pipelined; fine-tuned model on self-built 10k-row dataset, reduced validation loss by 58%.
              </li>
              <li>Designed and deployed a Flask backend for flashcard and file generation; used React with Tailwind CSS for a responsive UI.</li>
              <li>Implemented A/B testing and deployed via GitHub, reaching high satisfaction among ~50 users.</li></p>
              </li>
          <li><p><b>GPT-2 Prototype</b></p>
            <p><i>Tech: PyTorch, NumPy, HuggingFace</i></p>
            <p><li>Implemented minimal GPT-2 (attention, GeLU, LayerNorm) with HuggingFace weights; matched behavior and loss within 10%.
            </li>
            <li>Developed a custom model loader for HuggingFace GPT-2 weights, fixing parameter mismatches and shape incompatibilities.</li></p>
            </li>            
          </ul>
          <hr/>
          <h2>Skills</h2>
          <ul>
            <li><b>Programming Languages:</b> Python, Java, JavaScript, C/C++, SQL, HTML5, CSS</li>
            <li><b>Libraries/Frameworks:</b> PyTorch, Docker, React, HuggingFace, NumPy, Pandas, Kafka, Angular, Hadoop, NodeJS, Spring Boot</li>
            <li><b>Techincal Skills:</b>  Unit Testing, CI/CD, Deep Learning, Machine Learning, Natural Language Processing, APIs, A/B Testing</li>
            <li><b>Languages: English (native), Hungarian (conversational)</b></li>
          </ul>
          <hr/>
          <h2>Extracurriculars & Awards</h2>
          <ul>
          <li><p><b>Officer, Computer Science Club @ Pitt</b></p>
            <p><li>Help organize speakers from Microsoft, Google, and Amazon for the largest organization on Pitt campus.</li>
            <li>Increased unique attendance by 40% and helped in growing the Instagram account to almost 15,000 followers.</li></p>
            </li>
            <li><p><b>Director, SteelHacks</b></p>
            <p><li>Secured connections with organizations at UC Berkeley, CMU, and Columbia through email campaigns.</li></p>
            <p><li>Helped bring in over 300+ attendees from 20+ schools and sponsors, including Google, Amazon, and PNC. </li></p>
            </li>
            <li><p><b>Officer, Quiz Bowl</b></p>
            <p><li>Placed 3rd in the national tournament against top schools and organized several tournaments for local high school teams. </li></p>
            </li>
          </ul>
          <hr/>
          <h2>Citizenship</h2>
            <p><b>USA, Hungary</b></p>
          <hr/> */}
          <p>Check out the full PDF here: <a target="_blank" href="https://docs.google.com/document/d/1v9NcRh-k2foDgw5KVHvbvvpd7F3mJL6-22QwbfgHiNM/edit?usp=sharing">Daniel Peelen Resume</a></p>
        </div>
      </div>
    </div>
  );
  }