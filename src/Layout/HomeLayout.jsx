import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Shared/Navbar';

const HomeLayout = () => {
    return (
        <div className='min-h-screen roboto max-w-screen mx-auto bg-[#fff8eb]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;