import React, { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { selectDeals, fetchDealsAsync } from "../slices/dealSlice";
import DealCard from "../components/DealCard";

const Deals: React.FC = () => {
  const dispatch = useAppDispatch();
  const deals = useSelector(selectDeals);

  useEffect(() => {
    dispatch(fetchDealsAsync());
  }, [dispatch]);

  return (
    <div className={`w-full h-screen bg-assetsBg flex flex-col items-center`}>
      <h1 className="text-secondary">Open Deals</h1>
      <div className="w-9/10 h-9/10 flex flex-wrap">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
