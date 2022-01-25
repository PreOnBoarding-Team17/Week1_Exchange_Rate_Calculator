import React, { useState, useEffect } from 'react';
import 'Components/Second/scss/TabContent.scss';
import { API } from 'API';

function TabContent({ number, exchangeFrom, exchangeTo }) {
  const [data, setData] = useState();
  const [date, setDate] = useState('');
  const [result, setResult] = useState(2000);

  /* 환율 계산 함수 */
  const calcExchageRate = (a, b, c) => {
    let res = (a * b) / c;
    res = res.toLocaleString('en', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });

    return res;
  };

  /* API 요청 */
  useEffect(() => {
    async function getAPI() {
      await API.Get_API({
        currencies: 'USD,CAD,KRW,JPY,HKD,CNY',
      })
        .then((res) => {
          if (res.data.success) {
            setData({ timestamp: res.data.timestamp, quotes: res.data.quotes });
          } else {
            window.alert('API 호출 실패');
          }
        })
        .catch((error) => {
          window.alert(error);
        });
    }
    getAPI();
  }, []);

  /* 환율 계산 */
  useEffect(() => {
    if (data) {
      setResult(
        calcExchageRate(
          Number(
            typeof number === 'string' ? number.replace(/,/g, '') : number,
          ),
          data.quotes[`USD${exchangeTo}`],
          data.quotes[`USD${exchangeFrom}`],
        ),
      );

      const dateData = new Date(data.timestamp * 1000).toString().split(' ');
      setDate(dateData[3] + '-' + dateData[1] + '-' + dateData[2]);
    }
  }, [number, exchangeFrom, exchangeTo, data]);

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
