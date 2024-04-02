import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from "./components/navbar"
import { Banner } from "./components/Banner"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Footer } from './components/Footer'
import { Work } from './components/Work'

function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <Banner/> 
      <Skills/>
      <Projects/> 
      <Work/>
      <Footer/> 
    </div>
    </>
  );
}
export default App
