import { FormEvent, useState } from "react"
import { HomeService } from "../services/home.service"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const [code, setcode] = useState<string>("")

    const navigate = useNavigate()

    const createZoom = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const resp = await HomeService.createZoo(code)
            console.log(resp)
            navigate(`/${resp.code}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='bg-img h-[35rem]  content-end'>
            <h1 className='text-center text-2xl font-black'>Reuniones Seguras</h1>
            <div className='flex justify-center my-10 '>
                <form className='bg-white p-1 rounded' onSubmit={createZoom}>
                    <input
                        type="text"
                        className='border border-blue-500 rounded w-56 py-2 text-black'
                        value={code}
                        onChange={(e) => setcode(e.target.value)}
                    /> {' '}
                    <button className='bg-blue-500 px-5 py-2 rounded'>Iniciar la Reunion</button>
                </form>
            </div>
        </div>
    )
}

export default Header