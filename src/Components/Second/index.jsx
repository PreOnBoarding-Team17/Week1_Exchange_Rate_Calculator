import React, { useEffect } from 'react';
import TabTitle from 'Components/Second/TabTitle';
import TabContent from 'Components/Second/TabContent';
import Get_API from 'Utils/Api';
import 'Components/Second/scss/Second.scss';

export default function Second() {
  useEffect(async () => {
    console.log(await Get_API());
  }, []);

  return (
    <section className="Second__Container">
      <div className="Calc-Container">
        <div className="Calc-Container__Top">
          <input type="text" className="Calc-Container__Top__input" />
          <select name="Country" className="Calc-Container__Top__select">
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="KRW">KRW</option>
            <option value="HKD">HKD</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
          </select>
        </div>
        <div className="Calc-Container__Bottom">
          <ul className="Calc-Container__Bottom__item-list">
            <TabTitle />
            <TabTitle />
            <TabTitle />
            <TabTitle />
            <TabTitle />
            <TabTitle />
          </ul>
          <TabContent />
        </div>
      </div>
    </section>
  );
}
