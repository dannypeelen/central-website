import myImage from './Portrait.jpeg';

export default function App(){
  const BASE_URL = import.meta.env.BASE_URL;


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
      <h1>Welcome to my Portfolio!</h1>
      <hr/>
      <div class="projects">
      <div class="project-row">
            <div class="project">
                <h4>AnkiMate</h4>
                <p><a href="https://ankimate.dannypeelen.com/"><i class="bi bi-github"></i></a> <i>Releasing Soon</i></p>
                <hr/>
                <p>Using a pre-trained model from HuggingFace, I am compiling a dataset to fine-tune a model to specialize in converting text in Anki-readable flashcard content. The .apkg file produce will then be built into a front-end.</p>
                <b>Topics: Full Stack, HuggingFace, Datasets</b>
            </div>
            <div class="project">
              <h4>GhostPIN</h4>
              <p><a href="https://github.com/dannypeelen/ghostpin/tree/ved"><i class="bi bi-github"></i></a> <i>October 2025</i></p>
              <hr/>
              <p>Built at HackHarvard, GhostPIN is a drop-in SDK that acts as an "invisible handshake" between merchants and customers. Not only does it verify the user but also that the merchant is legit.</p>
              <b>Topics: JavaScript, SDK, MFA</b>
            </div>
            <div class="project">
              <h4>Mantis</h4>
              <p><a href="https://github.com/oviozz/mantis"><i class="bi bi-github"></i></a> <i>October 2025</i></p>
              <hr/>
              <p>Built at CalHacks, Mantis is a live-time surveillance tool geared towards small businesses. Mantis helps ensure activities such as shoplifiting or weapon-carrying are detected and store employees are alerted.</p>
              <b>Topics: Computer Vision, Cloud</b>
            </div>
       
          </div>
          <div class="project-row">
          <div class="project">
                <h4>Magyarizer</h4>
                <p><a href="#"><i class="bi bi-github"></i></a> <i>In Progress</i></p>
                <hr/>
                <p>Taking one step further, combining my knowledge of Hungarian, I am learning how to build an optimized tokenizer specialized in agglutinative languages such as Hungarian. While the tokenizer itself is fun to build, it has been interesting to realize its limitations and alternates such as OCR.</p>
                <b>Topics: PyTorch, Encoding</b>
            </div>
            <div class="project">
              <h4>GPT-2 Reconstruction</h4>
              <p><a href="#"><i class="bi bi-github"></i></a> <i>April 2025</i></p>
              <hr/>
              <p>Following lessons by Andrej Karpathy, I am re-building ChatGPT-2 as a simple exercise to understand the building, and optimization of deployment-ready LLMs, taking a step further from transformers.</p>
              <b>Topics: LLMs, Linear Algebra, APIs</b>
            </div>
            <div class="project">
              <h4>March Madness Predictor</h4>
              <p><a href="https://github.com/dannypeelen/MLMadness"><i class="bi bi-github"></i></a> <i>March 2025</i></p>
              <hr/>
              <p>For March Madness 2025, I pulled and transformed data from SportsData.IO and built a simple PyTorch regression model to predict how many points teams would score on their opponent based regular season statistics.</p>
              <b>Topics: Data Science, PyTorch, APIs</b>
            </div>
       
          </div>
          <div class="project-row">
            <div class="project">
                <h4>Transformer Prototype</h4>
                <p><a href="https://github.com/dannypeelen/transformer-cs1678"><i class="bi bi-github"></i></a> <i>April 2025</i></p>
                <hr/>
                <p>As part of Deep Learning class, I built a simple transformer trained on Shakespeare's <i>Richard III</i> that was based off the paper <a href="https://arxiv.org/abs/1706.03762">Attention Is All You Need</a>.</p>
                <b>Topics: PyTorch, GPU Computing</b>
            </div>
            <div class="project">
                <h4><a href="https://iloveisa.dannypeelen.com">Isabella Delahunty Website</a></h4>
                <p><a href="https://iloveisa.dannypeelen.com"><i class="bi bi-github"></i></a> <i>April 2025</i></p>
                <hr/>
                <p>For my girlfriend, Isa's, graduation and eventual departure to London to grad school, I built her a little website with a little photo gallery and a daily compliment for her found <a href="https://www.iloveisa.com">here.</a></p>
                <b>Topics: React (JavaScript), CSS, AWS</b>
            </div>
          </div>
        </div>
        </div>


    </div>

);
}
