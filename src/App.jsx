
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Services from './components/Services'


function App() {

  const showHeader = ()=>{
    
    const header = document.getElementById("header")
    if (header.classList.contains(".shadow-header")) {
      header.classList.remove("shadow-header")
      
      
    }else{
      header.classList.add("shadow-header")
      
    }
}

window.addEventListener("scroll", showHeader)


  return (
    <main >
      
        <Nav />
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />

    </main>
  )
}

export default App
