import React from "react";
import { finish, processing } from "../store/slice/food.slice";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../store/service/baseUrl";

const SideComponent = ({ setNewData }) => {
  const { data, error, loading } = useSelector((store) => store.food);
  const dispatch = useDispatch();
  const items = Array.of(
    "မူးဝေ",
    "ဝမ်းလျှော",
    "အော့အန်",
    "ရင်ကျပ်",
    "အကြောတက်",
    "ဝမ်းကိုက်နာ",
    "ရင်ပူ",
    "အဆိပ်သင့်",
    "သေ",
    "တောက်"
  );

  const handleBtn = (i) => {
    const found = data.filter((a) => a.Description === i);
    console.log(found);
    if (found) {
      setNewData({ newData: true, data: found });
    }
  };
  return (
    <div className="bg-white rounded px-5 mt-5">
      <h2 className="mb-7">Catagories</h2>
      <div className="border-t py-4">
        <ul className="flex flex-col gap-4 text-sm justify-start ">
          {items.map((i, index) => (
            <button onClick={handleBtn.bind(null, i)} key={index}>
              <li className="hover:underline text-left">{i}</li>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideComponent;
