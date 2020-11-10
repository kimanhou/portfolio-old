import React from 'react';
import './Expand.scss';

interface IExpandProps {
    onClick : () => void;
    isExpanded : boolean;
}

const Expand : React.FC<IExpandProps> = props => {
    var isExpandedClassname = props.isExpanded ? "is-expanded" : "";
    return(
        <svg viewBox="0 0 100 100" className={`expand-icon`} onClick={props.onClick}>
            <g
                id="layer1"
                transform="translate(3,3)">
                <path
                    style={{
                        fill : 'none',
                        stroke : '#000000',
                        strokeWidth : 4,
                        strokeLinecap : 'round'
                    }}
                    d="M 50,0 V 100"
                    id="path10"
                    className={`bar1 ${isExpandedClassname}`} />
                <path
                    style={{
                        fill : 'none',
                        stroke : '#000000',
                        strokeWidth : 4,
                        strokeLinecap : 'round'
                    }}
                    d="M 0,50 H 100"
                    id="path10-9"
                    className={`bar2 ${isExpandedClassname}`} />
            </g>
        </svg>
    );
}

export default Expand;