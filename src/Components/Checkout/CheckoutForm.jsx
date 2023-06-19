import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name,phone,email
        }

        onConfirm(userData)
    }

    return(
        <div>
            <p className="text-3xl my-5 border-b border-black text-center">Tus datos</p>
            <form onSubmit={handleConfirm} className="flex flex-col gap-10 items-center">

                <label className="flex flex-col gap-1 w-72 md:w-96">
                    <input 
                        type="text" 
                        onChange={({target}) => setName(target.value)} 
                        value={name} 
                        placeholder="Nombre"
                        className="border-b border-t border-neutral-400 p-5 rounded-lg shadow-lg "
                    />
                </label>

                <label className="flex flex-col gap-1 w-72 md:w-96">
                    <input 
                        type="text"
                        onChange={({target}) => setPhone(target.value)}
                        value={phone}
                        placeholder="Telefono"
                        className="border-b border-t border-neutral-400 p-5 rounded-lg shadow-lg"
                    />
                </label>

                <label className="flex flex-col gap-1 w-72 md:w-96">
                    <input 
                        type="text" 
                        onChange={({target}) => setEmail(target.value)}
                        value={email}
                        placeholder="Email"
                        className="border-b border-t border-neutral-400 p-5 rounded-lg drop-shadow-md"
                    />
                </label>
                    <button type="submit" className="p-5 border border-neutral-400 rounded-lg shadow-xl text-green-950 hover:bg-green-600 hover:text-white w-72 md:w-96 active:border-inherit">Crear Orden</button>
            </form>
        </div>
    )
}

export default CheckoutForm;