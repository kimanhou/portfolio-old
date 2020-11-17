import React, { useEffect, useState } from 'react';
import './IAm.scss';

interface IIAmProps {
    isVisible : boolean;
}

const IAm : React.FC<IIAmProps> = props => {
    var isVisibleClassname = props.isVisible ? "is-visible" : ""

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
        setTimeout(() => writeText(0, 0), 2000);
    }, []);

    return (
        <div className={`i-am ${isVisibleClassname}`}>
            <div className={`i-am-hello-world`}>
                <div className={`i-am-hello-world-content`}>
                Hello world,
                </div>
            </div>
            <div className={`i-am-i-am`}>
                <div className={`i-am-i-am-content`}>
                    I am a {writtenText}
                    <div className={`i-am-cursor`}></div>
                </div>
            </div>
        </div>
    )
}
export default IAm;
