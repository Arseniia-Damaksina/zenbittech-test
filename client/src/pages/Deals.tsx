import DealCard from "../components/DealCard"

const Deals = () => {
  return (
    <div className="w-full h-screen bg-assetsBg flex flex-col items-center">
      <h1 className="text-secondary">Open Deals</h1>
      <div className="w-9/10 h-9/10 bg-secondary flex flex-wrap">
        <DealCard />
        <DealCard />
        <DealCard />
        <DealCard />
      </div>
    </div>
  )
}

export default Deals