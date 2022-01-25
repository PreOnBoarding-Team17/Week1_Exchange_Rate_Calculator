import { API } from 'API';
import 'Components/First/scss/First.scss';
import React, { useEffect, useRef, useState } from 'react';

export default function First() {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [select, setSelect] = useState('USDKRW');
  const [exchange, setExchange] = useState(0);

  // API 불러오기
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

  // <select> 변화 시 환율값 exchange state에 업데이트
  const onChangeSelect = () => {
    const key = Object.keys(data);
    const answer = key.find((element) => element.includes(select));
    setExchange(answer && data[answer].toFixed(2));
  };
  useEffect(() => {
    onChangeSelect();
  }, [onChangeSelect]);

  return (
    <section className="First__Container">
      <h1 className="First__Title">환율 계산</h1>
      <form className="First__Form">
        <p className="First__SendCountry">송금국가 : 미국(USD)</p>
        <div className="First__Country">
          <label htmlFor="Country">수취국가 : </label>
          <select
            id="Country"
            onChange={(event) => setSelect(event.target.value)}>
            <option value="USDKRW">한국(KRW)</option>
            <option value="USDJPY">일본(JPY)</option>
            <option value="USDPHP">필리핀(PHP)</option>
          </select>
        </div>
        <p className="First__Exchange_Rate">
          환율 : <span>1달러로 계산된 값이 들어올 곳</span>
          /USD
        </p>
        <div className="First__Send">
          <label>송금액 : </label>
          <input ref={inputRef} />
          <p> USD</p>
        </div>
        <button className="First__Submit" type="submit">
          submit
        </button>
      </form>
      <div className="First__Result">결과값이 들어올 곳</div>
    </section>
  );
}
