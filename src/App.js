import './App.css';
import ClassSelectMenu from './components/ClassSelectMenu';
import UsernameEntry from './components/UsernameEntry';

function App() {
  return <>
    <h1 className="title">
        raf pugs
    </h1>
    
    <UsernameEntry />

    <div className="App">
      <ClassSelectMenu />
      
    </div>
  </>;
}

export default App;
