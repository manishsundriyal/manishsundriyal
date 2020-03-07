import React from "react";
import useSyntaxHighlighting from "../../lib/context/highlightHook/highlighHook";

const Work = () => {
    useSyntaxHighlighting();
    return (
        <pre>
            <code class="javascript">
                {
                `function Work() {
    console.log("This is Work");
    }` 
                }
            </code>
        </pre>
    )
}

export default Work;
