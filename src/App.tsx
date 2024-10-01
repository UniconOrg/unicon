import { CSSProperties } from 'react'
import './App.css'
import UAppBar from './modules/app_bar/presentation/UAppBar'
import CursorAura from './modules/aura/presentation/CursorAura'
import FAQPage from './modules/faq/presentation/pages/FAQPage'
import Footer from './modules/footer/presentation/Footer'
import HomePage from './modules/home/presentation/pages/HomePage'

const AppBackground: React.FC = () => {
  return <div className="app-background"></div>;
};

function App() {

  return (
    <>
    <AppBackground />
      <div style={styles.appBarContainer}>
        <UAppBar />
      </div>
      <HomePage />
      <FAQPage />
      <Footer />
      <CursorAura />
    </>
  )
}

const styles: {
  appBarContainer: CSSProperties,
} = {

  appBarContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
  },

};

export default App;