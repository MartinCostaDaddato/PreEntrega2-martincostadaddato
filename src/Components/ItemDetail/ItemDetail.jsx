import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({id, name, price, category, img,  stock, description} ) {

  return (
    <div className='flex border border-neutral-800 flex-row max-w-2xl mt-5 mb-10 m-2'>
        <img src={img} className='w-1/2 object-cover'/>
        <div className='flex flex-col w-full p-2 md:p-5 justify-between'>
            <p className='w-full text-xl md:text-3xl text-center'>{name}</p>
            <h4 className='text-sm md:text-xl'>Category: <b>{category}</b></h4>
            <p className='text-sm md:text-xl'>{description}</p>
            <h3 className='self-center text-lg md:text-3xl'>$<b>{price}</b></h3>
            <div className='flex flex-col justify-center'>
                <ItemCount initial={1} stock={stock}/>
                <button className='mt-3 border border-neutral-800 border-1 py-2 rounded-md text-neutral-800 '>Añadir al Carrito</button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail