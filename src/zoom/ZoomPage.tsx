import { useParams } from "react-router-dom"
import Webcam from "react-webcam"
import { useSelector } from "react-redux"
import { WscResponse } from "../interfaces/WscResponse.interface"
import logoUser from '../assets/logoUser.png'
import ScreenCapture from "./components/ScreenCapture"
import ButtonsActionsZoom from "./components/ButtomActionsZoom"
import { useEffect, useRef, useState } from "react"
import ChatZoom from "./components/ChatZoom"

const ZoomPage = () => {

  const { code } = useParams()
  const audio = useSelector((state: WscResponse) => state.wsc.audio)
  const videoConstraints = useSelector((state: WscResponse) => state.wsc.videoConstraints)

  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);
  const [isScreenCaptureActive, setIsScreenCaptureActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleScreenCapture = () => {
    if (!isScreenCaptureActive) {
      startScreenCapture();
    } else {
      stopScreenCapture();
    }
  };

  const startScreenCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      setScreenStream(stream);
      setIsScreenCaptureActive(true);
    } catch (error) {
      console.error('Error accessing screen stream:', error);
    }
  };

  const stopScreenCapture = () => {
    if (screenStream) {
      screenStream.getTracks().forEach(track => track.stop());
      setScreenStream(null);
      setIsScreenCaptureActive(false);
    }
  };

  useEffect(() => {
    if (screenStream && videoRef.current) {
      videoRef.current.srcObject = screenStream;
    }
  }, [screenStream]);

  return (
    <div className="">
      <h2 className="text-center pt-5">{code}</h2>
      <div className="flex">
        <div className="w-96 px-5">
          <ChatZoom />
        </div>
        <div className="w-full h-[90vh] flex justify-center">
          <ScreenCapture
            screenStream={screenStream}
            isScreenCaptureActive={isScreenCaptureActive}
            toggleScreenCapture={toggleScreenCapture}
            videoRef={videoRef}
          />
        </div>
        <div className="">
          {videoConstraints ? (
            <Webcam audio={audio} width={300} videoConstraints={videoConstraints} />
          ) : (
            <>
              <div className="">
                <img src={logoUser} className="w-32" alt="Logo User" />
                <Webcam audio={audio} videoConstraints={false} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center content-end">
        <ButtonsActionsZoom
          isScreenCaptureActive={isScreenCaptureActive}
          toggleScreenCapture={toggleScreenCapture}
        />
      </div>
    </div>
  )
}

export default ZoomPage