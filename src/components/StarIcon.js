import React, { useEffect, useState } from 'react'

const StarIcon = ({coinId}) => {
    // console.log(coinId)

    const [fav, setFav] = useState(false);

    useEffect(() => {
        if(localStorage.coinList){
            let favList = localStorage.coinList.split(",")
            if(favList.includes(coinId)){
                setFav(true)
            }
        }
    });

    const idChecker = (id) => {
        let favList = null;
        if(localStorage.coinList){
            favList = localStorage.coinList.split(",")
        }
        if(favList){
            if(favList.includes(id)){
                localStorage.coinList = favList.filter(coin => coin !== id);
                setFav(false);
            } else {
                localStorage.coinList = [...favList, coinId];
                setFav(true);
            }

            } else {
            localStorage.coinList = coinId;
            setFav(true)
            }
    }
  return (
    <img src={fav ? "./assets/star-full.svg" : "./assets/star-empty.svg"} alt="icon-star"
    onClick={() => idChecker(coinId)}
     />
  )
}

export default StarIcon