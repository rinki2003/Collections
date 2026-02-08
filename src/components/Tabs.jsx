import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-6 p-6">
      {tabs.map((elem, idx) => (
        <button
          key={idx}
          onClick={() => dispatch(setActiveTab(elem))}
          className={`px-6 py-2 rounded-full capitalize transition-all cursor-pointer
            ${
              activeTab === elem
                ? "bg-blue-700 text-white"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
