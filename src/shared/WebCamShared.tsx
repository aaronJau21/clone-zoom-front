import { useSelector } from "react-redux"
import { WscResponse } from "../interfaces/WscResponse.interface"
import Webcam from "react-webcam"
import logoUser from '../assets/logoUser.png'


const WebCamShared = () => {
    const audio = useSelector((state: WscResponse) => state.wsc.audio)
    const videoConstraints = useSelector((state: WscResponse) => state.wsc.videoConstraints)



    return (
        <>
            {videoConstraints ? (
                <Webcam width={600} height={600} audio={audio} videoConstraints={videoConstraints} />
            ) : (
                <>
                    <img src={logoUser} width={600} height={600} alt="Logo User" />
                    <Webcam width={600} height={600} audio={audio} videoConstraints={false} />
                </>
            )}
        </>
    )
}

export default WebCamShared