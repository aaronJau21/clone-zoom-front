import { RefObject } from 'react';

interface Props {
    screenStream: MediaStream | null;
    isScreenCaptureActive: boolean
    toggleScreenCapture: () => void
    videoRef: RefObject<HTMLVideoElement>

}

const ScreenCapture = ({ screenStream, videoRef }: Props) => {
    // const [screenStream, setScreenStream] = useState<MediaStream | null>(null);
    // const [isScreenCaptureActive, setIsScreenCaptureActive] = useState(false);

    return (
        <div>
            
            {screenStream && <video ref={videoRef} autoPlay />}
        </div>
    );
};

export default ScreenCapture;
