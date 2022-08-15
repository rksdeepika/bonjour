import { useState } from 'react';
import { useEffect } from 'react';
const ShowInput =() =>
{
  const[quoteContent,setquoteContent] = useState('');
  const[quoteContent1,setquoteContent1] = useState('');
  const[calValue,setcalValue] = useState('');
  const[addNum,setaddNum] = useState('');
  useEffect(() =>{
    console.log(quoteContent);
    console.log(quoteContent1);
  },[quoteContent,quoteContent1]);
  if(quoteContent.length === 15){
    setquoteContent("It worked");
  }
  function ClearFunc(){
    console.log("button action is done");
    setquoteContent('');
    setquoteContent1('');
    setaddNum('');
    setcalValue('');

  }
  function calFunc(){
    console.log("button action is done");
    if(calValue === "+")
    {
    let addNumber = parseInt(quoteContent)+parseInt(quoteContent1);
    setaddNum(addNumber);
    }
    else if(calValue === "-")
    {
      let addNumber = parseInt(quoteContent)-parseInt(quoteContent1);
      setaddNum(addNumber);
      }
      else if(calValue === "*")
      {
        let addNumber = parseInt(quoteContent)*parseInt(quoteContent1);
        setaddNum(addNumber);
        }
        else if(calValue === "/")
        {
          let addNumber = parseInt(quoteContent)/parseInt(quoteContent1);
          setaddNum(addNumber);
          }
          else if(calValue === "%")
          {
            let addNumber = parseInt(quoteContent)%parseInt(quoteContent1);
            setaddNum(addNumber);
            }
            else{
              setaddNum('0');
            }

  }
  const inputSample = (
  <div>
    <h2>Input Box!!!</h2>
    <div className="row">
      <div className="col">
    <input className="form-control " type="text" placeholder="Type Something" onChange ={e => setquoteContent(e.target.value)} value={quoteContent}>
    </input>
    </div>
    <div className="col">
    <input className="form-control " type="text" placeholder="Symbols" onChange ={e => setcalValue(e.target.value)} value={calValue}>
    </input>
    </div>
    <div className="col">
    <input className="form-control " type="text"  placeholder="Type Something" onChange ={e => setquoteContent1(e.target.value)} value={quoteContent1}>
    </input>
    
    </div>
    <div className="col">
    <button type="button" className="btn btn-primary" onClick={calFunc}>Click Me</button>
</div>
<div className="col">
    <button type="button" className="btn btn-primary" onClick={ClearFunc}>Reset</button>
</div>
<br></br>
<p>VALUE ={addNum}</p>
</div>
  </div>

  );
  return inputSample;

};
export default ShowInput