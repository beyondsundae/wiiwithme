import logo from './logo.svg';
import './App.css';

import Scrollbar from 'smooth-scrollbar-react';

import Page1 from "./Components/Pages/Page1"
import Page2 from "./Components/Pages/Page2"
import Page3 from "./Components/Pages/Page3"
import Page4 from "./Components/Pages/Page4"
import Page5 from "./Components/Pages/Page5"

function App() {
  return (
    <div className="App">
      <Scrollbar damping={0.3}>
        <div style={{height: "100vh"}}>
          <Page1/>
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
        </div>
      </Scrollbar>
    </div>
  );
}

export default App;
