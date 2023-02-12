import './App.scss';
import {Routes,Route} from "react-router-dom";
import Home from "./components/Section/Home";
import About from "./components/Header/Nav/About";
import Skills from "./components/Header/Nav/Skills";
import Projects from "./components/Header/Nav/Projects";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/skills'} element={<Skills/>}/>
        <Route path={'/projects'} element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
