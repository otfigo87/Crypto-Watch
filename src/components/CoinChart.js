import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import colors from "../styles/_settings.scss";

const CoinChart = ({ coinId, coinName }) => {
  const [duration, setDuration] = useState(30);
  const [coinData, setCoinData] = useState();

  const headerData = [
    [1, "1 Day"],
    [3, "3 Days"],
    [7, "1 Week"],
    [30, "1 Month"],
    [91, "3 Months"],
    [181, "6 Months"],
    [365, "1 Year"],
    [3000, "Max"],
  ];

  useEffect(() => {
    // search data about the clicked coin (coinId) & duration from state
    //data to pass to Graphic
    let dataArray = [];
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${
          duration > 32 ? "&interval=daily" : ""
        }`
      )
      .then((res) => {
        for (let i = 0; i < res.data.prices.length; i++) {
          let price = res.data.prices[i][1];
          dataArray.push({
            date: new Date(res.data.prices[i][0]).toLocaleDateString(),
            price: price < "50" ? price : parseInt(price),
          });
        }
        // console.log(dataArray)
        setCoinData(dataArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [coinId,duration]);
  return (
    <div className="coin-chart">
      <p>{coinName}</p>
      <div className="btn-container">
        {headerData.map((col) => {
          return (
            <div
              key={col[0]}
              htmlFor={"btn + col[0]"}
              onClick={() => setDuration(col[0])}
              className={col[0] === duration ? "active-btn" : ""}
            >
              {col[1]}
            </div>
          );
        })}
      </div>
      <AreaChart
        width={680}
        height={250}
        data={coinData}
        margin={{ top: 10, right: 0, left: 100, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="7%" stopColor={colors.color1} stopOpacity={0.8} />
            <stop offset="93%" stopColor={colors.white1} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis domain={["auto", "auto"]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          strokes={colors.color1}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

export default CoinChart;
