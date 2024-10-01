import { Button, styled } from '@mui/material';

const _DiscordButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    border: '1px solid transparent',
    borderColor: '#a8329e',
    color: 'white',
    fontSize: '1rem',


    '&:hover': {
        borderColor: theme.palette.primary.main,
        backgroundColor: 'transparent',
    },
}));

export default function DiscordButton() {
    return (
        <_DiscordButton variant="text" className="textButton">
            <img
                src="/discord.svg"
                alt="Discord"
                style={{ width: '24px', height: '24px', marginRight: '10px' }}
            />
            Discord
        </_DiscordButton>

    );
};