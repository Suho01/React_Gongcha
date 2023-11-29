import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Fixed from './page/Fixed';

function App() {
    return (
        <>
            <Fixed />
            <Nav />
            <Content />
            <Footer />
        </>
    );
}

export default App;
