import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Greetings from './components/Greetings'
import Info from './components/Info'
import Button from './components/Button'
import UserProfile from './components/UserProfile'
import MapRender from './components/MapRender'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import UserList from './components/UserList'
import Timer from './components/Timer'
import Forms from './components/Forms'
import MultiForm from './components/MultiForm'
import ValidatedForm from './components/ValidatedForm'
import PreferencesForms from './components/PreferencesForms'
import UncontrolledForms from './components/UncontrolledForms'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hello from './components/Hello'
import Login from './components/Login'
import ThemedComponent from './components/ThemedComponent'
import ThemeProvider from './components/ThemeProvider'
import NewCounter from './components/NewCounter'
import ExpensiveFunction from './components/ExpensiveFunction'

function App() {
  const handleButton = ()=>{
    alert('It was not meant to be');
  }
  const cityInfo = {name:"Bengaluru ",area:"WhiteField "}
  const GreekGods = [
    {id:1,name:'Aphrodite'},
    {id:2,name:'Zeus'},
    {id:3,name:'Herculese'},
    {id:4,name:"Rhea"},
  ]
  const [num,setNum] = useState(1);
  const [count,setCount] = useState(0)
  return (
    <>

     <Router>
   <NavBar/>   
    <Routes>
     
      <Route path='/' element={<Greetings/>}/>
      <Route path='/forms' element={<Forms/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/hello/:username' element={<Hello/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element
      ={<h1>404 -Page not Found</h1>}/>
     
    </Routes>
  </Router>

  {/* Use Navbar inside Router not Routes */}
   <Greetings name = "Parent" designation="CFO"
   relation="father"/>
   <Info age={25}/>
  {/* if the name is not given it will take the defalut parameter defined in the functional component. */}
  <Button handleButton={handleButton}/>
  {/* So if you make it like a function call handleButton() it will run only once the site renders not on clicking the button so dont */}
  <UserProfile city={cityInfo}/>
  <MapRender greeks={GreekGods}/>
  <Counter/>
  <TodoList/>
  <UserList/>
  {/* <Timer/> */}
  <Forms/>
  <MultiForm/>
  <ValidatedForm/>
  <PreferencesForms/>
  <UncontrolledForms/>
  <ThemeProvider>
      <div>
        <h1>React Context API Example</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>

    <NewCounter/>
    <div>
      <button onClick={()=>setCount(count+1)}>Increase Count ({count})</button>
      <button onClick={()=>setNum(num+1)}>Change Num ({num})</button>
      <ExpensiveFunction num={num}/>
    </div>
    
 

  
 
    </>
  )
}

export default App
