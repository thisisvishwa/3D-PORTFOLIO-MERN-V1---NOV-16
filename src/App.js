```javascript
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import ScrollToTop from './components/ScrollToTop';
import './styles/main.css';
import './styles/responsive.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <Blog />
      <ScrollToTop />
    </div>
  );
}

export default App;
```