import React from 'react';
import { useLocation } from "react-router-dom";

const Tracking = () => {
  const qariList = useLocation().state?.qariList || [];

  console.log("Tracking: ",qariList);

  return (
    <div>Tracking</div>
  )
}

export default Tracking