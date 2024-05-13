import React, { useState, useEffect } from 'react';
import "./components.css"

function Centre(props) {

  // const [exchanges, setExchanges] = useState([{
  //   name: "",
  //   price: 0,
  //   currency: "",
  //   change: 0,
  //   change_percent: 0,
  //   country: "",
  //   timezone: ""
  // }]);

  useEffect(() => {
    fetchStockData();
  }, []);
  const fetchStockData = async () => {
    const url = 'https://real-time-finance-data.p.rapidapi.com/search?query=Apple&language=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e6470617f2mshc1716be1dae03e2p15a747jsnb3e03d0a51c4',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      if(result.status==='OK'){
        const exchanges=result.data.stock;
      exchanges.forEach(exchange => {
        let a = {
          name: exchange.name,
          price: exchange.price,
          currency: exchange.currency,
          change: exchange.change,
          change_percent: exchange.change_percent,
          country: exchange.country_code,
          timezone: exchange.timezone
        }
        props.fun(a);
        console.log(a);
      });
    }else {
      console.error("Error in API");
    }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="q-combine">
        {props.data.map((exchange, index) => (
          <div className="card" key={index}>
            <div className="card-title">{exchange.name}</div>
            <div className="card-text">Country: {exchange.country}</div>
            <div className="card-text">Timezone: {exchange.timezone}</div>
            <div className="card-text">Currency: {exchange.currency}</div>
            <div className="card-text">Price: {exchange.price}</div>
            <div className="card-text">Change:{exchange.change}</div>
            <div className="card-text">Change Percent:{exchange.change_percent}%</div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Centre;