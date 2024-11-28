import React from "react";

export default function BlogSection() {
  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
            Blogs
          </h1>
          <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            description 
          </p>
        </div>
        <div className="lg:flex items-stretch md:mt-12 mt-8">
          <div className="lg:w-1/2">
            <p className="md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque adipisci quae quisquam quis sit illum nulla, ad magni eos odio iste dolor incidunt, ab facilis neque. Rem ducimus omnis quaerat eveniet numquam laudantium excepturi provident tempora temporibus ut doloribus quidem possimus maxime commodi autem reiciendis harum similique est aliquam asperiores, non ullam nihil quae? Ea expedita, dolor exercitationem quod rem pariatur quis dolores cum deleniti incidunt. Quisquam, perferendis veniam! Eos assumenda veniam repellat iure eum corporis, enim recusandae sint inventore vitae, ducimus officia alias. Mollitia dolorem sunt at minima, dicta itaque pariatur incidunt aut voluptas, magnam rerum ex eveniet minus consequatur debitis, ad praesentium! Similique fugiat dignissimos at quia. Iusto placeat ducimus atque cum corporis pariatur incidunt dicta dolore accusamus eaque, quisquam assumenda omnis perferendis quaerat, sit obcaecati id quae eum? Ratione voluptatibus, culpa unde consectetur sequi nesciunt ducimus quisquam at laudantium ipsam nostrum adipisci architecto cum rem minima ullam libero fuga, fugiat eius veritatis. Dolorem, totam assumenda? Accusantium hic excepturi, libero porro incidunt perferendis dicta vero autem, expedita nesciunt sapiente. In consectetur possimus molestiae ea mollitia nulla numquam saepe eaque, excepturi aliquam sint voluptatem voluptas, inventore repellat deleniti illum deserunt. Consequatur voluptatem perferendis ratione nemo labore beatae! Quaerat.</p>
            <p className="md:text-lg">dipisci quae quisquam quir debitis, ad praesentium! Similique fugiat dignissimos at quia. Iusto placeat ducimus atque cum corporis pariatur incidunt dicta dolore accusamus eaque, quisquam assumenda omnis perferendis quaerat, sit obcaecati id quae eum? Ratione voluptatibus, culpa unde consectetur sequi nesciunt ducimus quisquam at laudantium ipsam nostrum adipisci architecto cum rem minima ullam libero fuga, fugiat eius veritatis. Dolorem, totam assumenda? Accusantium hic excepturi, libero porro incidunt perferendis dicta vero autem, expedita nesciunt sapiente. In consectetur possimus molestiae ea mollitia nulla numquam saepe eaque, excepturi aliquam sint voluptatem voluptas, inventore repellat deleniti illum deserunt. Consequatur voluptatem perferendis ratione nemo labore beatae! Quaerat.</p>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative">
              
              <img
                src="https://i.ibb.co/6Wfjf2w/img-4.png"
                alt="sitting place"
                className="w-full sm:block hidden"
              />
              <img
                className="w-full sm:hidden"
                src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                alt="sitting place"
              />
            </div>
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              <div className="relative w-full">
                
                <img
                  src="https://i.ibb.co/3yvZBpm/img-5.png"
                  className="w-full"
                  alt="chair"
                />
              </div>
              <div className="relative w-full sm:mt-0 mt-4">
                <img
                  src="https://i.ibb.co/gDdnJb5/img-6.png"
                  className="w-full"
                  alt="wall design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
