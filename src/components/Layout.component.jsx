import React from "react";

const LayoutComponent = ({ items: { Id, FoodA, FoodB, Description } }) => {
  return (
    <div>
      <div className=" w-full">
        <div className="bg-white flex rounded justify-center text-lg  items-center py-5 mt-5 mr-5 ">
          {FoodA} +{FoodB} => {Description}
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
