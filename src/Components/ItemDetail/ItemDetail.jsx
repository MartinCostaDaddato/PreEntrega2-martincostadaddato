import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({id, name, price, category, img,  stock, description} ) {

  return (
    <div className='flex sm:border border-neutral-800 flex-col sm:flex-row max-w-xs sm:max-w-5xl'>
        <img src={img} className=' sm:w-1/2 mb-10 sm:mb-0 object-cover self-center'/>
        <div className='flex flex-col w-full p-2 md:p-5 justify-between'>
            <p className='w-full text-2xl md:text-3xl text-center mb-5 sm:mb-0'>{name}</p>
            <h4 className='text-sm sm:text-xl'>Category: <b>{category}</b></h4>
            <p className='text-sm sm:text-xl'>{description}</p>
            <h3 className='self-center text-lg md:text-3xl my-5 sm:my-0'>$<b>{price}</b></h3>
            <div className='flex flex-col justify-center'>
                <ItemCount initial={1} stock={stock}/>
                <button className='mt-3 border border-neutral-800 border-1 py-2 rounded-md text-neutral-800 '>Añadir al Carrito</button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail