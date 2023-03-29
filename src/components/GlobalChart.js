import React, { useEffect, useState } from 'react';
import { Treemap, Tooltip } from "recharts";

const GlobalChart = ({coinsData}) => {
    // console.log(coinsData)

    const [dataArray, setDataArray] = useState([])

    useEffect(() => {
        let chartData = [];
        if(coinsData.length > 0){
            for(let i = 0; i < 45; i++){
                chartData.push({ 
                    name: coinsData[i].symbol.toUpperCase() + " " + coinsData[i].market_cap_change_percentage_24h.toFixed(1) + "%", 
                    size: coinsData[i].market_cap,
                    fill: null,
                })
            }
        }
        // console.log(chartData)
        setDataArray(chartData)
    },[coinsData]);

//recharts library doc
    const TreemapToolTip = ({active, payload}) => {
        if(active && payload && payload.length) {
           return ( <div className="custom-tooltip">
                <p className="label">{payload[0].payload.name}</p>
            </div> );
        } return null
    }
  return (
    <div className="global-chart">
        {/* recharts library */}
        <Treemap 
        width={730}
        height={181}
        data={dataArray}
        dataKey="size"
        stroke="rgb(51,51,51)"
        fill="black"
        aspectRatio="1">

            <Tooltip content={<TreemapToolTip />} />

        </Treemap>

    </div>
  )
}

export default GlobalChart