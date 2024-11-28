export const CardForPoint = () => {
    return <div
    className="flex flex-col justify-between border rounded-lg shadow-md p-4 h-full hover:border-main"
  >
    <img src="https://picsum.photos/200/300" className="bg-gray-300 rounded-md h-72 mb-4" />
    <div className="flex-1">
      <div className="flex justify-between text-green-800">
        <p className="text-sm mb-2">October 19, 2024</p>
        <p className="text-sm mb-1">Expired</p>
      </div>
      <p className="text-sm mb-4 font-[600]">
        lorem
        <a href="#" className="text-main font-bold mx-1">
          login
        </a>
        Lorem and text
        <br />
        lorem fin rel play jnf 400
      </p>
    </div>
  
    <div className="flex justify-end">
      <button className="bg-main text-white py-2 px-4 rounded-full">
        login
      </button>
    </div>
  </div>
  }