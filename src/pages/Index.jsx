import React, { useState } from 'react';
import Navbar from '../components/molecules/Navbar';
import CommunityPage from './CommunityPage';
import { CompReel } from '../components/molecules/CompReel';
import Ecommerce from './Ecommerce';
import { Route, Routes } from 'react-router-dom';
import { CommunityModal } from '../components/atoms/CompModal';
import FloatingAddButton from '../components/atoms/FloatingAddButton';
import { AppLinks } from '../components/atoms/AppLinks';

const Index = () => {
    const [showModal, setShowModal] = useState(false);

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Navbar />
            <CompReel />
            <Routes>
                <Route path="/" element={<CommunityPage />} />
                <Route path="/Ecommerce" element={<Ecommerce />} />
            </Routes>
            <FloatingAddButton onClick={handleAddClick} />
            {showModal && <CommunityModal onClose={handleCloseModal} />}
            <AppLinks />
        </>
    );
};

export default Index;
