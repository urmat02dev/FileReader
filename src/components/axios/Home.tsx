import React, {FC, useState} from 'react';
import {IProduct} from "../../interfaces/ProductInterface";
interface IExampleProps {
    product:IProduct
}
const Home =  ({product} :IExampleProps) => {
const [viewMore, setViewMore] = useState<boolean>(false)
    function openDesc():void {
        setViewMore(true)
        setTimeout(():void => {
            setViewMore(false)
        },1500)

    }
    return (
        <div className={"mx-auto my-5 py-5 w-[500px] border flex flex-col items-center"}>
            <h2>{product.title}</h2>
            <img src={product.image} width={100} alt=""/>
            <button onClick={openDesc}
            className={"w-1/4 h-1/3 mt-4 bg-amber-500"}>view more</button>
            {viewMore && <p className={"w-[90%]"}>{product.description}</p>}
        </div>
    );
};

export default Home;