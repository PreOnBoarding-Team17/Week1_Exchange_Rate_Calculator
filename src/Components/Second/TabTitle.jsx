import React from 'react';
import 'Components/Second/scss/TabTitle.scss';

function TabTitle({ name, exchangeTo, setExchangeTo }) {
  const onClickList = () => {
    setExchangeTo(name);
  };

  return (
    <li
      className={
        name === exchangeTo
          ? 'Calc-Container__Bottom__Country-item Active'
          : 'Calc-Container__Bottom__Country-item'
      }
      onClick={onClickList}>
      {name}
    </li>
  );
}

export default TabTitle;
