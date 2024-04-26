import { Deal } from "../types/types";

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  return (
    <div
      className="w-96 sm:w-card h-96 flex items-end rounded-md m-3"
      style={{
        backgroundImage: `url(${deal.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-cols-3 sm:grid-rows-3 w-full text-white ml-5 mb-5">
        <div className="grid-cols-2 sm:col-span-3 font-merriweather font-bold text-xl">{deal.name}</div>
        <div className="text-lato font-semibold text-lg">{deal.price} Dhs</div>
        <div className="text-lato font-semibold text-lg">Yield {deal.yield}%</div>
        <div className="text-lato font-semibold text-lg">Sold {deal.sold}%</div>
        <div className="text-lato font-semibold text-lg">Ticket - {deal.ticketPrice} Dhs</div>
        <div className="col-span-2 text-lato font-semibold text-lg">Days left{deal.daysLeft}</div>
      </div>
    </div>
  );
};

export default DealCard;
