import React, { useState } from 'react';
import TabTitle from 'Components/Second/TabTitle';
import TabContent from 'Components/Second/TabContent';
import 'Components/Second/scss/Second.scss';

export default function Second() {
  const currencies = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

  const [number, setNumber] = useState('1,000');
  const [currency, setCurrency] = useState('USD'); // select 선택
  const [exchangeTo, setExchangeTo] = useState('CAD'); // content 선택

  const onChangeInput = ({ target: { value } }) => {
    if (value.length === 0) setNumber('');
    else if (
      value[value.length - 1] === '.' ||
      !isNaN(value[value.length - 1])
    ) {
      if (value.replace(/,/g, '') >= 1000) {
        setNumber(parseFloat(1000).toLocaleString('en'));
      } else if (value[value.length - 1] === '.') {
        setNumber(value);
      } else {
        setNumber(Number(value.replace(/,/g, '')));
      }
    }
  };

  const onChangeSelect = ({ target: { value } }) => {
    setCurrency(value);
    if (value === 'USD') setExchangeTo('CAD');
    else setExchangeTo('USD');
  };

  return (
    <section className="Second__Container">
      <div className="Calc-Container">
        <div className="Calc-Container__Top">
          <input
            type="text"
            value={number || ''}
            onChange={onChangeInput}
            className="Calc-Container__Top__input"
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
                  <TabTitle
                    name={el}
                    key={idx}
                    exchangeTo={exchangeTo}
                    setExchangeTo={setExchangeTo}
                  />
                ),
            )}
          </ul>
          <TabContent
            number={number.length !== 0 ? number : 0}
            currency={currency}
            exchangeTo={exchangeTo}
          />
        </div>
      </div>
    </section>
  );
}
