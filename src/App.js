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
   
        <Router>
   
 
     <Routes>
     <Route exact path="/" element={<News key="general" pageSize={pageSize} country="in" category="general"/>}/>
     <Route exact path="/business"  element={<News key="business" pageSize={pageSize} country="in" category="business"/>}/>
     <Route exact path="/entertainment"  element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
     <Route exact path="/general"  element={<News key="general" pageSize={pageSize} country="in" category="general"/>}/>
     <Route exact path="/health"  element={<News key="health" pageSize={pageSize} country="in" category="health"/>}/>
     <Route exact path="/science"  element={<News key="science" pageSize={pageSize} country="in" category="science"/>}/> 
     <Route exact path="/sports"  element={<News key="sports" pageSize={pageSize} country="in" category="sports"/>}/> 
     <Route exact path="/technology"  element={<News key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
     <Route exact path="/weather"  element={<News key="weather" pageSize={pageSize} country="in" category="weather"/>}/>

     </Routes>
     </Router>
     
      </>
    )
  }

export default App;





