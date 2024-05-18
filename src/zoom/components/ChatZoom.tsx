import { FormEvent, useState } from "react"
import { socket } from "../../api/socket.io"

const ChatZoom = () => {

    const [message, setMessage] = useState<string>("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        socket.emit('message', message)
        socket.on('message-server', (payload: { message: string }) => {
            console.log(payload)
        })
    }

    return (
        <>
            <div className="flex justify-between">
                <h3>Chat</h3>
                <button>X</button>
            </div>
            <div className="flex justify-between">
                <div>Chat</div>
                <div>Encuestas</div>
            </div>
            <div className="h-full content-end ">
                <form className="mb-16" onSubmit={handleSubmit}>
                    <input
                        className="text-black"
                        type="text"
                        placeholder="Enviar mensaje..."
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button>Send</button>
                </form>
            </div>
        </>
    )
}

export default ChatZoom