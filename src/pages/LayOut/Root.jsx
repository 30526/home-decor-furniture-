import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
import Container from '../../components/Container/Container';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>

            <Navbar></Navbar>
            <div className='min-h-[100vh] mt-20'>
                <Container>
                    <Outlet></Outlet>
                </Container>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;