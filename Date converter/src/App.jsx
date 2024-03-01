import React, { useState } from 'react';
import { adToBs, bsToAd } from "@sbmdkl/nepali-date-converter";

export const App = () => {
  const [adDate, setADDate] = useState('');
  const [bsDate, setBSDate] = useState('');

  const handleADInputChange = (e) => {
    const inputDate = e.target.value;
    setADDate(inputDate);

    try {
      const convertedBSDate = adToBs(inputDate);
      setBSDate(convertedBSDate);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBSInputChange = (e) => {
    const inputDate = e.target.value;
    setBSDate(inputDate);

    try {
      const convertedADDate = bsToAd(inputDate);
      setADDate(convertedADDate);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div>
      <label>
        AD Date:
        <input type="date" value={adDate} onChange={handleADInputChange} />
      </label>
      <br />
      <label>
        BS Date:
        <input type="date" value={bsDate} onChange={handleBSInputChange} />
      </label>
      <br />
    </div>
  );
};

export default App;
