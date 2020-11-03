import React, { useEffect, useState } from 'react';
import './IAm.scss';

const IAm : React.FunctionComponent = props => {
    const WhatIAm = [`web developer.`, `web designer.`, `freelancer.`, `digital nomad.`, `minimalist.`];

    var [writtenText, setWrittenText] = useState("");

    const writeText = (whatIAmIndex : number, wordIndex : number) => {
        setWrittenText(WhatIAm[whatIAmIndex].slice(0, wordIndex));
        if(wordIndex + 1 > WhatIAm[whatIAmIndex].length){
            setTimeout(() => deleteText((whatIAmIndex), WhatIAm[whatIAmIndex].length), 2000);
        }
        else {
            setTimeout(() => writeText(whatIAmIndex, wordIndex + 1), 100);
        }
    }

    const deleteText = (whatIAmIndex : number, wordIndex : number) => {
        setWrittenText(WhatIAm[whatIAmIndex].slice(0, wordIndex));
        if(wordIndex - 1 < 0){
            setTimeout(() => writeText((whatIAmIndex + 1) % WhatIAm.length, 0), 1000);
        }
        else {
            setTimeout(() => deleteText(whatIAmIndex, wordIndex - 1), 100);
        }
    }

    useEffect(() => {
        writeText(0, 0);
    }, []);

    return (
        <div className={`i-am`}>
            Hello world,
            <br></br>
            I am a {writtenText}
            <div className={`i-am-cursor`}></div>
        </div>
    )
}
export default IAm;
