import React from "react";

const PriceList = () => {
    return (
        <>
            <h1 className='text-center mt-20 font-lg text-lg'>Price List</h1>
            <div className='w-full shadow stats'>
                <div className='stat'>
                    <div className='stat-figure text-primary'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            className='inline-block w-8 h-8 stroke-current'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                            ></path>
                        </svg>
                    </div>
                    <div className='stat-title'>Buff & Touch</div>
                    <div className='stat-value text-success'>$100.00</div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-info'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            className='inline-block w-8 h-8 stroke-current'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M13 10V3L4 14h7v7l9-11h-7z'
                            ></path>
                        </svg>
                    </div>
                    <div className='stat-title'>Bumber Repair</div>
                    <div className='stat-value text-success'>$145.00</div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-info'>
                        <div className='avatar online'></div>
                    </div>

                    <div className='stat-title'>Touch Up</div>
                    <div className='stat-value text-success'>$35.00</div>
                </div>
            </div>

            <div className='w-full shadow stats'>
                <div className='stat'>
                    <div className='stat-figure text-primary'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            className='inline-block w-8 h-8 stroke-current'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                            ></path>
                        </svg>
                    </div>
                    <div className='stat-title'>Buff & Touch</div>
                    <div className='stat-value text-success'>$100.00</div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-info'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            className='inline-block w-8 h-8 stroke-current'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M13 10V3L4 14h7v7l9-11h-7z'
                            ></path>
                        </svg>
                    </div>
                    <div className='stat-title'>Bumber Repair</div>
                    <div className='stat-value text-success'>$145.00</div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-info'>
                        <div className='avatar online'></div>
                    </div>

                    <div className='stat-title'>Touch Up</div>
                    <div className='stat-value text-success'>$35.00</div>
                </div>
            </div>
        </>
    );
};

export default PriceList;