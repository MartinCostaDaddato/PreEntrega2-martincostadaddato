import { useEffect, useState } from "react";
import {getProductByCategory, getProducts} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting}) => {
    
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
        
    useEffect(() =>{

        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(

        <div className=" mt-9 justify-center w-full">
            <h1 className='text-xl flex justify-center text-neutral-800' >{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;