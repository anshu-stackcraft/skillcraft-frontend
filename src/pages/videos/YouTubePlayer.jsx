import { useEffect, useRef, useState } from "react";

const videos = [
    {class: 9, subject: "Hindi", chapter: 1, id: "QK8bWkzJg3U", title: "Hindi Chapter 1 - Alphabets"},
    {class: 9, subject: "Hindi", chapter: 2, id: "Yk8mVvK2dE4", title: "Hindi Chapter 2 - Vyakaran"},
    {class: 9, subject: "Hindi", chapter: 3, id: "dQw4w9WgXcQ", title: "Hindi Chapter 3 - Kahani"},
    {class: 9, subject: "Hindi", chapter: 4, id: "3JZ_D3ELwOQ", title: "Hindi Chapter 4 - Kavita"},
    {class: 9, subject: "Hindi", chapter: 5, id: "l482T0yNkeo", title: "Hindi Chapter 5 - Nibandh"},
    {class: 9, subject: "Hindi", chapter: 6, id: "a1b2c3d4e5F", title: "Hindi Chapter 6 - Samachar"},
    {class: 9, subject: "Hindi", chapter: 7, id: "f6g7h8i9g0K", title: "Hindi Chapter 7 - Patra Lekhan"},
    
];

const YouTubePlayer = () => {
    const playerRef = useRef(null);
    const iframeRef = useRef(null);
    const [activeVideo, setActiveVideo] = useState(videos[0].id);

    useEffect(() => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player(iframeRef.current, {
                videoId: activeVideo,
                playerVars: {
                    autoplay: 0,
                    controls: 1,
                },
            });
        };
    }, []);

    // Change video when activeVideo updates
    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.loadVideoById(activeVideo);
        }
    }, [activeVideo]);

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12">


            <div className="grid md:grid-cols-4 gap-8">
                <h1 className="text-3xl md:text-4xl text-center font-extrabold  col-span-full leading-snug">
                    Class <samp className="text-orange-500">{videos[0].class}</samp> <br />
                    <span className="text-white text-2xl md:text-3xl font-semibold">Subject: <samp className="text-orange-500">{videos[0].subject}</samp></span>
                </h1>

                {/* MAIN VIDEO */}
                <div className="md:col-span-3">
                    <div className="aspect-video w-full rounded-xl overflow-hidden border border-orange-500/30">
                        <div ref={iframeRef} className="w-full h-full"></div>
                    </div>
                </div>

                {/* SIDE PLAYLIST */}
                <div className="bg-zinc-900 rounded-xl p-4 h-125 overflow-y-auto border border-orange-500/20">

                    {videos.map((video) => (
                        <div
                            key={video.id}
                            onClick={() => setActiveVideo(video.id)}
                            className={`
                cursor-pointer p-3 rounded-lg mb-3 text-sm
                transition
                ${activeVideo === video.id
                                    ? "bg-orange-500 text-black"
                                    : "bg-zinc-800 hover:bg-zinc-700"}
              `}
                        >
                            {video.title}
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default YouTubePlayer;
