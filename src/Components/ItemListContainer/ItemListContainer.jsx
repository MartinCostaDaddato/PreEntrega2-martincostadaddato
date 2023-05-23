const ItemListContainer = ({ greeting}) => {
    return(
        <div className=" mt-9 justify-center w-full">
            <h1 className='text-3xl flex justify-center text-white' >{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;