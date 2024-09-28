import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

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
        <div onClick={onClick} style={{ position: 'relative' }}>
            <TextButton variant="text" >{label}</TextButton>
            {isActive && (
                <div style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: 'purple',
                }} />
            )}
        </div>
    );
}
