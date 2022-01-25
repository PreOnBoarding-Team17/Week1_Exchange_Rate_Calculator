import React from 'react';
import 'Components/Second/scss/TabTitle.scss';

function TabTitle({ name, money, setMoney }) {
  // let itemClassName = "Calc-Container__Bottom__Country-item";
  // if (money === name) itemClassName += " selected";

  const onClickList = () => {
    setMoney(name);
  };

  return (
    <li
      className={
        name === money
          ? 'Calc-Container__Bottom__Country-item Active'
          : 'Calc-Container__Bottom__Country-item'
      }
      onClick={onClickList}>
      {name}
    </li>
  );
}

export default TabTitle;
