import './App.css';
import React, { Components } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import{
  BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";
const App = ()=> {
  const pageSize = 5;

    return (
      <>
      <Navbar/>
      <News/>
   
   
        <Router>
     {/* <Navbar /> */}
   
 
     <Routes>
      <Route exact path="/business"><News key="business" pageSize={pageSize} country="in" category="business"/></Route>
      <Route exact path="/entertainment"><News key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route>
      <Route exact path="/about"><News key="general" pageSize={pageSize} country="in" category="general"/></Route>
      <Route exact path="/general"><News key="general" pageSize={pageSize} country="in" category="general"/></Route>
      <Route exact path="/health"><News key="health" pageSize={pageSize} country="in" category="health"/></Route>
      <Route exact path="/science"><News key="science" pageSize={pageSize} country="in" category="science"/></Route>
      <Route exact path="/sports"><News key="sports" pageSize={pageSize} country="in" category="sports"/></Route>
      <Route exact path="/technology"><News key="technology" pageSize={pageSize} country="in" category="technology"/></Route>
     </Routes>
     </Router>
     
      </>
    )
  }

export default App;





