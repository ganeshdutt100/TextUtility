import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
      color: 'white',
      backgroundColor: 'black',
    });
  
    const [btnText, setBtnText] = useState('Enable Light mode');
  
    const [first, setFirst] = useState({
      text: 'dark mode Enabled',
      style: 'dark',
    });
  
    function toggleStyle() {
      if (myStyle.color === 'white') {
        setMyStyle({
          color: 'black',
          backgroundColor: 'white',
        });
        setBtnText('Enable Dark Mode');
        setFirst({
          text: 'Enable Light Mode',
          style: 'dark',
        });
      } else if (myStyle.color === 'black') {
        setMyStyle({
          color: 'white',
          backgroundColor: 'black',
        });
        setBtnText('Enable Light Mode');
        setFirst({
          text: 'Enable Dark Mode',
          style: 'success',
        });
      }
    }
  
    return (
      <div>
        <div className={`alert alert-${first.style} alert-dismissible fade show`} role="alert">
          <strong>{first.text}</strong> You should check in on some of those fields below.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <div style={myStyle} className='container rounded-4'>
            <h1 className='pt-3'>This is a about section </h1>
      <div className="accordion accordion-flush my-5 " id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2 
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>


<div className="container">
<button type='button' className='btn btn-danger mb-5' onClick={toggleStyle}>{btnText}</button>
</div>
</div>
    </div>
  )
}
