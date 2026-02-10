import React , {useState} from 'react'

export default function TextForm(props) {
                 //  upper case
   const handleUpClick = ()=>{
       console.log("Upper clicked"+ text);
       let New = text.toLocaleUpperCase();
       setText(New)
       props.showAlert("converted to Upper case!"," success")

   }
   const handleOnChange = (event)=>{
    console.log("on clicked")
    setText(event.target.value)
   
}
    // convert lower case//
const handleLoClick = ()=>{
  console.log("lower clicked"+ text);

  let New = text.toLowerCase();
  setText(New)
  props.showAlert("converted to Lowercase!"," success")
}

const handleToAit = () => {
  console.log("clicked" + text);
  let newText = text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  setText(newText);
  props.showAlert("converted to AIT-Case!"," Success")
};
const [text,setText] = useState('');
  return (
    <>
    <div className="container"   style={{ color: props.mode==='dark'?'white': '#042743' }  }   >
    <h1>{props.heading} - </h1>
<div className="mb-3">
 
    <textarea className='form-control' value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'white': 'white' , color: props.mode==='dark'?'black': '#042743'  }} id='exm' rows="8" ></textarea>
  </div>
    
</div>
<div className="bigcontainer"  style={{ color: props.mode==='dark'?'white': '#042743' }  } >
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleToAit}>Ait Case </button>
  <div className="container mt-4" >
    <h1> Your text summary</h1>
    <p>{text.split(" ").length}words  ,  {text.length} character  </p>
    <p>{0.008 * text.split(" ").length} Minutes Read  </p>
    <h3>Preview </h3>
    <p>{text.length>0?text:"Enter somthing in the textbox above to preview here "}</p>
  </div>
</div>
  

    </>
  )
}