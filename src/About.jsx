import myImage from './Portrait.jpeg';

export default function About(){
  const BASE_URL = import.meta.env.BASE_URL;
  return(
  <div class="row">

    <div class="leftside animate__animated animate__fadeInUp">
      <img src={myImage} alt="Me!"></img>
      <h3>Danny Peelen</h3>
      <ul>
        <li><i class="bi bi-envelope"> </i><a href="mailto:dapeelen@gmail.com">dapeelen@gmail.com</a></li>
        <li><i class="bi bi-linkedin"> </i><a href="https://linkedin.com/in/daniel-peelen">LinkedIn</a></li>
        <li><i class="bi bi-github"> </i><a href="https://github.com/dannypeelen">GitHub</a></li>
        <li></li>
      </ul>
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
      <h1>About Me</h1>
      <p>Hi, my name is Danny Peelen! I am an incoming Software Engineer at PNC currently studying at the University of Pittsburgh with a major in Computer Science and a minor in Hungarian! I am currently based in Pittsburgh, but also live an hour outside of Philadelphia.</p>
      <hr/>
      <h1>My Interests</h1>
      <h3>Computer Science</h3>
      <p>As a Software Engineer, it is no surprise Computer Science is one of my biggest interests. I am specifically interested in Machine Learning and Artifical Intelligence, and LLMs. I am also potentially looking at Natural Language Processing in the near future. I am also an officer of our Computer Science Club, check us out <a href="https://pittcsc.org/">here</a>!</p>
      <h3>Quiz Bowl</h3>
      <p>I have been playing Quiz Bowl since middle school (9 years now woah!). I have always found learning in various topics, especially literature and fine arts, incredibly exciting. In competition I managed to place 4th individually in the National Tournament. I am currently the University of Pittsburgh's Quizbowl President and have led our team to four Top 4 finishes in my time here. Most recently we placed 12th nationally at Undergraduate Nationals and are expected to compete nationally in Chicago on April 5!</p>
      <h3>Volleyball</h3>
      <p>I switched from soccer to playing volleyball my freshman year of high school, and I never looked back. I love the fast pace of volleyball and the physicality it requires, especially playing grass and beach doubles outdoors. Over the summer, and often during breaks, you can find me playing tournaments with friends hitting as either an opposite or more recently setting! Here at the University of Pittsburgh I am also on the club team, being part of 7 out of 55 people to make the team during my tryouts. Up until now, I also helped our nationally-ranked #1 Women's Volleyball team in practice as well as assisting in their scouting reports, analyzing data.</p>
      <hr/>
      <h1>Hungary</h1>
      <p>My mother was born and raised in Budapest, Hungary before moving to the US for her PhD. Because of this, I spent 2012-2013 living in Budapest and went to school there for 2nd grade. As part of that I became fluent in Hungarian (and unfortunately lost it all in the years following). My Hungarian roots and something I dearly treasure and is why I am minoring in Hungarian hear at Pitt. I am currently proficient in Hungarian being able to live there on my own no problem. I also had the pleasure last summer to study abroad in Debrecen, where I learned about the History of Modern Hungary with Dr. Róbert Barta and Dr. István Rácz!</p>
    </div>

    
  </div>
);
}
