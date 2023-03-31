import React from 'react';
import PercentChange from './PercentChange';

//StackOverFlow => format price number 
const priceFormat = (number) => {
  if(Math.round(number).toString().length < 4 ) {
    return new Intl.NumberFormat("us-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 7
    }).format(number);
  } else {
    return number
  }
}
//format marketCap number (6 numbers)
const mktCapFormat = (number) => {
  let newNum = String(number).split("").slice(0, -6);
  return Number(newNum.join(""))
};


const TableLine = ({coin, index}) => {
  return (
    <div className="table-line">
      <div className="infos-container">
        <span>*</span>
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} alt="logo" height="20" />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
          </div>

          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toLowerCase()}</span>
          <a
            href="https://www.coingecko.com/fr/pi%C3%A8ces"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./assets/info-icon.svg" alt="info-svg" />
          </a>
        </div>
      </div>
      <p>{priceFormat(coin.current_price).toLocaleString()} $</p>
      <p className="mktcap">
        {mktCapFormat(coin.market_cap).toLocaleString()} M$
      </p>
      <p className="volume">{coin.total_volume.toLocaleString()} $</p>
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
      <PercentChange percent={coin.price_change_percentage_24h_in_currency} />
      <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
      {coin.ath_change_percentage > -3 ? (
        <p>ATH</p>
      ) : (
        <PercentChange percent={coin.ath_change_percentage} />
      )}
    </div>
  );
}

export default TableLine