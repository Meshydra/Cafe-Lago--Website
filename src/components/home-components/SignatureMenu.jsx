import React from 'react';

const SignatureMenu = () => {
    const images = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1588285551270-035a6d84c7b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounded: "rounded-tr-[40%]",
            MDmarginTop: "md:mt-10",
            marginTop: "mt-2",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1555931951-18914f6692ae?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounded: "rounded-bl-[40%]",
            MDmarginTop: "md:mt-36",
            marginTop: "mt-2",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1588001291548-948f55922bfd?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounded: "rounded-tl-[40%]",
            MDmarginTop: "md:mt-48",
            marginTop: "mt-2",
        },
    ];

    return (
        <section className='w-full flex flex-col items-center bg-opacity-20 p-10'>
            <div className='flex flex-col-reverse md:flex-row items-center gap-10 md:gap-64'>
                <div className='flex flex-col gap-8'>
                    <p className='text-black font-medium text-center'>
                        Discover a progression of rare and beautiful ingredients where texture, flavor, and harmony are paramount.
                    </p>

                    <button className='bg-gradient-to-r from-[#8B4513] to-[#A0522D] p-3 text-white font-bold hover:opacity-80 duration-300 border border-white rounded-full mx-auto'>
                        Explore Our Menu
                    </button>
                </div>

                <div>
                    <h1 className='text-black font-bold text-2xl md:text-6xl text-center'>
                        Let's delve into<br /> our signature<br /> menu
                    </h1>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4'>
                {images.map(({ id, image, rounded, MDmarginTop, marginTop }) => (
                    <div key={id}>
                        <img src={image} alt="foods" className={`w-60 md:w-80 ${rounded} ${MDmarginTop} ${marginTop}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SignatureMenu;
