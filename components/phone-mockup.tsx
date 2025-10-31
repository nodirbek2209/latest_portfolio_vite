"use client"

import React from "react"

export interface PhoneMockupProps {
    videoSrc: string
    className?: string
}

function isVideo(src: string) {
    return /(\.mp4|\.webm|\.ogg)$/i.test(src)
}

export function PhoneMockup({ videoSrc, className = "" }: PhoneMockupProps) {
    const handleVideoEnd = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        const video = e.currentTarget
        video.currentTime = 0
        video.play()
    }

    return (
        <div
            className={`relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl transition-transform duration-300 will-change-transform hover:scale-[1.06] ${className}`}
        >
            {/* Volume buttons */}
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg" />
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg" />
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg" />
            {/* Power button */}
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg" />

            {/* Screen */}
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-black">
                {isVideo(videoSrc) ? (
                    <video
                        src={videoSrc}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        onEnded={handleVideoEnd}
                    />
                ) : (
                    <img
                        src={videoSrc}
                        alt="Phone screen"
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
        </div>
    )
}

export default PhoneMockup
