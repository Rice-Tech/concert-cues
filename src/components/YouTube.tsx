interface Props{
    videoId:string;
}

const YouTube = ({videoId}:Props) => {
    return (
        
        <>
            <iframe
                src={"https://www.youtube-nocookie.com/embed/"+videoId+"?si=vMzKmq6KUKv-kI9S"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                allowFullScreen
            ></iframe>
        </>
    );
};

export default YouTube;
