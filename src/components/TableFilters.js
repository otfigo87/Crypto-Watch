import React from "react";

const TableFilters = () => {
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input type="checkbox" id="stableCoin" defaultChecked={true} />
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
