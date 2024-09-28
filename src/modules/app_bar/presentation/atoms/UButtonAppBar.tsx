import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './UButtonAppBar.css';

type UButtonAppBarProps = {
    label: string;
    isActive: boolean;
    onClick: () => void;
};

const TextButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    padding: theme.spacing(1, 2),
    color: 'white',
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

export default function UButtonAppBar({ label, isActive, onClick }: UButtonAppBarProps) {
    return (
        <div className="buttonContainer" onClick={onClick}>
            <TextButton variant="text" className="textButton">{label}</TextButton>
            {isActive && <div className="activeIndicator" />}
        </div>
    );
}
