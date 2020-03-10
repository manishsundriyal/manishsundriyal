import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2"
require('codemirror/mode/javascript/javascript.js');
require('codemirror/lib/codemirror.css');
require('codemirror/lib/codemirror.js');
require('codemirror/theme/dracula.css'); 


const Home = () => {
    return <CodeMirror
    value={
`
function greetVisitor => userName => {
    return \`Hello \${userName} \`; 
}

function introduce = () => {
    return "I am Manish, a Software Artisan"; 
}
`
    }
    options={{
      mode: {name: "javascript", json: true},
      theme: 'dracula',
      lineNumbers: true,
      readOnly: true,
      scrollbarStyle: null,
    }}
  />;
}

export default Home;
