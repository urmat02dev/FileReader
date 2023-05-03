import React, {FormEvent, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import {IProduct} from "../../interfaces/ProductInterface";
import Loader from "../axios/Loader";
import FormComponent from "../axios/FormComponent";

interface IModal  {
    addProducts:(products:IProduct) => void
}

const Modal = ({addProducts}: IModal) => {
    const [modal,setModal] = useState<boolean>(false)




    return (
        <div>
           <div onClick={()=> setModal(false)}
               hidden={!modal} className={"z-10 fixed top-0 bottom-0 right-0 left-0 bg-black/50"}/>
               <div
                   hidden={!modal} className="z-20 py-5 px-4 bg-white rounded  fixed left-[30%]  mt-20 top-[10%] w-[600px]">
                   <h2 className={"text-center font-bold mb-3"}>Modal</h2>
                    <FormComponent
                        setModal={setModal}
                        addProducts={addProducts}/>
               </div>
            <button
            onClick={()=> setModal(true)}
            className={"w-14 h-14 flex z-0 items-center justify-center fixed right-6 bottom-6 rounded-[50%] bg-blue-600  text-white text-[30px] pb-2 hover:bg-blue-900"}>
                +
            </button>
        </div>
    );
};

export default Modal;