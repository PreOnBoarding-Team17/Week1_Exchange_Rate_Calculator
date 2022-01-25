import React from 'react';
import 'Components/Second/scss/TabContent.scss';

function TabContent({ number, money }) {
  return (
    <div className="Calc-Container__Bottom__result">
      <h2 className="Calc-Container__Bottom__result__title">
        {money} {number}
      </h2>
      <span className="Calc-Container__Bottom__result__date">
        기준일:
        <br />
        2022-Jan-01
      </span>
    </div>
  );
}

export default TabContent;
