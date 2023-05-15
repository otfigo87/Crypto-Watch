import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setStableState } from "../action/stable.action";

const TableFilters = () => {

  const [showStable, setShowStable] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStableState(showStable))
  },[showStable]);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input type="checkbox" id="stableCoin" defaultChecked={true}
          onChange={() => setShowStable(!showStable)} />
          <label htmlFor="stableCoin" >
            With Stable Coins
          </label>
        </div>
        <div className="no-list-btn">
          <p>No List</p>
        </div>
        <div className="fav-list">
          <p>Favorites</p>
          <img src="./assets/star-full.svg" alt="icon star" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
