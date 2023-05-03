import React, {FormEvent, useState} from 'react';
import Loader from "./Loader";
import axios, {AxiosResponse} from "axios";
import {IProduct} from "../../interfaces/ProductInterface";

interface IFormComponentsProps{
    setModal :(modal : boolean) => void
    addProducts:(products:IProduct) => void

}
const FormComponent = ({setModal,addProducts}:IFormComponentsProps) => {
    const [value,setValue] = useState<string>("")
    const [image,setImage] = useState<string>("")
    const [file,setFile] = useState<ArrayBuffer | null | string>("")
    const [loader,setLoader] =useState<boolean>(false)
    const fileReader:FileReader = new FileReader()
    fileReader.onloadend = ():void =>{
        setFile(fileReader.result)
        console.log(fileReader.result)
    }
    const newProducts:IProduct ={
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: file,
        category: 'electronic',
        rating:{
            rate:3.4,
            count:10
        }

    }
    const handleSubmit = async (event:FormEvent) => {
        event.preventDefault()
        try {
            if (value.trim().length !== 0 ){
                newProducts.title = value
                setLoader(true)
                const res:AxiosResponse<IProduct | any>  = await axios.post<IProduct>("https://fakestoreapi.com/products",newProducts)
                addProducts(newProducts)
                setLoader(false)
                setModal(false)
            }
        }
        catch (e){
            console.log("Error",e)
            setLoader(false)    
        }
    }
    const handleInput = (event : React.ChangeEvent<HTMLInputElement>) :void => {
        setValue(event.target.value)
    }
    const handleUrl = (event:React.ChangeEvent<any>) => {
        fileReader.readAsDataURL(event.target.files[0])
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput} className={"pl-3 border rounded w-full py-3 mb-2 outline-0"}/>
            <input type="file" onChange={handleUrl}/>
            <button className="bg-green-400 py-1 px-2 border rounded">
                {loader ? <Loader/> : "ADD" }
            </button>
        </form>
    );
};

export default FormComponent;