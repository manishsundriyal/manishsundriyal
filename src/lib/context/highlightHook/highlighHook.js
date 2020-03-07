import { useEffect } from "react";
import hljs from "highlight.js";

const useSyntaxHighlighting = () => {
    useEffect(() => {
        updateCodeSyntaxHighlighting();
    }, []);
    const updateCodeSyntaxHighlighting = () => {
        document.querySelectorAll("pre code").forEach(block => {
            hljs.highlightBlock(block);
        });
    };
    return null;
}

export default useSyntaxHighlighting;
