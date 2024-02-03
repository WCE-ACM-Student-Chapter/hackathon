import React from "react";

const YoutubeEmbed = () => (
    <div className="video-responsive">
        <iframe
            src="https://www.youtube.com/embed/yqIgRNFX8pM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

export default YoutubeEmbed;