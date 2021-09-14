import React from "react";
import "./form-input.styles.scss";

export const FormInput = ({ handleChange, label, ...otherProp }) => (
  <div className='group'>
    <input className="form-input" onChange={handleChange} {...otherProp} />
    {label ? (
      <label
        className={`${otherProp.value.lenght ? 'shirnk' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
