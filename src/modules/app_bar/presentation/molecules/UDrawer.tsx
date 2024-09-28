import './UDrawer.css';

import React from 'react';
import { Drawer } from '@mui/material';
import UButtonAppBar from '../atoms/UButtonAppBar';

interface UDrawerProps {
    open: boolean;
    onClose: () => void;
    onButtonClick: (label: string) => void;
}

const UDrawer: React.FC<UDrawerProps> = ({ open, onClose, onButtonClick }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <div className='drawer'>
                {['Inicio', 'FAQ', 'Conducta'].map((label) => (
                    <UButtonAppBar
                        key={label}
                        label={label}
                        isActive={false}
                        onClick={() => onButtonClick(label)}
                    />
                ))}
            </div>
        </Drawer>
    );
};

export default UDrawer;
