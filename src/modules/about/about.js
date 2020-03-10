import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2"
require('codemirror/mode/javascript/javascript.js');
require('codemirror/lib/codemirror.css');
require('codemirror/lib/codemirror.js');
require('codemirror/theme/material-darker.css'); 


const About = () => {
    return <CodeMirror
    value={`function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
function About() {
    console.log("This is About");
}
     `}
    options={{
      mode: {name: "javascript", json: true},
      theme: 'material-darker',
      lineNumbers: true,
      readOnly: true,
      scrollbarStyle: null,
    }}
  />;
}

export default About;
