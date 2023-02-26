import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import bgImg from 'public/gifImage.gif'
import Image from "next/image";

export default function HomePage() {
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(!showText);
  };

  return (
    <div className={styles.About}>    
    <div >
      <header >
        <h1> Welcome to our institute's About page!</h1>
        <br></br>
        <p>
       

We are a leading educational institute dedicated to providing high-quality and innovative education to our students. Our institute is committed to providing a nurturing and supportive environment that fosters academic excellence, creativity, and personal growth.
<br></br>
<br></br>
Our faculty members are highly qualified and experienced professionals who are passionate about teaching and have a deep understanding of the latest industry trends and developments. We offer a wide range of programs in various disciplines, including technology, engineering, business, and healthcare.
<br></br>
<br></br>
Our mission is to empower our students to achieve their full potential and become leaders in their respective fields. We strive to provide our students with the knowledge, skills, and practical experience necessary to succeed in today's ever-changing and competitive job market.
<br></br>
<br></br>
We believe in creating a strong sense of community among our students, faculty, and staff. We encourage collaboration, teamwork, and mutual respect among all members of our institute.
<br></br>
<br></br>
Thank you for considering our institute for your education. We look forward to welcoming you to our community and helping you achieve your goals.
<br></br>
<br></br>
        </p>
        <button id="LearnMore" >Learn More</button>
      </header>
      {showText && (
        <section className={styles.section}>
          <h2>About Me</h2>
          <p>
            Hi, I'm a web developer who loves creating beautiful and responsive
            websites.
          </p>
          <p>
            I use technologies such as React, Next.js, and CSS to build
            user-friendly interfaces and delightful user experiences.
          </p>
        </section>
      )}
    </div>
    {/* <div className={styles.bgHomePage}>
        <Image src={bgImg} alt="img" /> 
    </div> */}
    </div>
  );
}
