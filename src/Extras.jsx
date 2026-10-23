import { useState } from 'react';
import pittImage from './edu.png';
import PNC from './pnc.png';
import Synopsys from './synopsys.jpeg';
import Thursday from './thursday.jpeg';
import Microsoft from './microsoft.png';
import GPT from './gpt.jpeg';
import SteelHacks from './steelhacks.jpeg';
import QB from './pittqb.png';

function SweResume() {
  return (
    <>
      <h2>Education</h2>
      <div class="section">
        <div class="icon">
          <img src={pittImage} alt="Education Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>University of Pittsburgh, School of Computing & Information</b></p>
          <p><i>B.S. Computer Science, Hungarian Minor</i></p>
          <p><b>Achievements:</b> 3.9 GPA, Dean's List</p>
          <p><b>Coursework:</b> Deep Learning, Data-Driven Systems, Data Structures & Algorithms, Systems Software</p>
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
          <p>Shipped an org-wide plug-in for Microsoft's internal Copilot, reducing engineers' triage times by 60%.</p>
          <p>Analyzed 1,000,000+ Word crashes daily with Kusto and OpenTelemetry by building a reliability AI agent.</p>
          <p>Fixed Word bugs surfaced by agent's output, eliminated 50,000+ enterprise-facing crashes over 2 releases.</p>
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
          <p>Designed and implemented Ansys Mechanical's RAG coding agent memory solution with semantic clustering.</p>
          <p>Built chatbot's full test suite and a multi-turn eval harness with bucket visualization on Ansys test infrastructure.</p>
          <p>Raised multi-turn accuracy from 40% to 82% by shipping Go code to production behind feature flags.</p>
        </div>
        <div class="timespan">
          <p class="date">January 2026 - April 2026</p>
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
          <p>Built a full-stack housing analytics app that turned 1M+ housing records into homeowner-facing insights.</p>
          <p>Authored Angular unit tests, raising coverage from 45% to 85% and cutting production bugs by 35%.</p>
        </div>
        <div class="timespan">
          <p class="date">May 2025 - August 2025</p>
          <p class="location">Pittsburgh, PA</p>
        </div>
      </div>

      <div class="section">
        <div class="icon">
          <img src={pittImage} alt="Pitt Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>Teaching Assistant</b></p>
          <p><i>University of Pittsburgh</i></p>
          <p>Led recitations and practices for 100+ students in Discrete Math, raised average final scores from 78 to 84.</p>
          <p>Held 5+ hours of weekly office hours, coaching students on proof techniques and algorithmic thinking.</p>
        </div>
        <div class="timespan">
          <p class="date">August 2024 - April 2025</p>
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
          <p>Designed deep learning framework in pure NumPy without AI, building an autograd engine over a dynamic graph.</p>
          <p>Implemented full transformer stack (MHA with causal masking, RoPE, RMSNorm, SwiGLU) behind a module API.</p>
          <p>Verified all autograd ops against gradients, then trained a small LM on one A100, cutting loss from 4.9 to 1.2.</p>
        </div>
        <div class="timespan">
          <p class="date">2026</p>
        </div>
      </div>

      <div class="section">
        <div class="icon">
          <img src={GPT} alt="GhostPIN Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>GhostPIN — 2nd Place, HackHarvard 2025</b></p>
          <p><i>Tech: Node.js, Redis, PostgreSQL, WebAuthn</i></p>
          <p>Designed an anti-phishing SDK with RSA-signed protocol and origin-bound nonces that block fake checkout pages.</p>
          <p>Integrated biometric MFA into checkout flow via WebAuthn, with approvals verified end-to-end in under 200ms.</p>
        </div>
        <div class="timespan">
          <p class="date">2025</p>
        </div>
      </div>

      <div class="section">
        <div class="icon">
          <img src={GPT} alt="Mantis Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>Mantis — 2nd Place, CalHacks 2025</b></p>
          <p><i>Tech: Python, OpenCV, YOLOv8, GCP, Twilio</i></p>
          <p>Built a full-stack surveillance platform detecting theft and weapons in live feeds with real-time owner alerts.</p>
          <p>Architected a Python detection core streaming over WebSockets into a reactive Next.js/Convex dashboard on GCP.</p>
        </div>
        <div class="timespan">
          <p class="date">2025</p>
        </div>
      </div>
      <h2>Skills</h2>
      <div class="section">
        <div class="icon"></div>
        <div class="content">
          <p><b>Languages:</b> Python, C/C++, Java, Go, TypeScript, JavaScript, SQL, OCaml</p>
          <p><b>Machine Learning & AI:</b> PyTorch, NumPy, HuggingFace, transformers, model evals, benchmarking</p>
          <p><b>Cloud & DevOps:</b> AWS, GCP, Azure DevOps, Docker, Linux, Git</p>
          <p><b>Backend & Frontend:</b> Spring Boot, Kafka, Redis, React, Angular</p>
        </div>
      </div>
      <h2>Leadership</h2>
      <div class="section">
        <div class="icon">
          <img src={SteelHacks} alt="SteelHacks Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>Director, SteelHacks</b></p>
          <p><i>Pittsburgh, PA</i></p>
          <p>Grew the event 21% year over year to 600+ attendees and raised $50K+ from Google, Amazon, and PNC.</p>
        </div>
        <div class="timespan">
          <p class="date">January 2025 - September 2025</p>
          <p class="location">Pittsburgh, PA</p>
        </div>
      </div>

      <div class="section">
        <div class="icon"></div>
        <div class="content">
          <p><b>Technical Team Member, Google Developer Group</b></p>
          <p><i>Budapest University of Technology and Economics</i></p>
          <p>Led team of engineers to build myBME for students and co-organize guest tech lectures while studying abroad.</p>
        </div>
        <div class="timespan">
          <p class="date">September 2026 - Present</p>
          <p class="location">Budapest, Hungary</p>
        </div>
      </div>
      <h2>Citizenship</h2>
      <div class="section">
        <div class="icon"></div>
        <div class="content">
          <p><b>USA, Hungary</b></p>
        </div>
      </div>
    </>
  );
}

function MleResume() {
  return (
    <>
      <h2>Education</h2>
      <div class="section">
        <div class="icon">
          <img src={pittImage} alt="Education Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>University of Pittsburgh</b></p>
          <p><i>Bachelor of Science in Computer Science, Minor in Hungarian</i></p>
          <p><b>GPA:</b> 3.9/4.0 (Dean's List)</p>
          <p><b>Coursework:</b> Intro to Deep Learning, Intro to ML, Data Structures & Algorithms, Probability Theory</p>
        </div>
        <div class="timespan">
          <p class="date">Expected May 2027</p>
          <p class="location">Pittsburgh, PA</p>
        </div>
      </div>
      <h2>Work Experience</h2>

      <div class="section">
        <div class="icon">
          <img src={Microsoft} alt="MSFT Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>Software Engineering Intern</b></p>
          <p><i>Microsoft</i></p>
          <p>Shipped an org-wide plug-in for Microsoft's internal Copilot, reducing engineers' triage times by 60%.</p>
          <p>Analyzed 1,000,000+ Word crashes daily with Kusto and OpenTelemetry by building a reliability AI agent.</p>
          <p>Fixed Word bugs surfaced by agent's output, eliminated 50,000+ enterprise-facing crashes over 2 releases.</p>
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
          <p><b>Machine Learning Engineer Intern</b></p>
          <p><i>Synopsys</i></p>
          <p>Designed and implemented Ansys Mechanical's RAG coding agent memory solution with semantic clustering.</p>
          <p>Built chatbot's full test suite and a multi-turn eval harness with bucket visualization on Ansys test infrastructure.</p>
          <p>Raised multi-turn accuracy from 40% to 82% by shipping Go code to production behind feature flags.</p>
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
          <p>Carnegie Mellon startup; shipped batch fashion recommendations in under 200ms to 10K monthly users.</p>
          <p>Served real-time recommendations with a custom DeepFM model using Kafka event streaming and Redis caching.</p>
        </div>
        <div class="timespan">
          <p class="date">June 2025 - August 2025</p>
          <p class="location">Pittsburgh, PA</p>
        </div>
      </div>

      <div class="section">
        <div class="icon">
          <img src={pittImage} alt="Pitt Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>Teaching Assistant</b></p>
          <p><i>University of Pittsburgh</i></p>
          <p>Led recitations and practices for 100+ students in Discrete Math, raising average final scores from 78 to 84.</p>
          <p>Held 5+ hours of weekly office hours, coaching students on proof techniques and algorithmic thinking.</p>
        </div>
        <div class="timespan">
          <p class="date">August 2024 - April 2025</p>
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
          <p>Built an ML framework from scratch with NumPy with no AI; built full autograd over compute graphs.</p>
          <p>Coded 10+ transformer parts including attention, multi-layered perceptron, positional encodings, and more.</p>
          <p>Validated gradient correctness by training LM, reducing loss from 4.9 to 1.2 over 500 epochs on a Colab A100.</p>
        </div>
        <div class="timespan">
          <p class="date">2026</p>
        </div>
      </div>

      <div class="section">
        <div class="icon">
          <img src={GPT} alt="AnkiMate Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>AnkiMate</b></p>
          <p><i>Tech: Python, Flan-T5, PyTorch, Flask, React</i></p>
          <p>Fine-tuned Flan-T5 on self-curated 10K-row dataset to make cards from PDF/PPT, reduced validation loss 58%.</p>
          <p>Designed and deployed a Flask backend for flashcard generation; used React and Tailwind for a responsive UI.</p>
        </div>
        <div class="timespan">
          <p class="date">2025</p>
        </div>
      </div>

      <div class="section">
        <div class="icon">
          <img src={GPT} alt="Mantis Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>Mantis — 2nd Place, CalHacks 2025</b></p>
          <p><i>Tech: Python, YOLOv8, OpenCV, GCP, Docker</i></p>
          <p>Built a full-stack surveillance platform detecting theft and weapons in live feeds with real-time owner alerts.</p>
          <p>Architected a Python detection core streaming over WebSockets into a reactive Next.js/Convex dashboard on GCP.</p>
          <p>Processed 4 concurrent feeds at 30 FPS under 350ms and clipped 10+ hr footage, placing 2nd of 400+ teams.</p>
        </div>
        <div class="timespan">
          <p class="date">2025</p>
        </div>
      </div>
      <h2>Skills</h2>
      <div class="section">
        <div class="icon"></div>
        <div class="content">
          <p><b>Languages:</b> Python, C/C++, Go, Java, JavaScript, TypeScript, HTML/CSS, OCaml, SQL</p>
          <p><b>Frameworks:</b> PyTorch, HuggingFace Transformers, Scikit-learn, NumPy, Pandas, OpenCV, FastAPI, Flask</p>
          <p><b>Infra & Tools:</b> LLMs, Git, CLI, Docker, AWS, Kafka, Redis, GCP, Hadoop, Linux</p>
          <p><b>Concepts:</b> Machine Learning, AI, Model Evaluation, RAG, Distributed Training, Fine-tuning, RLHF</p>
        </div>
      </div>
      <h2>Extracurriculars</h2>
      <div class="section">
        <div class="icon">
          <img src={SteelHacks} alt="SteelHacks Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>Director, SteelHacks</b></p>
          <p><i>Pittsburgh, PA</i></p>
          <p>Led team to grow event by 21% from year prior to 600+ attendees, raised $50K+ from Google, Amazon, and PNC.</p>
        </div>
        <div class="timespan">
          <p class="date">January 2025 - September 2025</p>
          <p class="location">Pittsburgh, PA</p>
        </div>
      </div>

      <div class="section">
        <div class="icon">
          <img src={QB} alt="Quiz Bowl Icon" class="icon"></img>
        </div>
        <div class="content">
          <p><b>President, Quiz Bowl</b></p>
          <p><i>Pittsburgh, PA</i></p>
          <p>Placed 4th individually at nationals; led team to 3rd place finish at Collegiate Nationals for first time in 20 years.</p>
        </div>
        <div class="timespan">
          <p class="date">September 2024 - Present</p>
          <p class="location">Pittsburgh, PA</p>
        </div>
      </div>
    </>
  );
}

function CvResume() {
  return (
    <>
      <h2>CV</h2>
      <div class="section">
        <div class="icon"></div>
        <div class="content">
          <p>Full CV coming soon.</p>
          <p>In the meantime, see the SWE or MLE resume above, or the PDF below.</p>
        </div>
      </div>
    </>
  );
}

const RESUMES = {
  swe: { label: 'SWE', Component: SweResume, pdf: '/resume/swe.pdf' },
  mle: { label: 'MLE', Component: MleResume, pdf: '/resume/mle.pdf' },
  cv: { label: 'CV', Component: CvResume, pdf: '/resume/cv.pdf' },
};

export default function Extras(){
  const [view, setView] = useState('swe');

  const { label, Component, pdf } = RESUMES[view];
  const otherVersions = Object.keys(RESUMES).filter((key) => key !== view);

  return (
    <div>
      <div class="resume-links animate__animated animate__fadeInUp">
        <h2>Resume Version Links</h2>
        <div class="resume-links-row">
          {otherVersions.map((key) => (
            <a key={key} href="" onClick={(e) => { e.preventDefault(); setView(key); }}>{RESUMES[key].label}</a>
          ))}
        </div>
      </div>
      <div class="row">
        <div class="features animate__animated animate__fadeInUp">
          <div class="entries">
            <Component />
          </div>
        </div>
      </div>
      <div class="resume-links animate__animated animate__fadeInUp">
        <h2>{label} PDF</h2>
        <div class="resume-links-row">
          <a href={pdf} target="_blank" rel="noopener noreferrer">View / Download PDF</a>
        </div>
      </div>
    </div>
  );
}
