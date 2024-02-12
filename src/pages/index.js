import React from "react";
import styles from "@/styles/Home.module.scss";

const Home = () => {
  return (
    <main className={styles.heroContainer}>
      <section className={styles.heroSection}>
        <h1>Hello, I am</h1>
        <h2>Manish Sundriyal</h2>
        <h3>Some h3 here</h3>
        <p>some extra details here</p>
        <a>Action button here</a>
      </section>
      <section>
        <h1>About Me</h1>
        <div>
          <h2>John Doe</h2>
          <p>
            <strong>Profession:</strong> Web Developer
          </p>
          <p>
            <strong>Location:</strong> City, Country
          </p>
          <p>
            I am a passionate and creative web developer with a strong
            background in front-end and back-end technologies. My goal is to
            build user-friendly and efficient web applications that leave a
            positive impact on users.
          </p>
        </div>
      </section>
      <section>
        <h2>Experience</h2>
        <div>
          <h3>Senior Web Developer</h3>
          <p>
            <strong>Company:</strong> Tech Solutions Inc.
          </p>
          <p>
            <strong>Duration:</strong> 2018 - Present
          </p>
          <p>
            Led a team of developers in designing and implementing scalable web
            applications. Collaborated with clients to understand their
            requirements and provided technical solutions to meet their needs.
          </p>
        </div>

        <div>
          <h3>Junior Developer</h3>
          <p>
            <strong>Company:</strong> CodeCrafters Ltd.
          </p>
          <p>
            <strong>Duration:</strong> 2016 - 2018
          </p>
          <p>
            Gained hands-on experience in front-end and back-end development.
            Contributed to the development of several successful projects and
            worked closely with senior developers.
          </p>
        </div>
      </section>
      <section>
        <h2>Get in Touch</h2>
        <p>
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me using the following methods:
        </p>

        <ul>
          <li>
            Email:{" "}
            <a href="mailto:john.doe@example.com">john.doe@example.com</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/johndoe" target="_blank">
              linkedin.com/in/johndoe
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/johndoe" target="_blank">
              github.com/johndoe
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a href="https://twitter.com/johndoe" target="_blank">
              @johndoe
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
