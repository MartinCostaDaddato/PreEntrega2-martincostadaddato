import { cloneElement, useEffect, useState } from "react";
import {getProductByCategory, getProducts} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

import {getDocs, collection, query, where} from 'firebase/firestore';
import { db } from "../../main";
import { setLogLevel } from "firebase/app";

const ItemListContainer = ({ greeting}) => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
        
    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'productos-bagues'), where('category', '==', categoryId))
            : collection(db, 'productos-bagues')

            getDocs(collectionRef)
                .then(response => {
                    const productsAdapted = response.docs.map(doc => {
                        const data = doc.data()
                        return{id: doc.id, ...data}
                    })
                    setProducts(productsAdapted)
                })
                .catch(error => {
                    console.error(error)
                })
                .finally(() => {
                    setLoading(false)
                })
    })
//     useEffect(() =>{

//     //     const asyncFunc = categoryId ? getProductByCategory : getProducts

//     //     asyncFunc(categoryId)
//     //         .then(response => {
//     //             setProducts(response)
//     //         })
//     //         .catch(error => {
//     //             console.error(error)
//     //         })
//     // }, [categoryId]
//     }
// )



    return(

        <div className="mt-9 justify-center w-full">
            <h1 className='text-xl flex justify-center text-neutral-800' >{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;