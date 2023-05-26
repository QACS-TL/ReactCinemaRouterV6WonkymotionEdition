import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import OpeningTimeRow from "./OpeningTimeRow";

import { OPENINGSURL } from '../../../js/constants/urls';
//import GETOPENINGS from '../../..js/constants/urls';

const OpeningHoursTable = () => {
  const [openingTimes, setOpeningTimes] = useState([]);

  useEffect(() => {
    const fetchOpeningTimes = async () => {
      try {
        const openings = await axios(OPENINGSURL);
        setOpeningTimes(openings.data);
      } catch (e) {
        setOpeningTimes([e.message]);
      }
    };

    fetchOpeningTimes();
  }, []);

  return (
    <div className="table-responsive">
      {openingTimes.length === 0 ? (
        <Loader type="Watch" color="rgb(0, 0, 255)" height={30} width={30} />
      ) : typeof openingTimes[0] === "string" ? (
        <>
          <h1>No information available</h1>
          <p>Please check back later</p>
        </>
      ) : (
        <table className="table table-borderless">
          <thead>
            <tr>
              <th />
              <th className="td-right-align">Opens</th>
              <th className="td-left-align">Closes</th>
            </tr>
          </thead>
          <tbody>
            {openingTimes.map(openingTime => (
              <OpeningTimeRow openingTime={openingTime} key={openingTime._id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OpeningHoursTable;

// Non-HTTP solution:
// import React from 'react';

// import OpeningTimeRow from './OpeningTimeRow';

// import { openingTimes } from '../../../js/constants/openings';

// const OpeningHoursTable = () => {
//     const openingTimesRows = openingTimes.map(openingTime => <OpeningTimeRow openingTime={openingTime} key={openingTime._id} />);
//     return (
//         <div className="table-responsive">
//             <table className="table table-borderless">
//                 <thead>
//                     <tr>
//                         <th></th>
//                         <th className="td-right-align">Opens</th>
//                         <th className="td-left-align">Closes</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {openingTimesRows}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default OpeningHoursTable;
