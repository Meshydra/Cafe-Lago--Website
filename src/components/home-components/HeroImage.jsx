import React from 'react';
import happyCustomers from '/src/assets/cafe-lago-images/happy-customers.jpg';
import mainEntrance from '/src/assets/cafe-lago-images/main.jpg';
import lemonJuice from '/src/assets/cafe-lago-images/lemon-juice.jpg';

const HeroImage = () => {
    return (
        <div className='w-full  pb-10'>
            <main className='max-w-[1024px] mx-auto grid md:grid-cols-3 gap-4 items-center place-items-center pt-10'>
                <div className='relative overflow-hidden h-72 rounded-md shadow-md'>
                    <img className='object-cover w-full h-full' src={happyCustomers} alt="customers enjoying coffee" />
                </div>
                <div className='relative overflow-hidden h-72 rounded-md shadow-md'>
                    <img className='object-cover w-full h-full' src={lemonJuice} alt="duo lemon juice" />
                </div>
                <div className='relative overflow-hidden h-72 rounded-md shadow-md'>
                    <img className='object-cover w-full h-full' src={mainEntrance} alt="cafe entrance" />
                </div>
            </main>
        </div>
    );
}

export default HeroImage;
