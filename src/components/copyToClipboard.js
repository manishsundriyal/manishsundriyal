import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const CopyToClipboard = () => {
    const copy = () => {
        const snackbar = window.document.getElementById("copyToClipboard");
        console.log("--snackbar--", snackbar);
        snackbar.classList.add("show");
        setTimeout(() => {
            snackbar.classList.remove("show");
        }, 1400);
    };
    return (
        <>
            <FontAwesomeIcon onClick={copy} className="float-right mt-1" icon={faCopy} />
        </>
    );
}

export default CopyToClipboard;
