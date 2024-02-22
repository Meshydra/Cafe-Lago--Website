import React from 'react';
import brownie from '/src/assets/cafe-lago-images/brownie.jpg';

const ChooseCoffee = () => {
  return (
    <section className='w-full capitalize p-20 flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-evenly bg-[#4E3521] text-white h-auto pt-10'>
       
        <div className='flex flex-col gap-8 items-start'>
            <h1 className='font-bold text-4xl text-[#ffffff]'>
                Choose Your<br/> Favorite Coffee
            </h1>
            <p className='font-medium text-gray-200'>
                Our current beans lineup for filter coffee. We<br/> will add new selections for the guest beans, keeping<br/> you guys updated on this page.
            </p>

            <button className='bg-gradient-to-r from-[#8B4513] to-[#A0522D] p-3 text-white font-bold border border-white rounded-full transition-all duration-300 hover:bg-[#A0522D] hover:border-[#8B4513]'>
                Discover the Magic
            </button>
        </div>

        <div>
            <img src={brownie} alt="Brownie Coffee" className='aspect-video object-cover w-96 rounded-lg shadow-md'/>
        </div>
        
    </section>
  );
}

export default ChooseCoffee;
