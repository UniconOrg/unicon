import InstagramIcon from '@mui/icons-material/Instagram';

export default function InstagramButton() {
    const handleClick = () => {
        window.open('https://www.instagram.com/unicon.hub/', '_blank'); // Cambia esta URL a tu repositorio
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <InstagramIcon />
        </div>

    );
};
