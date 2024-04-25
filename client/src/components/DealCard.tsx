const DealCard = () => {
  return (
    <div className="w-1/2 h-96 bg-background-login flex items-end">
      <div className="grid grid-cols-3 grid-rows-3 w-full text-white">
        <div className="col-span-3">Deal Name</div>
        <div>Price</div>
        <div>Yield</div>
        <div>Sold</div>
        <div>Ticket</div>
        <div className="col-span-2">Days Left</div>
      </div>
    </div>
  );
};

export default DealCard;
