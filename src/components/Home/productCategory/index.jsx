import React from 'react';
import { Link } from 'next/link';
import { categoryData } from '../../../fakeData/FakeData';

function category() {
    return (
        <>
            <section className='my-[80px] '>
                <div className="container">
                    <h2 className='font-medium pb-[15px] text-[35px] text-[#2c2a2a] text-center'>Product Category</h2>
                    <div className="h-[3px] w-[100px] bg-[--primary-color] m-auto mb-[35px]"></div>
                    <div className="grid grid-cols-4 gap-5 mt-[25px]">
                        {
                            categoryData.map((category) => {
                                return (
                                    <>
                                        <div>
                                            <img className='img-fluid' src={category?.img} alt="" />
                                            <h4 className='mt-[15px] text-[22px] mb-[20px]'>{category?.title}</h4>
                                            <Link className='py-[8px] px-[28px] bg-[--primary-color] inline-block text-white' to={'/category/' + category?.category}>see collection</Link>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default category;

