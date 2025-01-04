import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Link } from "react-router-dom";
const Index = () => {
  const [search] = useSearchParams();
  const dataQuery = search.get("data");
  const [data, setData] = useState({});

  useEffect(() => {
    const resData = atob(dataQuery);
    const resObject = JSON.parse(resData);
    console.log(resObject);

    setData(resObject);
  }, [search]);

  return (
    <div className="payment-container">
      <img src="src/check.png" alt="" />
      <p className="price">Rs. {data.total_amount}</p>
      <p className="status">Payment Successful</p>
      <Link to="/">get back</Link>
    </div>
  );
};

export default Index;