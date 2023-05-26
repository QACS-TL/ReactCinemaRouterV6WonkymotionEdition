import React from 'react';

const FreeTextInput = props => {
    return (
        <div className="form-group row">
            <label htmlFor={props.fieldName} className="col-sm-2 col-form-label">{props.fieldDisplay}{props.required ? `*` : null}</label>
            <div className="col-sm-8">
                <input 
                    type={props.type} 
                    className={`form-control ${props.value.valid || !props.value.touched ? '' : 'errorInput'}`} 
                    required={props.required} 
                    name={props.fieldName} 
                    placeholder={props.fieldDisplay}
                    value={props.value.value} 
                    onChange={props.onchange} />
            </div>
            <div hidden={props.value.valid || !props.value.touched} className="errorInput error">{props.errorMsg}</div>
        </div>
    );
}

export default FreeTextInput;