import React from "react";
import useSyntaxHighlighting from "../../lib/context/highlightHook/highlighHook";

const About = () => {
    useSyntaxHighlighting();
    return (
        <pre>
            <code class="javascript">
                {
                `function About() {
    console.log("This is About");
    }` 
                }
            </code>
        </pre>
    )
}

export default About;
