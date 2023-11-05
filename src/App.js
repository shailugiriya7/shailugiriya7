import './App.css';
import React, { useState } from 'react';
import { Route, Routes,  } from 'react-router-dom'


import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    // setTimeout(() => {
    //   setAlert(null); // Clear the alert after a certain time
    // }, 3000); // 3000 milliseconds (3 seconds) in this example
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      ShowAlert('Dark mode has been enabled', 'success');
      document.title = 'Text_Utils-Dark';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert('Light mode has been enabled', 'success');
      document.title = 'Text_Utils-Light';
    }
  }


  // const router=createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Layout/>}>
  //       <Route path='' element={<Home/>}/>
  //       <Route path='Contact' element={<Contact/>}/>
  //       <Route path='About' element={<About/>} />
  
  //     </Route>
  //   )
  // )
  
  
  // ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>,
  // )
  
 return (
    <Route>
      <Routes>
    <Navbar title="TextUtils" home="Home" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      <Route exact path="/about" component={About} />
      <Route exact path="/" render={() => <TextForm mode={mode} />} />
    </div>
    </Routes>
  </Route>
  
  );
}

export default App;
