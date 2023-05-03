import React, {useEffect, useState} from 'react';
import './App.scss';
import Home from "./components/axios/Home";
import axios from "axios";
import {IProduct} from "./interfaces/ProductInterface";
import Modal from "./components/modalWindow/Modal";

function App() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loader, setLoader] = useState<boolean>(false)
    const fetchProduct = async () => {
        try {
            setLoader(true)
            const res = await axios.get<IProduct[]>("https://fakestoreapi.com/products?limit=5")
            const {data}  = await res
            await setProducts(res.data)
            setLoader(false)
        }
        catch (e){
            console.log(e)
        }
    }
    const addProducts = (products: IProduct) => {
        setProducts(state => [...state,products])
    }
    useEffect(() => {
        fetchProduct()
    },[])
    console.log(products)
    return (
    <div>
        {loader && <p className={"mt-6 text-center text-amber-700"}>LOADING...</p>}
        <Modal addProducts={addProducts}
        />
        <div className={"flex flex-col items-center my-10"}>
            {
                products.map(el => <Home product={el}
                key={el.id}
                />)
            }
        </div>
    </div>
  );
}

export default App;
