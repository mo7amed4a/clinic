export const CardForStaff = () => {
    return <div
    className="flex flex-col justify-between border rounded-lg shadow-md p-4 h-full hover:border-main relative"
  >
    {/* <div className="bg-gray-300 rounded-md h-72 mb-4"></div> */}
      <img src="https://picsum.photos/200/300" className="md:absolute top-6 -start-6 bg-gray-300 rounded-full size-20 mb-4" />
    <div className="flex-1 md:ps-16">
      <p className="text-sm mb-4 font-[600]">
        dolores id repellat, alias unde accusamus impedit soluta labore vel sequi quia quasi minima asperiores similique assumenda quis eaque expedita!
      </p>
    </div>
  
    <div className="flex justify-end">
      <button className="bg-main text-white py-2 px-4 rounded-full">
        Buy
      </button>
    </div>
  </div>
  }