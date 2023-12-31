import { createGroupRequestValidator } from "@pushprotocol/restapi/src/lib/chat/helpers";
import { useState } from "react";
import PopularCards from "./PopularCards";
import AllCards from "./AllCards";
export default function SecondaryNav() {
  const [currentTab, setCurrentTab] = useState("POPULAR");
  const unSelected = "inline-block p-4 font-semibold text-black ";
  const Selected =
    "inline-block p-4 text-white font-bold border-b-4 border-white rounded-t-lg active ";
  return (
    <>
      <div
        className="w-full fixed flex justify-center items-center"
        style={{ top: "95px", background: "#f7a34f", height: "3.3rem" }}
      >
        <div className="text-sm  text-center ">
          <div className="flex flex-row -mb-px">
            <div className="me-2">
              <button
                onClick={() => {
                  setCurrentTab("POPULAR");
                }}
                className={currentTab === "POPULAR" ? Selected : unSelected}
              >
                POPULAR
              </button>
            </div>
            <div className="me-2">
              <button
                onClick={() => {
                  setCurrentTab("ALL");
                }}
                className={currentTab === "ALL" ? Selected : unSelected}
                style={{ minWidth: "85px" }}
              >
                ALL
              </button>
            </div>
          </div>
        </div>
      </div>
      {currentTab === "POPULAR" ? <PopularCards /> : <AllCards />}
    </>
  );
}
