import React from "react";
import ContainerComponent from "./Container.component";

const LayoutComponent = () => {
  return (
    <ContainerComponent>
      <div className="flex">
        <div className=" bg-white flex rounded-md justify-center text-lg w-[60%] items-center py-5 my-5 mr-5 ">
          <div>FoodA + FoodB => Description</div>
        </div>
        <div className="bg-white w-[40%] rounded-md mt-5 ">
          <div>
            <h2>Catagories</h2>
            <div>Description</div>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default LayoutComponent;
