import './App.css';
import Logo from './components/Logo';
import Nav from './components/Nav';
import AccountNav from './components/AccountNav';

function App() {
    return (
        <div className='App'>
            <AccountNav />
            <Logo />
            <Nav />
            <h1>Hello</h1>
        </div>
    );
}

export default App;
