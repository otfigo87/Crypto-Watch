import React, { useState } from "react";
import TableLine from "./TableLine";
import ToTop from "./ToTop";

const Table = ({ coinsData }) => {
  const [rangeNumber, setRangeNumber] = useState(100);

  const tableHeader = ["Price", "MarketCap", "Volume", "1h", "1d", "1w", "1m", "6m", "1y", "ATH"]
  const [orderBy, setOrderBy] = useState("")
  return (
    <div className="table-container">
      <ul className="table-header">
        <div className="range-container">
          <span>
            TOP{" "}
            <input
              type="text"
              value={rangeNumber}
              onChange={(e) => setRangeNumber(e.target.value)}
            />
          </span>
          <input type="range" min="1" max="250" value={rangeNumber}
          onChange={(e) => setRangeNumber(e.target.value)} />
          <ToTop />
        </div>
        {tableHeader.map((el, i) => (
           <li key={i}>
            <input type="radio" name="header-el" id={el} 
            defaultChecked={ el === orderBy || el === orderBy + "reverse" ? true : false}
            onClick={() => {
                if(orderBy === el){
                setOrderBy(el + "reverse")
                } else {
                    setOrderBy(el)
                }
            }} />
            <label htmlFor={el}>{el}</label>
           </li> 
        ))}
      </ul>
      {coinsData &&
                coinsData.slice(0, rangeNumber).map((coin, index) => (
        <TableLine coin={coin} index={index} />
      ))}
    </div>
  );
};

export default Table;
