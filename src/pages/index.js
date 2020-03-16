import React, { useState } from "react"
import Typist from 'react-typist';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const [isSection3Visible, setIsSection3Visible] = useState(false);

  const animationCompleted = index => {
    switch (index) {
      case 2:
        setIsSection2Visible(true);
        break;
      case 3:
        setIsSection3Visible(true);
        break;
    }
  };

  const section2 = () => (
    <>
      <span className="rootUser">➜ </span><span className="cyan"> manishsundriyal </span><span className="purple"> git:(</span><span className="red">terminal</span><span className="purple">)</span><span className="yellow"> ✗ </span>
      <Typist className="inlineTypist" avgTypingDelay={1} cursor={{
        blink: true,
        element: '▓',
        hideWhenDone: true,
      }} avgTypingDelay={1} onTypingDone={() => animationCompleted(3)}>
        user -about
      <Typist.Delay ms={1250} />
        <br />.
        <br />.
        <br />.
        <br />
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaxxx1
      <Typist.Delay ms={1250} />
      </Typist>
    </>
  );

  const section3 = () => (
    <>
      <span className="rootUser">➜ </span><span className="cyan"> manishsundriyal </span><span className="purple"> git:(</span><span className="red">terminal</span><span className="purple">)</span><span className="yellow"> ✗ </span>
      <Typist className="inlineTypist" avgTypingDelay={1} cursor={{
        blink: true,
        element: '▓',
      }} avgTypingDelay={1}>
        user -something
      <Typist.Delay ms={1250} />
        <br />.
        <br />.
        <br />.
        <br />
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaxxx1
      <Typist.Delay ms={1250} />
      </Typist>
    </>
  );

  return (
    <Layout>
      <SEO title="Home" />
      <span className="rootUser">➜ </span><span className="cyan"> manishsundriyal </span><span className="purple"> git:(</span><span className="red">terminal</span><span className="purple">)</span><span className="yellow"> ✗ </span>
      <Typist className="inlineTypist" avgTypingDelay={1} cursor={{
        blink: true,
        element: '▓',
        hideWhenDone: true,
      }} avgTypingDelay={1} onTypingDone={() => animationCompleted(2)}>
        user -home
      <Typist.Delay ms={1250} />
        <br />.
        <br />.
        <br />.
        <br />
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaxxx1
      <Typist.Delay ms={1250} />
      </Typist>
      <br />
      {isSection2Visible && section2()}
      <br />
      {isSection3Visible && section3()}
      {/* <br/>
      <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage
