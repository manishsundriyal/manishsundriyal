import React from "react";
import useSyntaxHighlighting from "../../lib/context/highlightHook/highlighHook";

const Experience = () => {
    useSyntaxHighlighting();
    return (
        <pre>
            <code class="javascript">
                {
                `function Experience() {
    console.log("This is Experience");
    }` 
                }
            </code>
        </pre>
    )
}

export default Experience;
