import React from 'react';

const OpeningTimesRow = props => {
    return (
        <tr>
            <td className="td-right-align">
                {props.openingTime.day}
            </td>
            <td className="td-right-align">
                {props.openingTime.opening}
            </td>
            <td className="td-left-align">
                {props.openingTime.close}
            </td>
        </tr>
    );
}

export default OpeningTimesRow;