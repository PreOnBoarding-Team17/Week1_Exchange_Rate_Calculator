import { API } from 'API';
import 'Components/First/scss/First.scss';
import React, { useEffect, useRef, useState } from 'react';

export default function First() {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [select, setSelect] = useState('USDKRW');
  const [exchange, setExchange] = useState(0);
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
  const onChangeSelect = () => {
    const key = Object.keys(data);
    const answer = key.find((element) => element.includes(select));
    setExchange(answer && data[answer].toFixed(2));
  };
  useEffect(() => {
    onChangeSelect();
  }, [onChangeSelect]);
  console.log(exchange);

  return (
    <section className="First__Container">
      <h1>환율 계산</h1>
      <form className="FormStyle">
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
          환율 : <span>1달러로 계산된 값이 들어올 곳</span>
          /USD
        </p>
        <label>송금액 : </label>
        <input ref={inputRef} />
        <button>submit</button>
      </form>
      <div>결과값이 들어올 곳</div>
    </section>
  );
}
