import { API } from 'API';
import { useEffect } from 'react';
import 'Components/First/scss/First.scss';

export default function First() {
  useEffect(() => {
    async function getAPI() {
      await API.Get_API().then((response) => console.log(response.data));
    }
    getAPI();
  }, []);
  return (
    <section className="First__Container">
      <h1>hello world!</h1>
    </section>
  );
}
