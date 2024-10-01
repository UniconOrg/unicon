import './UDrawer.css';

import React from 'react';
import { Drawer } from '@mui/material';
import UButtonAppBar from '../atoms/UButtonAppBar';
import navButtonsData from '../../../app_bar/domain/use_case/navButtonsData';
import NavButton from '../../domain/entities/navButton';

interface UDrawerProps {
    open: boolean;
    onClose: () => void;
    onButtonClick(navButtonData: NavButton): void;
}

const UDrawer: React.FC<UDrawerProps> = ({ open, onClose, onButtonClick }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <div className='drawer'>
                {navButtonsData.map((element) => (
                    <UButtonAppBar
                        key={element.label}
                        label={element.label}
                        isActive={false}
                        onClick={function () {
                            onClose();
                            return onButtonClick(element);
                        }}
                    />
                ))}
            </div>
        </Drawer>
    );
};

export default UDrawer;
