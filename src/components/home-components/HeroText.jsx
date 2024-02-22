import React from 'react';

const HeroText = () => {
    const videoSource = 'https://assets.mixkit.co/videos/preview/mixkit-video-sequence-of-the-coffee-preparation-process-4989-large.mp4'; // Replace with your video source

    return (
        <div className='relative w-full overflow-hidden bg-brown'>
            {/* Video background with dark overlay */}
            <video
                autoPlay
                loop
                muted
                className='w-full h-full object-cover opacity-90'
                style={{ filter: 'brightness(70%)' }}
            >
                <source src={videoSource} type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            {/* Text overlay */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                <h1 className='text-2xl md:text-6xl font-bold mb-4'>
                    Welcome to <br></br> Cafe Lago
                </h1>
            </div>
        </div>
    );
};

export default HeroText;
