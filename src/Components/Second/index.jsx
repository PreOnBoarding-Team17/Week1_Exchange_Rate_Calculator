import React, { useEffect, useState } from 'react';
import TabTitle from 'Components/Second/TabTitle';
import TabContent from 'Components/Second/TabContent';
import Get_API from 'Utils/Api';
import 'Components/Second/scss/Second.scss';

export default function Second() {
  const currencies = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

  const [number, setNumber] = useState(1000);
  const [currency, setCurrency] = useState('USD'); // select 선택
  const [money, setMoney] = useState('CAD'); // content 선탹

  useEffect(async () => {
    console.log(await Get_API());
  }, []);

  const onChangeInput = ({ target: { value } }) => {
    if (!isNaN(value[value.length - 1]) || value[value.length - 1] === '.') {
      // 콤마 추가 필요
      if (parseInt(value) >= 1000) {
        setNumber(1000);
      } else {
        setNumber(value);
      }
    }
  };

  const onChangeSelect = ({ target: { value } }) => {
    setCurrency(value);
  };

  return (
    <section className="Second__Container">
      <div className="Calc-Container">
        <div className="Calc-Container__Top">
          <input
            type="text"
            value={number}
            onChange={onChangeInput}
            className="Calc-Container__Top__input"
            onChange={onChangeInput}
          />
          <select
            name="Country"
            value={currency}
            onChange={onChangeSelect}
            className="Calc-Container__Top__select">
            {currencies.map((currency, idx) => {
              return (
                <option value={currency} key={idx}>
                  {currency}
                </option>
              );
            })}
          </select>
        </div>
        <div className="Calc-Container__Bottom">
          <ul className="Calc-Container__Bottom__item-list">
            {currencies.map(
              (el, idx) =>
                currency !== el && (
                  <TabTitle name={el} key={idx} setMoney={setMoney} />
                ),
            )}
          </ul>
          <TabContent number={number} money={money} />
        </div>
      </div>
    </section>
  );
}
