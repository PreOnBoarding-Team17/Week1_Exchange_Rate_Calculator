import React, { useState, useEffect } from 'react';
import 'Components/Second/scss/TabContent.scss';
import axios from 'axios';
import BASE_URL from 'Utils/Api';

function TabContent({ number, currency, exchangeTo }) {
  const [date, setDate] = useState('');
  const [result, setResult] = useState(2000);

  const calcExchageRate = (a, b, c) => {
    let res = (a * b) / c;
    res = Number(res.toFixed(2)).toLocaleString('en');

    const len = res.length;
    let precision = res.indexOf('.');
    if (precision === -1) {
      res += '.00';
    } else if (len - precision !== 3) {
      while (precision + 1 < len) {
        res += '0';
        precision++;
      }
    }

    return res;
  };

  useEffect(() => {
    async function fetchData() {
      await axios.get(BASE_URL).then((res) => {
        const data = {
          timestamp: res.data.timestamp,
          quotes: res.data.quotes,
        };

        const [exchangeToRate] = Object.entries(data.quotes).filter((el) => {
          return el[0] === `USD${exchangeTo}`;
        });
        const [CurrencyRate] = Object.entries(data.quotes).filter((el) => {
          return el[0] === `USD${currency}`;
        });

        if (typeof number === 'string') {
          setResult(
            calcExchageRate(
              Number(number.replace(/,/g, '')),
              exchangeToRate[1],
              CurrencyRate[1],
            ),
          );
        } else {
          setResult(
            calcExchageRate(Number(number), exchangeToRate[1], CurrencyRate[1]),
          );
        }

        const dateData = new Date(data.timestamp * 1000).toString().split(' ');
        setDate(dateData[3] + '-' + dateData[1] + '-' + dateData[2]);
      });
    }

    fetchData();
  }, [currency, number, exchangeTo]);

  return (
    <div className="Calc-Container__Bottom__result">
      <h2 className="Calc-Container__Bottom__result__title">
        {exchangeTo} {result}
      </h2>
      <span className="Calc-Container__Bottom__result__date">
        기준일:
        <br />
        {date}
      </span>
    </div>
  );
}

export default TabContent;
