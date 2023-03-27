import React, { useEffect, useState } from 'react';
import colors from '../styles/_settings.scss';

const PercentChange = ({percent}) => {

    const [color, setColor] = useState();

//Check the number (percent): Green  => positive / red color => negative
    useEffect(() => {
        if (percent) {
            if (percent >= 0) {
                setColor(colors.green1)
            } else{
                setColor(colors.red1)
            }
        } else {
            setColor(colors.white1)
        }
    }, [percent])
  return (
    <div>
        <p className="percent-change-container" style={{color}}>
            {percent ? percent.toFixed(1) + "%" : "-"}
        </p>
    </div>
  )
}

export default PercentChange