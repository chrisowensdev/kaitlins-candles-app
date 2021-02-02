import './App.css';
import Logo from './components/Logo';
import Nav from './components/Nav';
import AccountNav from './components/AccountNav';
import PictureCarousel from './components/PictureCarousel';
import ExpandingCards from './components/ExpandingCards';

function App() {
    return (
        <div className='App'>
            <AccountNav />
            <Logo />
            <Nav />
            <PictureCarousel />
            <ExpandingCards />
        </div>
    );
}

export default App;
