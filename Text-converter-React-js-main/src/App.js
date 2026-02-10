
import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)
  const showAlert = (message,type)=>{
       setalert({ 
        msg:message,
        type:type
       })
       setTimeout(() => {
        setalert(null)
       },3000 );
  }
  const toogleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark has been enable","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light has been enable","success");
    }

  }
  return (
  <>
<Navbar title = "Text-Converter" mode={mode} toogleMode={toogleMode}   />
 <div className="container my-3" mode={mode}>

<Alert  alert ={alert} />
 <TextForm     showAlert = {showAlert} heading="Enter The Text Analyze Below" mode={mode} />



 </div>
  

</>


 );
}


export default App;
