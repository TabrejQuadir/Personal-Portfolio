import './App.scss';
import Contact from './Component/Contact/Contact';
import Cursor from './Component/Cursor/Cursor';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import Parralex from './Component/Parallex/Parralex';
import Portfolio from './Component/Portfolio/Portfolio';
import Service from './Component/Services/Service';



function App() {
  return (
    <div className="App">
      <Cursor/>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'><Parralex type="services"/></section>
      <section><Service/></section>
      <section id='Portfolio'><Parralex type="portfolio"/> </section>
      <Portfolio/>
      <section id='Contact'><Contact/></section>
    </div>
  );
}

export default App;
