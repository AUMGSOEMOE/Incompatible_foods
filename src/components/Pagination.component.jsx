import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const PaginationComponent = ({
  listPerPage,
  setCurrentPage,
  newData,
  currentPage,
}) => {
  const { data, error, loading } = useSelector((store) => store.food);

  const handleClick = (index) => {
    setCurrentPage(index + 1);
    console.log(index);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 16) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className=" flex items-center justify-center gap-5  ">
      <div className=" flex items-center justify-center  ">
        <button
          onClick={handlePrevious}
          className="border border-emerald-500 text-2xl active:scale-90 "
        >
          <GrFormPrevious />
        </button>
      </div>
      <div className=" bg-slate-200 flex justify-center items-center py-5 gap-2">
        {newData.newData
          ? //individual
            Array.from({
              length: Math.ceil(newData?.data?.length / listPerPage),
            }).map((_, index) => (
              <button
                onClick={handleClick.bind(null, index)}
                className={`border border-emerald-500 py-1 px-2 hover:bg-emerald-50 ${
                  currentPage == index + 1 && "bg-emerald-50 scale-95"
                }`}
                key={index}
              >
                {index + 1}
              </button>
            ))
          : // all
            Array.from({ length: Math.ceil(data?.length / listPerPage) }).map(
              (_, index) => (
                <button
                  onClick={handleClick.bind(null, index)}
                  className={`border border-emerald-500 w-7 hover:bg-emerald-200 ${
                    currentPage == index + 1 && "bg-emerald-200 scale-95"
                  }`}
                  key={index}
                >
                  {index + 1}
                </button>
              )
            )}
      </div>
      <div className=" flex items-center justify-center  ">
        <button
          onClick={handleNext}
          className="border border-emerald-500 text-2xl  active:scale-90 "
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
