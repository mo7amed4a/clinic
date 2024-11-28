import React from "react";
import Images from "./images";
import Side from "./side";

export default function Info({ response }) {
  return (
    <div className="item-details mt-5 flex w-full cursor-default flex-wrap justify-between gap-5 lg:flex-nowrap lg:gap-8">
      <div className="flex w-full flex-col gap-6 lg:w-[calc(100%_-_32rem)]">
        <Images response={response} title={"About"} />
        {response.item.details && (
          <div className="panel overflow-hidden p-0">
            <div className="head">
              <p>Overview</p>
            </div>
            <div
              className="quill-content"
              dangerouslySetInnerHTML={{ __html: response.item.details }}
            ></div>
          </div>
        )}
      </div>
      <div className="w-full lg:w-[30rem]">
        <Side data={response} />
      </div>
    </div>
  );
}
