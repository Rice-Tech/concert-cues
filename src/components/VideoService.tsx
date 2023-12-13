import { useState } from "react";
import VideoOption from "./VideoOption";
import YouTube from "./YouTube";

const videoIds = ["Qn-o3aY8ynA", "uXxRXeepRaw", "HvQg_NJalZI"];

const VideoService = () => {
    const [videoId, setVideoId] = useState(videoIds[0]);
    function handleClick(event: React.MouseEvent<HTMLImageElement>) {
        setVideoId((event.target as HTMLImageElement).id);
    }
    return (
        <>
            <YouTube videoId={videoId} />
            <VideoOption onClick={handleClick} videoIds={videoIds} />
        </>
    );
};

export default VideoService;
