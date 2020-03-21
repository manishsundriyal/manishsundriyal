import React, { useState } from "react"
import Typist from 'react-typist';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { CommandPrefix, About } from "../components";

const typistConfig = {
  className: "inlineTypist",
  cursor: {
    blink: true,
    element: '▓',
    hideWhenDone: true,
  },
  avgTypingDelay: 25
};

const IndexPage = () => {
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const [isSection3Visible, setIsSection3Visible] = useState(false);
  const [isSection4Visible, setIsSection4Visible] = useState(false);
  const [isSection5Visible, setIsSection5Visible] = useState(false);
  const [isEndVisible, setIsEndVisible] = useState(false);

  const animationCompleted = index => {
    setTimeout(() => {
      switch (index) {
        case 2:
          setIsSection2Visible(true);
          break;
        case 3:
          setIsSection3Visible(true);
          break;
        case 4:
          setIsSection4Visible(true);
          break;
        case 5:
          setIsSection5Visible(true);
          break;
        case "end":
          setIsEndVisible(true);
          break;
      }
    }, 1000);
  };

  const skills = () => {
    if(!isSection2Visible) {
      return null;
    }
    return (
      <>
        <CommandPrefix />
        <Typist {...typistConfig} onTypingDone={() => animationCompleted(3)}>
          <Typist.Delay ms={1000} />
          user -skills
        <Typist.Delay ms={1000} />
          <br />.
          <br />.
          <br />
          Currently I work with MERN stack. I have some experience with Java and Python too.
          <Typist.Delay ms={1000} />
        </Typist>
        <br />
      </>
    );
  };

  const config = () => {
    if (!isSection3Visible) {
      return null;
    }
    return (
      <>
        <CommandPrefix />
        <Typist {...typistConfig} onTypingDone={() => animationCompleted(4)}>
        <Typist.Delay ms={1000} />
          user -config
        <Typist.Delay ms={1000} />
          <br />.
          <br />.
          <br />
          I use iterm2 + ohmyzsh + vscode + pitch black.
        <Typist.Delay ms={1000} />
        </Typist>
        <br />
      </>
    );
  };

  const anythingElse = () => {
    if (!isSection4Visible) {
      return null;
    }
    return (
      <>
        <CommandPrefix />
        <Typist {...typistConfig} onTypingDone={() => animationCompleted(5)}>
        <Typist.Delay ms={1000} />
          user -anything-else
        <Typist.Delay ms={1000} />
          <br />.
          <br />.
          <br />
          I love experimenting with new things. Not just in tech, but other fields like sports, finance, and content creation.
          <Typist.Delay ms={1000} /><br />
          I love the idea of "Giving back to the community". You can find most of my content at <a href="https://medium.com/@manishsundriyal" target="_blank">medium</a> and <a href="https://www.instagram.com/manish_sundriyal/" target="_blank">instagram</a>.
        <Typist.Delay ms={1000} />
        </Typist>
        <br />
      </>
    );
  };
  
  const connect = () => {
    if (!isSection5Visible) {
      return null;
    }
    return (
      <>
        <CommandPrefix />
        <Typist {...typistConfig} onTypingDone={() => animationCompleted("end")}>
        <Typist.Delay ms={1000} />
          user -connect
        <Typist.Delay ms={1000} />
          <br />.
          <br />.
          <br />
          Feel free to connect with me at
        <Typist.Delay ms={1000} /><br />
        <span>➜ <a href="https://www.instagram.com/manish_sundriyal/" target="_blank">Instagram</a></span>
        <Typist.Delay ms={1000} />
        <span className="pad-left-40">➜ <a href="https://twitter.com/sundriyalManish" target="_blank">Twitter</a></span>
        <Typist.Delay ms={1000} />
        <br />
        <span>➜ <a href="https://www.linkedin.com/in/manish-kumar-sundriyal/" target="_blank">LinkedIn</a></span>
        <Typist.Delay ms={1000} />
        <span className="pad-left-40">➜ <a href="mailto:msundriyal27@gmail.com" target="_blank">E-Mail</a></span>
        <Typist.Delay ms={1000} /><br />
        </Typist>
        <br />
      </>
    );
  };

  return (
    <Layout>
      <SEO title="Home" />
      <CommandPrefix />
      <Typist {...typistConfig} onTypingDone={() => animationCompleted(2)}>
      <Typist.Delay ms={1000} />
        user -about
      <Typist.Delay ms={1000} />
        <br />.
        <br />.
        <br />
        I'm Manish Sundriyal, a Full Stack Engineer at <a href="https://successive.tech/" target="_blank">Successive Technoloiges</a>.
        <Typist.Delay ms={1000} /> <br />
        I believe developing good software is an art. Unlike some modern art mystery, it should be simple, separated, and unique.
        <Typist.Delay ms={1000} />
        <br />
        <br />
        ➜ Simple (KISS)
        <Typist.Delay ms={1000} /><br />
        ➜ Separated (SOC)
        <Typist.Delay ms={1000} /><br />
        ➜ Unique (DRY/SRP)
        <Typist.Delay ms={1000} /><br />
      </Typist>
        <br />
        <br />
      {skills()}
      <br />
      {config()}
      <br />
      {anythingElse()}
      <br />
      {connect()}
      <br />
      <br />
      {isEndVisible && <CommandPrefix />}
    </Layout>
  )
}

export default IndexPage
