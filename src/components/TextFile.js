import React, { useState, useEffect } from 'react';

export default function TextFile(props) {
  const [first, setfirst] = useState("your original text");
  const [text, settext] = useState("Type and paste your content here...!");

  // Function to change the text to uppercase
  function changeText() {
    console.log("button clicked");
    let newText = text.toUpperCase();
    settext(newText);
    setfirst("UpperCase apply successfully");
  }

  // Function to change the text to lowercase
  function lowercase() {
    let lowerCase = text.toLowerCase();
    settext(lowerCase);
    setfirst("LowerCase apply successfully");
  }
  // function capital fiest latter 
  // Function to clear the text
  function clear() {
    settext(" ");
    setfirst("Clear successfully");
  }

  // Function to hide the alert after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setfirst("");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [first]);

  function changeValue(event) {
    console.log("This content changed");
    settext(event.target.value);
  }

  return (
    <>
      {first && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>{first}</strong> You should check in on some of those fields below.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    <div className="container mt-5">
      <div className="mb-3">
 <h3>Fastest online tool to manipulate your text for FREE!</h3>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Type and paste your content here...!' value={text} onChange={changeValue}  style={{backgroundColor: props.mode==='dark'? '#213e62': 'white', color:props.mode=== 'dark'?'white': 'black'}} ></textarea>
</div>
{ /* toUpperCase */}
<button className='btn btn-success' onClick={changeText}>Text change </button>
{/* toLowerCase */}
<button className='btn btn-success ms-2' onClick={lowercase}>Lower Case </button>
 {/* clear */}
 <button className='btn btn-danger ms-2' onClick={clear}>Clear </button>


{/* chanracter and words count  */}
 <h2 className='mt-4' >Your text summary</h2>
 <span> Characters :  <strong>{text.length}</strong></span>
 <span className='ms-3'>Words : <strong>{text.split(" ").length}</strong></span>
 <p> you have count this word after this seconds  {0.008 * text.split(" ").length}</p>
 <h4>Preview</h4>
 <h5>{text}</h5>
</div>
  


    </>
  )
}
