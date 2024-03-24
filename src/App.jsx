
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Expertise } from "./components/Expertise/Expertise";

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Expertise/>
      </div>
  );
}

export default App;
