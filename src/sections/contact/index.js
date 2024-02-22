import React from "react";

const ContactSection = () => {
  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <p>
        I'm always open to new opportunities and collaborations. Feel free to
        reach out to me using the following methods:
      </p>

      <ul>
        <li>
          Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a>
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
  );
};

export default ContactSection;
