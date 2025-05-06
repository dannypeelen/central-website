import myImage from './Portrait.jpeg';

export default function App(){
  const BASE_URL = import.meta.env.BASE_URL;


  return(
  <div class="row">

    <div class="leftside animate__animated animate__fadeInUp">
      <div>
        <img src={myImage} alt="Me!"></img>
        <h3>Danny Peelen</h3>
        <ul>
          <li><i class="bi bi-envelope"> </i><a href="mailto:dapeelen@gmail.com">dapeelen@gmail.com</a></li>
          <li><i class="bi bi-linkedin"> </i><a href="https://linkedin.com/in/daniel-peelen" target="_blank">LinkedIn</a></li>
          <li><i class="bi bi-github"> </i><a href="https://github.com/dannypeelen" target="_blank">GitHub</a></li>
          <li></li>
        </ul>
      </div>
      <div>
        <hr/>
        <h1>Updates</h1>
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
                <h4>March Madness Predictor</h4>
                <p><a href="https://github.com/dannypeelen/MLMadness"><i class="bi bi-github"></i></a> <i>March 2025</i></p>
                <hr/>
                <p>For March Madness 2025, I pulled and transformed data from SportsData.IO and built a simple PyTorch regression model to predict how many points teams would score on their opponent based regular season statistics.</p>
                <b>Topics: Data Science, PyTorch, APIs</b>
            </div>
            <div class="project">
                <h4><a href="https://iloveisa.dannypeelen.com">Isabella Delahunty Website</a></h4>
                <p><a href="https://iloveisa.dannypeelen.com"><i class="bi bi-github"></i></a> <i>April 2025</i></p>
                <hr/>
                <p>For my girlfriend, Isa's, graduation and eventual departure to London to grad school, I built her a little website with a little photo gallery and a daily compliment for her found <a href="https://www.iloveisa.com">here.</a></p>
                <b>Topics: React (JavaScript), CSS, AWS</b>
            </div>
            <div class="project">
                <h4>Transformer Prototype</h4>
                <p><a href="https://github.com/dannypeelen/transformer-cs1678"><i class="bi bi-github"></i></a> <i>April 2025</i></p>
                <hr/>
                <p>As part of Deep Learning class, I built a simple transformer trained on Shakespeare's <i>Richard III</i> that was based off the paper <a href="https://arxiv.org/abs/1706.03762">Attention Is All You Need</a>.</p>
                <b>Topics: PyTorch, Language Modeling, GPU Computing</b>
            </div>
          </div>
          <div class="project-row">
              <div class="project">
                    <h4>Flashcard Autogenerator</h4>
                    <p><a href="#"><i class="bi bi-github"></i></a> <i>In Progress</i></p>
                    <hr/>
                    <p>Using a pre-trained model from HuggingFace, I am compiling a dataset to fine-tune a model to specialize in converting text in Anki-readable flashcard content. The .apkg file produce will then be built into a front-end.</p>
                    <b>Topics: Full Stack, HuggingFace, Datasets</b>
                </div>
              <div class="project">
                <h4>GPT-2 Reconstruction</h4>
                <p><a href="#"><i class="bi bi-github"></i></a> <i>In Progress</i></p>
                <hr/>
                <p>Following lessons by Andrej Karpathy, I am re-building ChatGPT-2 as a simple exercise to understand the building, and optimization of deployment-ready LLMs, taking a step further from transformers.</p>
                <b>Topics: LLMs, Linear Algebra, APIs</b>
            </div>
            <div class="project">
                <h4>Tokenizer</h4>
                <p><a href="#"><i class="bi bi-github"></i></a> <i>In Progress</i></p>
                <hr/>
                <p>Taking one step further, and in hopes of combining my knowledge of Hungarian, I am learning how to build an optimized tokenizer with the goal of eventually building one to specialized in agglutinative languages such as Hungarian.</p>
                <b>Topics: PyTorch, Encoding</b>
            </div>
          </div>
        </div>
        </div>


    </div>

);
}
