import './App.css';
import Logo from './components/Logo';
import Nav from './components/Nav';
import AccountNav from './components/AccountNav';
import PictureCarousel from './components/PictureCarousel';
import SaleMain from './components/SaleMain';

function App() {
    return (
        <div className='App'>
            <AccountNav />
            <Logo />
            <Nav />
            <PictureCarousel />
            <SaleMain />
        </div>
    );
}

export default App;
