import React from "react";

export default function Blog() {
  return (
    <article className="px-4">
      <header className="mx-auto max-w-screen-xl py-5 px-4 text-start bg-white mt-10 rounded-b-none">
        <p className="text-gray-500">Published April 2, 2024</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          dolores non ea repellendus placeat alias a autem quia laborum,
          praesentium quidem quos corrupti voluptatibus magnam animi minima
          maiores, saepe officiis.
        </p>
        <div
          className="mt-6 flex flex-wrap justify-start gap-2"
          aria-label="Tags"
        >
          <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
            Link
          </button>
          <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
            Link
          </button>
          <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
            Link
          </button>
          <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
            Link
          </button>
        </div>
        <img
          className="sm:h-[34rem] mt-10 w-full object-contain"
          src="https://picsum.photos/700/300"
          alt="Featured Image"
        />
      </header>
      <div className="mx-auto max-w-screen-xl space-y-12 bg-white px-4 rounded-t-none py-10 font-serif text-lg tracking-wide text-gray-700">
        <strong className="text-2xl font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
          impedit ex consequatur nostrum cupiditate at sequi? Ipsam commodi modi
          officia mollitia doloribus tenetur consectetur quae?
        </strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto enim
          maxime sit laudantium! Dolore atque, maxime iusto ut quas distinctio
          reiciendis animi voluptatibus soluta molestias, mollitia officiis
          laboriosam illum earum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          similique reiciendis et recusandae provident repellendus rem
          doloremque eaque error assumenda?
        </p>
      </div>
      <div className="mx-auto bg-white p-4 rounded-md mt-10 max-w-screen-xl space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
        <h1 className="font-[600]">Recommendation blogs</h1>
        <div className="text-gray-600 [&>*]:border-t [&>*]:pt-4 space-y-4">
            {[...new Array(4)].map((e, index) =>  <div key={index} className="flex gap-4 items-center">
                <div className="w-full md:w-auto">
                    <img src="https://picsum.photos/200/300" className="size-40 md:size-20"/>
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum facere suscipit magni deleniti eius! Laborum rem mollitia voluptatem maxime.</div>
            </div>)}
        </div>
      </div>
    </article>
  );
}
