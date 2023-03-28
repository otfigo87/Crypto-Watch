import React, { useState, useEffect } from 'react';
import PercentChange from './PercentChange';
import axios from 'axios';
import TableFilters from './TableFilters';

const HeaderInfos = () => {

    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/global`)
        .then((res) => setHeaderData(res.data.data))
    },[])
  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="tower logo" />
            Watch Tower
          </h1>
        </li>
        <li>
          Crypto-Currencies :{" "}
          {headerData.active_cryptocurrencies &&
            headerData.active_cryptocurrencies.toLocaleString()}
        </li>
        <li>Markets: {headerData.markets && headerData.markets}</li>
      </ul>

      <ul className="infos-mkt">
        <li className="global-mkt">
          Global Market Cap :
          <PercentChange
            percent={headerData.market_cap_change_percentage_24h_usd}
          />
        </li>
        <li>
          BTC Dominance: {headerData.market_cap_percentage && headerData.market_cap_percentage.btc.toFixed(1) + "%"}
        </li>
        <li>
          ETH Dominance: {headerData.market_cap_percentage && headerData.market_cap_percentage.eth.toFixed(1) + "%"}
        </li>
      </ul>
      <TableFilters />
    </div>
  );
}

export default HeaderInfos