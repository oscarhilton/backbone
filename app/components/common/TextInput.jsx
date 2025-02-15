import React, {PropTypes} from 'react';

const TextInput = ({type, name, label, onChange, placeholder, value, error}) => {
    
    let wrapperClass = 'form-group';
    
    if (error && error.length > 0){
        wrapperClass += " " + 'has-error';
    }
    
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{name}</label>
            <div className="field">
                <input
                    type={type}
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
                    
                    {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
}


TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;