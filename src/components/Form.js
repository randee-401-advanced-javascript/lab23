import React from 'react';

function FormInput(props){

  return (
    <div className={props.className} >
      <label>{props.label}</label>
      <input
        type='text'
        value={props.url}
        onChange={props.onURLChange}
        />
   
      <div className='method-select'>
        <select onChange={props.onMethodChange}>
            <option value='GET'>Get</option>
            <option value='POST'>Post</option>
            <option value='PUT'>Put</option>
           <option value='DELETE'>Delete</option>
        </select> 
        <button onClick={props.onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default FormInput;