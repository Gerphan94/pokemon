import React from 'react';

export default function Loading({ loading }) {


    if (!loading) {
        return null;
    }
    return (
        <>
            <div className='fixed inset-0 w-screen h-screen flex items-center justify-center text-blue-600'>
                <div
                    className="absolute inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>
            </div>
            <div className="w-screen h-screen opacity-10 fixed inset-0 z-[90] bg-black"></div>
        </>


    );
}