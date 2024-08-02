import React from "react";

const Card = () => {
  return (
    <div>
      <div
        className="bg-blue-900 text-white "
        style={{ marginLeft: "2rem", width: "400px", borderRadius: "30px" }}
      >
        <div className="flex justify-around m-5 p-2 mt-5">
          <div className="mr-10">
            <p>Balance</p>
            <p>5756</p>
          </div>

          <div>Chip Logo</div>
        </div>

        <div className="flex justify-around">
          <div>
            <p>Cardholder</p>
            <p>Eddy Cusuma</p>
          </div>

          <div>
            <p>Valid Thru</p>
            <p>11/28</p>
          </div>
        </div>

        <div className="flex justify-around mt-10 my-1.5">
          <div>3778 **** **** 1234</div>
          <div>Logo</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
