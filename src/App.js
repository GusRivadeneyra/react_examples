// import logo from './logo.svg';
import './App.css';
import { Blog } from './blog/blog';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <div style={{
          margin: '40px 120px',
          backgroundColor: 'black',
          fontColor: 'white',
          borderRadius: '20px',
        }}>
          <Blog />
        </div> 
      </header>

    </div>
  );
}

export default App;
