import React from "react";
import ContainerComponent from "./Container.component";

const HeadBarComponent = () => {
  return (
    <div className=" bg-white py-3">
      <ContainerComponent>
        <div className="flex items-center">
          <div className="w-12 mr-3">
            <img src="src/img/food_pyramid.jpg" alt="" />
          </div>
          <div className=" text-3xl font-semibold">
            Incompatible Foods (တွဲဖက်၍ မစားသင့်သော အစားအစာများ)
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};

export default HeadBarComponent;
