import React from 'react';

const Loader = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             style={{
                 margin: "auto",
            display: "block",
            shapeRendering: "auto"
        }}
             width="25px"
             height="25px"
             viewBox="0 0 100 100"
             preserveAspectRatio="xMidYMid">
            <g>
                <path d="M50 25A25 25 0 1 0 69.75387530939227 34.6773236586756" fill="none" stroke="#1d0e0b" strokeWidth="6"></path>
                <path d="M49 17L49 33L57 25L49 17" fill="#1d0e0b"></path>
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9174311926605504s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </g>
            </svg>
    );
};

export default Loader;