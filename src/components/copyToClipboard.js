import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const CopyToClipboard = props => {
    const { slug } = props;
    const copy = () => {
        const tempElement = window.document.createElement("input");
        tempElement.value = `${window.location.hostname}/${slug}`
        tempElement.setAttribute('readonly', '');
        tempElement.style.position = 'absolute';                 
        tempElement.style.left = '-9999px';
        document.body.appendChild(tempElement);
        const selected =            
            document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }

        const snackbar = window.document.getElementById("copyToClipboard");
        snackbar.classList.add("show");
        setTimeout(() => {
            snackbar.classList.remove("show");
        }, 1400);
    };
    return <FontAwesomeIcon onClick={copy} className="float-right mt-1" icon={faCopy} />;
}

export default CopyToClipboard;
