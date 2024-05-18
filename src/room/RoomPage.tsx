import { useNavigate, useParams } from "react-router-dom"
import ButtonsActions from "./components/ButtonsActions"
import { useDispatch, useSelector } from "react-redux"
import { UserResponse } from "../interfaces/WscResponse.interface"
import { setName } from "../stores/identity/user"
import { FormEvent } from "react"
import WebCamShared from "../shared/WebCamShared"

const RoomPage = () => {

    const { code } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const name = useSelector((state: UserResponse) => state.user.name)

    const handleName = (e: FormEvent) => {
        e.preventDefault()
        if (name.length === 0) return


        navigate(`/room/${code}`)

    }

    return (
        <div className="grid grid-cols-3 h-screen">
            <div className="mt-36 grid justify-items-center h-96">
                <h2 className="text-3xl text-center">
                    Entrar a la reunion <br />
                    <span className="text-xl">
                        {code}
                    </span>
                </h2>
                <form className="mt-9" onSubmit={handleName}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Por favor ingresa tu nombre aqui"
                            className="w-72 rounded h-10 placeholder:text-center bg-[#3D3D3D]"
                            value={name}
                            onChange={(e) => dispatch(setName(e.target.value))}
                        />
                    </div>
                    <button
                        className="w-72 rounded h-10 placeholder:text-center bg-slate-200"
                    >
                        Entrar a la reunion
                    </button>
                </form>

                <ButtonsActions />
            </div>
            <div className="col-span-2 content-center ml-32">
                <WebCamShared />
            </div>
        </div>
    )
}

export default RoomPage