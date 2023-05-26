import React from 'react';

import { titleOptions } from '../../js/constants/titleOptions';

const TitleOption = props => {
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="title">Title *</label>
            <div className="col-sm-8">
                <select className="form-control" required name="title" defaultValue="nochoice" onChange={props.onchange}>
                    <option disabled value="nochoice">-- select an option --</option>
                    {titleOptions.map(title => <option key={title.value} value={title.value}>{title.display}</option>)}
                </select>
                <div className="invalid-feedback">Please choose an option from the list</div>
            </div>
        </div >
    );
}

export default TitleOption;