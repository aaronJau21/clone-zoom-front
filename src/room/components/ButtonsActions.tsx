import { faGear, faImage, faMicrophone, faMicrophoneSlash, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { setAudio, setVideo } from "../../stores/identity/wsc"
import { WscResponse } from "../../interfaces/WscResponse.interface"

const ButtonsActions = () => {

    const dispacth = useDispatch()
    const audio = useSelector((state: WscResponse) => state.wsc.audio)
    const videoConstraints = useSelector((state: WscResponse) => state.wsc.videoConstraints)


    return (
        <div className="flex gap-5">
            <button
                onClick={() => dispacth(setAudio(!audio))}
                className="text-lg px-4 hover:bg-slate-600">
                {audio ? <FontAwesomeIcon icon={faMicrophone} /> : <FontAwesomeIcon icon={faMicrophoneSlash} />}
            </button>
            <button onClick={() => dispacth(setVideo(!videoConstraints))} className="text-lg px-4 hover:bg-slate-600">
                {videoConstraints ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                        <path d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video-off" viewBox="0 0 16 16">
                        <path d="M10.961 12.365a2 2 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518zM1.428 4.18A1 1 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634zM15 11.73l-3.5-1.555v-4.35L15 4.269zm-4.407 3.56-10-14 .814-.58 10 14z" />
                    </svg>
                )}
            </button>
            <button className="text-lg px-4 hover:bg-slate-600">
                <FontAwesomeIcon icon={faUserPlus} />
            </button>
            <button className="text-lg px-4 hover:bg-slate-600">
                <FontAwesomeIcon icon={faImage} />
            </button>
            <button className="text-lg px-4 hover:bg-slate-600">
                <FontAwesomeIcon icon={faGear} />
            </button>
        </div>
    )
}

export default ButtonsActions