import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StrogeData } from '../../../Context';
import { BlogData } from '../../../fakeData/FakeData';

const BlogSidebar = () => {
    const [psPost, setPsPost] = useState([1, 2, 3, 4])
    const {searchPost} = useContext(StrogeData);
    const [postQuery,setPostQuery] = searchPost

    return (
        <div className='bg-white border border-solid p-[30px] mb-[40px]'>
            <input className='border border-solid rounded-[0] text-[#747474] text-[14px] h-[40px] m-[0] outline-medium w-[80%]  px-[8] py-[8px]' type="text" placeholder='Search...'  onChange={(e) => setPostQuery(e.target.value)}/>
            <button type='submit'><i className="border-none rounded-none text-white cursor-pointer h-40 w-50px right-0 fa-solid fa-magnifying-glass"></i></button>
            <div className="popularPost mt-[5px]">
                <h3 className='bg-[#fafafa] border border-solid font-medium py-5 relative text-center text-16 '>popular post</h3>
                <div className="p-s-post mt-3">
                    {
                        BlogData ? BlogData.map((elem) => {
                            return (
                                <>
                                    <div className="row mb-3">
                                        <div className="col-4 ">
                                            <img src={`${elem?.img}`} className='w-100' alt="" />
                                        </div>
                                        <div className="col-8">
                                        cursor: pointer;
                                            <h5 className='text-16 cursor-pointer text-[#333]'>{elem?.title.substring(0, 12)}</h5>
                                            <span className='text-11 space-[.2px] leading-[20px]'><i className="fa-regular fa-calendar pe-1"></i>{elem?.date}</span>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            )
                        })
                        :
                        'popular post not found'
                    }
                </div>
            </div>
            {/* ---- All Categories -----*/}
             <div className="mt-5">
                <h3 className='title'>CATEGORIES</h3>
                 <ul className='category-list'>
                    <li className='border-b-1 border-dotted py-9 px-20'><Link className='cursor-pointer' to='/'>✜ Men</Link></li>
                    <li className='border-b-1 border-dotted py-9 px-20'><Link className='cursor-pointer'to='/'>✜ Women</Link></li>
                    <li className='border-b-1 border-dotted py-9 px-20'><Link className='cursor-pointer'to='/'>✜ jewellery</Link></li>
                    <li className='border-b-1 border-dotted py-9 px-20'><Link className='cursor-pointer' to='/'>✜ electronics</Link></li>
                 </ul>
             </div>
        </div>
    );
};

export default BlogSidebar;

