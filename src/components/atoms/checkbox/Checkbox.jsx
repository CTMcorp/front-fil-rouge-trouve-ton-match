import { useState } from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({ name, label }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const id = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className='checkbox'>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};