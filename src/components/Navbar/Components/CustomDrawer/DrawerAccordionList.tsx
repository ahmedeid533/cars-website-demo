import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import Link from 'next/link';

type props = {
    expanded: string | false,
    index: number,
    handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void,
    toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void,
    link: {
        image: string;
        title: string;
        items: {
            image: string;
            title: string;
        }[]
    }
}
const DrawerAccordionList = ({ expanded, handleChange, toggleDrawer, index, link }: props) => {
    return (
        <Accordion
            expanded={expanded === index.toString()} onChange={handleChange(index.toString())}
            sx={{
                boxShadow: 'none',
                borderBottom: 'none',
                '&:before': { display: 'none' }
            }}
        >
            <AccordionSummary
                expandIcon={
                    expanded === index.toString()
                        ? <ExpandMoreIcon className='text-[#5C5C5C]' />
                        : <KeyboardArrowRightIcon className='text-[#5C5C5C]' />
                }
                aria-controls={index.toString()}
                id={index.toString()}
                sx={{ borderBottom: 'none' }}
            >
                <div className='flex flex-row items-center gap-3'>
                    {
                        link.image &&
                        <Image src={link.image} alt={link.title} width={40} height={40} className='object-contain' />
                    }
                    <h4 className='text-custom-black'>{link.title}</h4>

                </div>
            </AccordionSummary>
            <AccordionDetails sx={{ borderBottom: 'none' }} className='px-10'>
                <div className='flex flex-col gap-7'>
                    {
                        link.items.map((item, index) => (
                            <Link href={`/product/${index + 1}`} key={index} className='flex items-center gap-3' onClick={toggleDrawer}>
                                <Image src={item.image} alt={item.title} width={40} height={40} className='object-contain' />
                                <h4 className='text-custom-black'>{item.title}</h4>
                            </Link>
                        ))
                    }
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default DrawerAccordionList
