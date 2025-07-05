import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/nav-bar";
import Hero from "./components/hero";
import Cocktails from "./components/cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
   <main>
    <NavBar />
    <Hero />
    <Cocktails />
   </main>
  )
}

export default App;
