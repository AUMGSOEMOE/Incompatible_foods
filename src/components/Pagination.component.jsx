import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PaginationComponent = ({
  listPerPage,
  setCurrentPage,
  newData,
  currentPage,
}) => {
  const { data, error, loading } = useSelector((store) => store.food);
  const handleClick = (index) => {
    setCurrentPage(index + 1);
  };
  return (
    <div className=" py-5 flex justify-center gap-2">
      {newData.newData
        ? Array.from({
            length: Math.ceil(newData?.data?.length / listPerPage),
          }).map((_, index) => (
            <button
              onClick={handleClick.bind(null, index)}
              className={`border border-emerald-500 py-1 px-2 hover:bg-emerald-200 ${
                currentPage == index + 1 && "bg-emerald-200 scale-95"
              }`}
              key={index}
            >
              {index + 1}
            </button>
          ))
        : Array.from({ length: Math.ceil(data?.length / listPerPage) }).map(
            (_, index) => (
              <button
                onClick={handleClick.bind(null, index)}
                className={`border border-emerald-500 py-1 px-2 hover:bg-emerald-200 ${
                  currentPage == index + 1 && "bg-emerald-200 scale-95"
                }`}
                key={index}
              >
                {index + 1}
              </button>
            )
          )}
    </div>
  );
};

export default PaginationComponent;
