import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'

function ItemDetailContainer() {
    const [products, setProducts] = useState({})

    useEffect(() =>{
        getProductById('1')
            .then(response => {
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            })
    },[])


  return (

    <div className='border-red-600 flex justify-center'>
        <ItemDetail {...products} />
    </div>

  )


}

    

export default ItemDetailContainer

