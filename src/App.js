// import logo from './logo.svg';
// import './App.css';
// import Bio from './components/Bio';
import { Bio } from './components/Bio'
import Blog from './components/Blog';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <Bio />
      <Project />
      <Contact />
      {/* <Blog /> */}
    </div>
  );
}

export default App;
