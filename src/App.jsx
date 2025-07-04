import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/nav-bar";
import Hero from "./components/hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
   <main>
    <NavBar />
    <Hero />
    <div className="h-dvh" />
   </main>
  )
}

export default App;
