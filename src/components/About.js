import React from "react";

const About = () => (
    <div>

        <img className="bio-pic" src={require(`../assets/images/gbpic.jpg`).default} alt="George Bravo Headshot" />
        <p>Hello, I'm George and I am an aspiring Full Stack Developer. I enjoy learning and am always looking to perfect my skills whether it be writing code, reading documentation and/or watching tutorials. My goal is to begin my career as a full stack developer and to continue to learn new concepts.</p>

        <p>Please feel free to view my resume or send me a message.</p>
    </div>
);

export default About;