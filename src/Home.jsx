"use client";
import { useState } from "react";

export default function Home() {
    const images = [
        "../img/IMG_6851.JPG",
        "../img/IMG_6290.jpg",
        "../img/IMG_8503.JPG",
        "../img/IMG_7624.jpg"
    ];

    const [currSlide, setCurrSlide] = useState(0);

    const plusSlides = (n) => {
        setCurrSlide((prev) => {
          let next = prev + n;
          if (next > images.length - 1) next = 0;
          if (next < 0) next = images.length - 1;
          return next;
    });
    };

    return (
        <div className="home">
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <a onclick={() => plusSlides(-1)}>
                    <img src={images[currSlide]} alt="Slideshow Image 1" />
                    </a>
                </div>

                <a class="prev fade" onClick={() => plusSlides(-1)}>❮</a>
                <a class="next fade" onClick={() => plusSlides(1)}>❯</a>
            </div>
            <div className="home-main">
                <h1>Welcome to Isa Delahunty's website!</h1>
                <p>This site is devoted to the ONE and ONLY Isa Delahunty, my girlfriend and best friend.</p>
                <p>I have been so fortunate to have Isa Delahunty as my girlfriend since September 2024. In that time, I have never been happier and I (occasionally) feel very loved.
                    Together, we have had many adventures, from going to the beach, to going to the movies, to just hanging out at home. I love every moment we spend together and I hope we can continue to make more memories together.
                    I love you so much, Isa. You are the best thing that has ever happened to me and I am so grateful to have you in my life. I hope you enjoy this website and all the memories we have made together.
                    Best of luck in London, I'm going to miss you so much, but may this website be a reminder of all our fun times and how much love I have for you &lt;3
                </p>
                <p>Click on the links in the navigation bar to explore.</p>
            </div>
            
        </div>
    );
}
