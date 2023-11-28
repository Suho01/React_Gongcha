import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import Fixed from './page/Fixed';

function App() {
    return (
        <>
            <Fixed />
            <Nav />
            <Content />
        </>
    );
}

export default App;
