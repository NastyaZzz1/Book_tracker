import React, { useState } from 'react';
import style from './Forms.module.css';

const AuthCard = () => {
  const [formValue, setFormValue] = useState({ 
    text: '', 
    checkbox: false, 
    radiobutton: '', 
    selector: '' 
  });

  const radioItems = ['A', 'B', 'C']

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValue);
  };

  const handlChangeText = (event) => {
    setFormValue({ ...formValue, text: event.target.value });
  };

  const handlChangeCheckBox = (event) => {
    setFormValue({ ...formValue, checkbox: event.target.checked });
  };

  const handlChangeRadio = (event) => {
    setFormValue({ ...formValue, radiobutton: event.target.value });
  };

  const handlChangeSelector = (event) => {
    setFormValue({ ...formValue, selector: event.target.value });
  };

  return (
    <div className={style.contentForms}>
      <p>AuthCard</p>
      <form onSubmit={handleSubmit}>
        <input value={formValue.text} onChange={handlChangeText} />
        <br />
        <label>
          CheckBox
          <input type="checkbox" checked={formValue.checkbox} onChange={handlChangeCheckBox}/>
        </label>
        <br />
        <label>
          {radioItems.map((el) => (
            <label>
              {el}
              <input 
                type="radio" 
                onChange={handlChangeRadio} 
                checked={formValue.radiobutton === el}
                value={el}
              />
            </label>
          ))}
        </label>
        <br />
        <label>
          <select value={formValue.selector} onChange={handlChangeSelector}>
            <option value='A'>A</option>
            <option value='B'>B</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AuthCard;
