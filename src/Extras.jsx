import FileUpload from './fileupload.jsx'

export default function Extras(){
    return(
    <div class="row">
      <div class="features animate__animated animate__fadeInUp">
        <div class="entries">
          <h1>Resume</h1>
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
          <hr/>
          <p>Check out the full PDF here: <a target="_blank" href="https://docs.google.com/document/d/1v9NcRh-k2foDgw5KVHvbvvpd7F3mJL6-22QwbfgHiNM/edit?usp=sharing">Daniel Peelen Resume</a></p>
        </div>
      </div>
    </div>
  );
  }