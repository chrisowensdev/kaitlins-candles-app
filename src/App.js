import './App.css';
import Logo from './components/Logo';
import Nav from './components/Nav';
import AccountNav from './components/AccountNav';
import PictureCarousel from './components/PictureCarousel';

function App() {
    return (
        <div className='App'>
            <AccountNav />
            <Logo />
            <Nav />
            <PictureCarousel />
        </div>
    );
}

export default App;
