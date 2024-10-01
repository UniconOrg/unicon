import GitHubIcon from '@mui/icons-material/GitHub';

export default function GitHubButton() {
    const handleClick = () => {
        window.open('https://github.com/reitmas32/unicon', '_blank'); // Cambia esta URL a tu repositorio
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <GitHubIcon />
        </div>

    );
};
