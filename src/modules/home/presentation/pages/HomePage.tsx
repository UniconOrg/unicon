import UNAppBar from "../../../app_bar/presentation/UNAppBar";

import { CSSProperties } from 'react';
import Body from "../sections/Body";

export default function HomePage() {
    return (
        <div style={styles.container}>
            <div style={styles.appBarContainer}>
                <UNAppBar />
            </div>
            <div style={styles.content}>
                <Body />
                <Body />
            </div>
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

