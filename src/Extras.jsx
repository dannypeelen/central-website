import pittImage from './edu.png';
import PNC from './pnc.png';
import Synopsys from './synopsys.jpeg';
import Thursday from './thursday.jpeg';
import Microsoft from './microsoft.png';
import GPT from './gpt.jpeg';
import SteelHacks from './steelhacks.jpeg';
import QB from './pittqb.png';
import usahun from './usahun.jpeg';



export default function Extras(){
    return(
    <div>
    <div class="resume-links animate__animated animate__fadeInUp">
      <h2>Resume Version Links</h2>
      <div class="resume-links-row">
        <a href="" target="https://www.overleaf.com/read/wjbyzgzwmbnd#763005">Base (shown below)</a>
        <a href="" target="https://www.overleaf.com/read/dxnttbnxbdsf#e6d9ea">MLE</a>
        <a href="" target="https://www.overleaf.com/read/tpchkdvqsbjw#7a0e93">SWE</a>
        <a href="" target="https://www.overleaf.com/read/wmbtyyhmrthx#3bde8c">Quant</a>
      </div>
    </div>
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
              <p><i>B.S. Computer Science, Hungarian Minor</i></p>
              <p><b>Achievements:</b> 3.9 GPA, Dean's List</p>
              <p><b>Coursework:</b> Deep Learning, Machine Learning, Data Structures & Algorithms, Systems Software, Discrete Math</p>
            </div>
            <div class="timespan">
              <p class="date">Expected May 2027</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div>
          <h2>Experience</h2>

          <div class="section">
            <div class="icon">
            <img src={Microsoft} alt="MSFT Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>Software Engineering Intern</b></p>
            <p><i>Microsoft</i></p>
            <p>Built bug-triage agent using Azure DevOps and SQL for classifying and root-causing 100K+ Copilot crashes.</p>
            <p>Shipped fixes for critical Word defects surfaced by the pipeline, eliminating 50,000+ enterprise-facing crashes.</p>
            <p>Extended Reliability AI agent with daily reporting; fixed multi-word expression defect via suggestion-layer filtering.</p>

            </div>
            <div class="timespan">
              <p class="date">May 2026 - August 2026</p>
              <p class="location">Redmond, WA</p>
            </div>
          </div>

          <div class="section">
            <div class="icon">
            <img src={Synopsys} alt="Synopsys Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>Software Engineer Intern</b></p>
            <p><i>Synopsys</i></p>
            <p>Built specialized RAG coding agent with bucket-based memory, raising multi-turn test accuracy from 40% to 82%.</p>
            <p>Engineered Go microservices with distributed caching, serving 10K+ daily agent queries at sub-200ms p99 latency.</p>

            </div>
            <div class="timespan">
              <p class="date">January 2026 - April 2026</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div>

          <div class="section">
            <div class="icon">
              <img src={Thursday} alt="Thursday Icon" class="icon"></img>
            </div>
            <div class="content">
              <p><b>Machine Learning Engineer Intern</b></p>
              <p><i>Thursday</i></p>
              <p>Designed end-to-end production ML pipeline serving personal recommendations to 10K MAUs at &lt;200ms latency.</p>
              <p>Built distributed Kafka scraping infrastructure across 100+ sites to fuel CV model training pipelines at scale.</p>
            </div>
            <div class="timespan">
              <p class="date">June 2025 - August 2025</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div>

          <div class="section">
            <div class="icon">
              <img src={PNC} alt="PNC Icon" class="icon"></img>
            </div>
            <div class="content">
              <p><b>Software Engineer Intern</b></p>
              <p><i>PNC Financial Services</i></p>
              <p>Built full-stack housing analytics micro-app over 1M+ records; raised test coverage 40% across microservices.</p>
            </div>
            <div class="timespan">
              <p class="date">May 2025 - August 2025</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div>

          <h2>Projects</h2>

          <div class="section">
            <div class="icon">
              <img src={pittImage} alt="pitt" class="icon"></img>
            </div>
            <div class="content">
              <p><b>DannyTorch</b></p>
              <p><i>Tech: Python, NumPy</i></p>
              <p>Designed deep learning framework in pure NumPy, building a reverse-mode autograd engine over a dynamic graph.</p>
              <p>Implemented full transformer stack (MHA with causal masking, RoPE, RMSNorm, SwiGLU) behind a module API.</p>
              <p>Trained n-gram objectives 500 epochs on an A100, driving loss 3.8 → 1.6 and validating the engine end-to-end.</p>
            </div>
            <div class="timespan">
              <p class="date">2026</p>
            </div>
          </div>

          <div class="section">
            <div class="icon">
              <img src={GPT} alt="Continuum Memory Transformer Icon" class="icon"></img>
            </div>
            <div class="content">
              <p><b>Continuum Memory Transformer</b></p>
              <p><i>Tech: PyTorch, NumPy, HuggingFace</i></p>
              <p>Ran a MHA/GQA memory comparison on a 36M-parameter LM, isolating the effect of gated memory conditioning.</p>
              <p>Showed memory conditioning bought no perplexity gain while costing 30% throughput (6,761 → 4,616 tok/s).</p>
              <p>Built training stack with gradient accumulation/clipping, cosine LR warmup, and checkpointing on WikiText-2.</p>
            </div>
            <div class="timespan">
              <p class="date">Nov - Dec 2025</p>
            </div>
          </div>

          <div class="section">
            <div class="icon">
              <img src={GPT} alt="Mantis Icon" class="icon"></img>
            </div>
            <div class="content">
              <p><b>Mantis — Real-Time Detection System</b></p>
              <p><i>Tech: Python, OpenCV, YOLOv8, GCP, Twilio</i></p>
              <p>Built real-time surveillance system for small businesses, winning 2nd place at CalHacks among 400+ teams.</p>
              <p>Processed 4 concurrent camera feeds at 30 FPS with 89% precision, deployed on GCP at &lt;350ms detection latency.</p>
            </div>
            <div class="timespan">
              <p class="date">October 2025</p>
            </div>
          </div>
          <h2>Skills</h2>
          <div class="section">
            <div class="icon">

            </div>
            <div class="content">
            <p><b>Languages:</b> Python, C/C++, Go, Java, JavaScript, SQL, OCaml</p>
            <p><b>ML & Research:</b> PyTorch, NumPy, HuggingFace, GRPO/RLHF, model evals, benchmarking</p>
            <p><b>Systems:</b> Linux, Docker, Kafka, Redis, Azure DevOps, Kusto, Angular, Git, Spring Boot, React</p>
            </div>
          </div>
          <h2>Leadership</h2>
          <div class="section">
            <div class="icon">
            <img src={SteelHacks} alt="SteelHacks Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>Director, SteelHacks</b></p>
            <p><i>University of Pittsburgh</i></p>
            <p>Directed Pitt's largest hackathon, running outreach and bringing in 700 participants, a 21% increase in attendance.</p>
            </div>
            <div class="timespan">
              <p class="date">2024 - Present</p>
              <p class="location">Pittsburgh, PA</p>
            </div>
          </div>

          <div class="section">
            <div class="icon">
            <img src={QB} alt="Quiz Bowl Icon" class="icon"></img>
            </div>
            <div class="content">
            <p><b>President, Quiz Bowl</b></p>
            <p><i>University of Pittsburgh</i></p>
            <p>Run practices, recruiting, and tournament travel for a nationally-ranked team, placing 3rd across all colleges.</p>
            </div>
            <div class="timespan">
              <p class="date">2024 - Present</p>
              <p class="location">Pittsburgh, PA</p>
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
        </div>
      </div>
    </div>
    </div>
  );
  }