interface Props {
    onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
    videoIds: string[];
}

const VideoOption = ({ onClick, videoIds }: Props) => {
    return (
        <div id="videoOptionsContainer">
            {videoIds.map((id) => {
                return <img src={"https://img.youtube.com/vi/"+id+"/maxresdefault.jpg"} key={id} id={id} onClick={onClick} className="videoThumbnail"/>;
            })}
        </div>
    );
};

export default VideoOption;
