import React, {FC} from 'react';


interface IExampleProps {
    text:string
    number:number
    fn:(text:string) => void
    children:React.ReactNode | React.ReactChild
}
const Example :FC<IExampleProps> = ({text,number,fn,children}) => {

    return (
        <div>
            <h1>{text}</h1>
            <h1>{number}</h1>
            <button onClick={() => fn("Urmat")}>click</button>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Example;