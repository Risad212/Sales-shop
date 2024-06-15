import React from 'react';

function ProductFeature() {
    return (
        <>
            <section className="my-[60px]">
                <div className="container">
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <div className="text-center">
                                <span className='iconwrapper'><i className="fa-solid fa-earth-asia text-[40px] mb-[20px]"></i></span>
                                <h3 className='text-[18px] mb-[10px] text-[#000] font-semibold'>Worldwide Shipping</h3>
                                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <span className='iconwrapper'><i className="fa-solid fa-shirt text-[40px] mb-[20px]"></i></span>
                                <h3 className='text-[18px] mb-[10px] text-[#000] font-semibold'>Best Quality</h3>
                                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <span className='iconwrapper'><i className="fa-solid fa-gift text-[40px] mb-[20px]"></i></span>
                                <h3 className='text-[18px] mb-[10px] text-[#000] font-semibold'>Best Offers</h3>
                                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <span className='iconwrapper'><i className="fa-solid fa-lock text-[40px] mb-[20px]"></i></span>
                                <h3 className='text-[18px] mb-[10px] text-[#000] font-semibold'>Secure Payments</h3>
                                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductFeature;

