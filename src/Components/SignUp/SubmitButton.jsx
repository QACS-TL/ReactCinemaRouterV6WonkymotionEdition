import React from 'react';

const SubmitButton = props => {
    return (
        <div className="form-group row">
            <label htmlFor="submit" className="col-sm-2"></label>
            <div className="col-sm-8">
                <button type="submit" className="btn btn-primary mb-2" onClick={props.handleSubmit} disabled={!props.status}>Sign me up!</button>
            </div>
        </div>
    );
}

export default SubmitButton;