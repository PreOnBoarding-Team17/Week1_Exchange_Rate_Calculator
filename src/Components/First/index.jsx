import { API } from 'API';
import React, { useEffect, useRef, useState } from 'react';
import 'Components/First/scss/First.scss';

export default function First() {
  // const [exchange, setExchange] = useState('USDKRW');
  const inputRef = useRef(null);

  useEffect(() => {
    async function getAPI() {
      await API.Get_API().then((response) => console.log(response.data));
    }
    getAPI();
  }, []);

  // const handleExchange = (e) => {
  //   setExchange(e.currentTarget.value);
  // };

  return (
    <section className="First__Container">
      <h1>환율 계산</h1>
      <form className="FormStyle">
        <p className="SendCountry">송금국가 : 미국(USD)</p>
        <label htmlFor="country">수취국가 : </label>
        <select
          id="country"
          // onChange={handleExchange}
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
