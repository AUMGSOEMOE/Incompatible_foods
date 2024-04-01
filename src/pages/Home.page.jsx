import React, { useEffect, useState } from "react";
import { HeadBar, Layout, Pagination, Side } from "../components";
import ContainerComponent from "../components/Container.component";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../store/service/baseUrl";
import { finish, processing } from "../store/slice/food.slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((store) => store.food);
  const [currentPage, setCurrentPage] = useState(1);
  const listPerPage = 10;

  const lastIndex = listPerPage * currentPage;
  const firstIndex = lastIndex - listPerPage;

  const foodList = data?.slice(firstIndex, lastIndex);

  // individual
  const [newData, setNewData] = useState({
    newData: false,
    data: null,
  });

  const newDataFoodList = newData?.data?.slice(firstIndex, lastIndex);

  useEffect(() => {
    const food = async () => {
      try {
        const res = await api.get("/Tbl_IncompatibleFood");
        dispatch(finish(res.data));
        return res.data;
      } catch (error) {
        throw new Error(error.message);
      }
    };
    food();
  }, []);
  return (
    <div>
      <HeadBar />
      <ContainerComponent>
        <div className="flex">
          <div className=" w-[70%] ">
            {newData.newData ? (
              <>
                {newDataFoodList.map((i) => (
                  <Layout key={i.Id} items={i} />
                ))}
              </>
            ) : (
              <>
                {foodList?.map((i) => (
                  <Layout key={i.Id} items={i} />
                ))}
              </>
            )}
            <div>
              <Pagination
                listPerPage={listPerPage}
                setCurrentPage={setCurrentPage}
                newData={newData}
                currentPage={currentPage}
              />
            </div>
          </div>
          <div className="w-[40%] ">
            <Side setNewData={setNewData} />
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};

export default HomePage;
