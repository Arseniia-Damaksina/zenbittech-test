import { Deal } from "../types/types";

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  return (
    <div
      className="w-1/2 h-96 flex items-end"
      style={{
        backgroundImage: `url(${deal.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-3 grid-rows-3 w-full text-white">
        <div className="col-span-3">{deal.name}</div>
        <div>{deal.price}</div>
        <div>{deal.yield}</div>
        <div>{deal.sold}</div>
        <div>{deal.ticketPrice}</div>
        <div className="col-span-2">{deal.daysLeft}</div>
      </div>
    </div>
  );
};

export default DealCard;
