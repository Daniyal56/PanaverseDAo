import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import bgImg from 'public/gifImage.gif'
import Image from "next/image";
import Link from "next/link";
import { useRef } from 'react';

export default function HomePage() {
  const [showText, setShowText] = useState(false);
  const myRef = useRef(null);
  const handleButtonClick = () => {
    setShowText(!showText);
  
  };

  return (
    <>
    
    <div className="Parent">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Welcome to <b>Panaverse DAO</b></h1>
          <br></br>
          <p>
          We are a team of professionals dedicated to delivering high-quality products and services to our customers. Our mission is to provide innovative solutions that meet your needs and exceed your expectations.
          <br></br>
          <br></br>
              Our company has years of experience in the industry, and we have developed a strong reputation for excellence. We offer a wide range of products and services to our clients, including web design, digital marketing, and software development.
              <br></br>
              <br></br>
              Our team of experts is passionate about what they do and committed to delivering exceptional results. We use the latest technologies and industry best practices to ensure that our clients receive the best possible service.
              <br></br>
          <br></br>

              We take pride in our work and believe that our success is directly tied to the success of our clients. That's why we are committed to building long-term relationships with our clients and helping them achieve their business goals.
              <br></br>
          <br></br>

              Thank you for visiting our website, and we look forward to working with you soon!

          </p>
          <br></br>
          <br></br>
          <button id="LearnMore" onClick={handleButtonClick}>
            Check Courses</button>
        </header>
        
      </div>
      <div className={styles.bgHomePage}>
        <Image src={bgImg} alt="img" />
      </div>
    </div>
    <div>
      {showText && (
          <section className={styles.section} id="courses">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    {/* <Image src="https://via.placeholder.com/150" className="card-img-top" alt="..."> */}
                      <div className="card-body">
                        <h5 className="card-title">Artificial Intelligence</h5>
                        <p className="card-text">Artificial Intelligence (AI) is a rapidly growing field of computer science and engineering that focuses on creating machines that can learn and think like humans. AI systems are designed to mimic human intelligence by performing tasks such as visual perception, speech recognition, decision-making, and natural language processing.</p>
                        <a href="#" className="btn btn-danger">Check More</a>
                      </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    {/* <Image src="https://via.placeholder.com/150" className="card-img-top" alt="..."> */}
                      <div className="card-body">
                        <h5 className="card-title">Blockchain</h5>
                        <p className="card-text">Blockchain is a decentralized digital ledger that records transactions in a secure and transparent manner. It was initially developed for use in cryptocurrencies, but its potential uses have expanded to include a variety of industries and applications.</p>
                        <a href="#" className="btn btn-danger">Check More</a>
                      </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    {/* <Image src="https://via.placeholder.com/150" className="card-img-top" alt="..."> */}
                      <div className="card-body">
                        <h5 className="card-title">Web 3</h5>
                        <p className="card-text">Web 3.0, also known as the decentralized web, is the future evolution of the internet that aims to create a more open, transparent, and decentralized web experience. It is built on top of blockchain technology and allows for the creation of decentralized applications (dApps) that can be run on a peer-to-peer network without the need for a central authority or intermediary.</p>
                        <a href="#" className="btn btn-danger">Check More</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
    </div>
    </>
  );
}
