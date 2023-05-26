import React from 'react';

const RadioButtons = props => {
    return (
        <div className="form-group row">
            <label htmlFor="gender" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-8">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="femaleRadio" value="female" checked={props.value === "female"} onChange={props.onchange} />
                    <label className="form-check-label" htmlFor="femaleRadio">
                        Female
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="maleRadio" value="male" checked={props.value === "male"} onChange={props.onchange} />
                    <label className="form-check-label" htmlFor="maleRadio">
                        Male
                        </label>
                </div>
            </div>
        </div>
    );
}

export default RadioButtons;