import UAppBar from "../../../app_bar/presentation/UAppBar";

import { CSSProperties } from 'react';
import Body from "../sections/Body";
import FAQPage from "../../../faq/presentation/pages/FAQPage";

export default function HomePage() {
    return (
        <div style={styles.container} id="Inicio">
            <div style={styles.appBarContainer}>
                <UAppBar />
            </div>
            <div style={styles.content}>
                <Body />
            </div>
            <FAQPage />
        </div>
    );
}

const styles: {
    container: CSSProperties,
    appBarContainer: CSSProperties,
    content: CSSProperties,
} = {
    container: {
        width: '100%',
        height: '100vh',
        overflowY: 'auto',
    },
    appBarContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
    },
    content: {
        paddingTop: '64px',
    },
};

