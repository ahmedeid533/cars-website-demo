"use client";
import React, { useState } from 'react';
import { Backdrop, Fade, Modal, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SortServices from './Filters/SortServices';
import DiameterFilter from './Filters/DiameterFilter';
import TypeFilter from './Filters/TypeFilter';
import LoadIndexFilter from './Filters/LoadIndexFilter';
import PriceFilter from './Filters/PriceFilter/PriceFilter';
import BrandFilter from './Filters/BrandFilter';
import RatingFilter from './Filters/RatingFilter';
import AvailabilityFilter from './Filters/AvailabilityFilter';

type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterOverlay = ({ open, setOpen }: Props) => {
    const handleClose = () => setOpen(false);
    const isLargeScreen = useMediaQuery('(min-width:1024px)');
    const [showAll, setShowAll] = useState(false);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isLargeScreen ? false : open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={isLargeScreen ? false : open}>
                <div className='z-[100] border-none outline-none'>
                    <div className='w-full h-full border-none outline-none flex flex-col gap-3 absolute'>
                        <div className='custom-overlay-scrollbar bg-white px-6 pt-12 pb-24 overflow-y-scroll flex flex-col justify-start items-start gap-5 relative overflow-hidden'>
                            <button
                                className='flex flex-row items-center justify-start gap-2 cursor-pointer rounded border border-custom-black p-2'
                                onClick={handleClose}
                            >
                                <KeyboardBackspaceIcon />
                                <span className='font-bold'>Options</span>
                            </button>
                            <h2 className='text-2xl text-custom-black font-bold'>Categories</h2>
                            <div className=' flex flex-col gap-7 '>
                                <SortServices />
                                <DiameterFilter />
                                <TypeFilter />
                                <LoadIndexFilter />
                                <AnimatePresence>
                                    {showAll && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className='flex flex-col gap-7'
                                        >
                                            <PriceFilter />
                                            <BrandFilter />
                                            <RatingFilter />
                                            <AvailabilityFilter />
                                            <div className='w-full flex items-center justify-center'>
                                                <button className='border rounded border-custom-black text-custom-black py-2 w-3/4 font-semibold'>Clear All</button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <button className='text-custom-blue flex items-center gap-1 font-bold' onClick={() => setShowAll(prev => !prev)}>
                                    {showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    <span>{showAll ? 'Hide' : 'Show'} All</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}

export default FilterOverlay;
