import "./VideoSlide.scss";

const VideoSlide = () => {
    return <div className="video-slide">
        <div className="video-slide-block">
            <iframe width="1083"
                height="483"
                src="https://www.youtube.com/embed/OluDXYmOqE4?version=3&vq=hd1080" allowFullScreen frameborder="0">
            </iframe>
        </div>
    </div>
}

export default VideoSlide;