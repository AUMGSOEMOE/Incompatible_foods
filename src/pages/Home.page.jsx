import React, { useEffect, useState } from "react";
import { HeadBar, Layout, Side } from "../components";
import ContainerComponent from "../components/Container.component";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../store/service/baseUrl";
import { finish, processing } from "../store/slice/food.slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((store) => store.food);
  const [newData, setNewData] = useState({
    newData: false,
    data: null,
  });

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
                {newData?.data?.map((i) => (
                  <Layout key={i.Id} items={i} />
                ))}
              </>
            ) : (
              <>
                {data?.map((i) => (
                  <Layout key={i.Id} items={i} />
                ))}
              </>
            )}
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
