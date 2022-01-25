import { API } from 'API';
import 'Components/First/scss/First.scss';
import React, { useEffect, useRef, useState } from 'react';

export default function First() {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [exchange, setExchange] = useState(0);
  const [select, setSelect] = useState('USDKRW');

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

  // 환율 변수
  const nowCurrency = Number(data[select]).toFixed(2);

  // 송금액 계산 함수
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
    setExchange(
      Number(numberValue * nowCurrency).toLocaleString(undefined, {
        minimumFractionDigits: 2,
      }),
    );
  };

  return (
    <section className="First__Container">
      <h1 className="First__Title">환율 계산</h1>
      <form className="First__Form" onSubmit={handleSubmit}>
        <div className="First__Box">
          <h3>송금국가</h3>
          <p>미국(USD)</p>
        </div>
        <div className="First__Box">
          <h3>수취국가</h3>
          <select onChange={(event) => setSelect(event.target.value)}>
            <option value="USDKRW">한국(KRW)</option>
            <option value="USDJPY">일본(JPY)</option>
            <option value="USDPHP">필리핀(PHP)</option>
          </select>
        </div>
        <div className="First__Box">
          <h3>환율</h3>
          <p className="First__Exchange_Rate">
            <span>{`${nowCurrency} ${select.slice(3)}`}</span>
            /USD
          </p>
        </div>
        <div className="First__Box LastBox">
          <h3>송금액</h3>
          <input className="First__Input" type="number" ref={inputRef} />
          <p> USD</p>
        </div>
        <button className="First__Submit" type="submit">
          submit
        </button>
      </form>
      <div className="First__Result">
        {value > 0 && `수취금액은 ${exchange} ${select.slice(3)} 입니다.`}
      </div>
    </section>
  );
}
