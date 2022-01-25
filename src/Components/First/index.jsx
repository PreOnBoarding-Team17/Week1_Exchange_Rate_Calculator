import { API } from 'API';
import 'Components/First/scss/First.scss';
import React, { useEffect, useRef, useState } from 'react';

export default function First() {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [select, setSelect] = useState('USDKRW');
  const [exchange, setExchange] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function getAPI() {
      await API.Get_API({
        currencies: 'KRW,JPY,PHP',
        source: 'USD',
        format: 1,
      }).then((response) => setData(response.data.quotes));
    }
    getAPI();
  }, []);

  // const onChangeSelect = (e) => {
  //   const key = Object.keys(data);
  //   const answer = key.find((element) => element.includes(select));
  //   setExchange(answer && data[answer].toFixed(2));
  // };

  const nowCurrency = Number(data[select]).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    let { value } = inputRef.current;
    const numberValue = Number(value);
    if (numberValue < 0 || numberValue > 10000) {
      alert('송금액이 바르지 않습니다.');
      inputRef.current.value = '';
      return;
    }
    if (typeof numberValue !== 'number') {
      alert('송금액이 바르지 않습니다.');
      inputRef.current.value = '';
      return;
    }
    setValue(numberValue);
    setExchange(Number(numberValue * nowCurrency).toLocaleString());
  };

  // useEffect(() => {
  //   onChangeSelect();
  // }, [onChangeSelect]);

  return (
    <section className="First__Container">
      <h1>환율 계산</h1>
      <form className="FormStyle" onSubmit={handleSubmit}>
        <p className="SendCountry">송금국가 : 미국(USD)</p>
        <label htmlFor="country">수취국가 : </label>
        <select
          id="country"
          onChange={(event) => setSelect(event.target.value)}
          className="ReceiveCountry">
          <option value="USDKRW">한국(KRW)</option>
          <option value="USDJPY">일본(JPY)</option>
          <option value="USDPHP">필리핀(PHP)</option>
        </select>
        <p className="ExchageRate">
          환율 : <span>{`${nowCurrency} ${select.slice(3)}`}</span>
          /USD
        </p>
        <label>송금액 : </label>
        <input ref={inputRef} />
        <button type="submit">submit</button>
      </form>
      <div>
        {value > 0 && `수취금액은 ${exchange} ${select.slice(3)}입니다`}
      </div>
    </section>
  );
}
