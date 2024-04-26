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
    <div className={`w-full h-screen/90 bg-assetsBg flex flex-col items-center `}>
      <div className="w-9/10 mt-10 mb-5">
        <h1 className="text-secondary font-merriweather font-bold text-3xl text-left">
          Open Deals
        </h1>
      </div>
      <div className="w-full bg-assetsBg">
        <div className="w-full flex flex-wrap justify-center mb-5 bg-assetsBg">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
