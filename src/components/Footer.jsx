import React from 'react';
import logo from '../assets/cafe-lago-images/logo2.png';

const Footer = () => {
    const footerDetails = [
        {
            id: 1,
            heading: "Main Menu",
            details: ["About", "Menus", "Events", "New Launch", "Dishes"],
        },
        {
            id: 2,
            heading: "Collections",
            details: ["Short Eats", "Hot Beverages", "Cold Drinks", "Soups", "Sandwiches", "Pasta", "Desserts"],
        },
        {
            id: 3,
            heading: "Information",
            details: ["Contact", "Orders", "Return"],
        },
        {
            id: 4,
            heading: "Address",
            details: ["Instagram", "Facebook", "Twitter", "Youtube"],
        },
    ];

    return (
        <footer className='w-full min-h-[300px] flex flex-col justify-between items-center py-10 gap-y-16 bg-white px-5 md:px-0'>
            <div className='flex flex-col md:flex-row gap-5 md:w-full'> {/* Modified */}
                {/* First Section */}
                <div className='flex flex-col gap-5 md:w-1/4'>
                    <img src={logo} alt="cafe-logo" className='w-16 mx-auto' />
                    <div className='flex gap-2 mx-auto'>
                        {/* Add your social media links here */}
                        <a href="#" className='text-gray-400 hover:text-gray-600'>
                            Facebook
                        </a>
                        <a href="#" className='text-gray-400 hover:text-gray-600'>
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Second Section */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-3/4 text-start md:mt-0 mt-10'>
                    {footerDetails.map(({ id, heading, details }) => (
                        <div key={id} className='flex flex-col gap-4'>
                            <h1 className='font-bold leading-4'>{heading}</h1>
                            <ul className='flex flex-col gap-3 text-md leading-4'>
                                {details.map((detail, index) => (
                                    <li key={index}>
                                        <a href="#" className='text-gray-400 hover:text-gray-600'>
                                            {detail}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Third Section */}
            <div className='flex flex-col text-md md:flex-row md:flex-wrap md:gap-4  mt-auto md:mt-4'>
                <div className=''>
                    {/* Add your copyright and other information here */}
                    <span>&copy; 2024 Your Company Name.</span>
                </div>
                <div className=''>
                    <span>All rights reserved.</span>
                    <span className='ml-2'>Terms of Service | Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
