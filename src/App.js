import logo from './logo.svg';
import './App.css';
import { Picture } from './components/picture'

function App() {
  const image1 = 'https://thumbs.dreamstime.com/b/chiste-marr%C3%B3n-caminata-de-chismes-marrones-sobre-fondo-blanco-195588706.jpg'
  const img2 = 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/07/shutterstock_226914400.jpg'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        below my pic
        <Picture fuente={image1} />

        <Picture fuente={img2} />
      </header>
    </div>
  );
}

export default App;
