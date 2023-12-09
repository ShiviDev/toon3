import { createGroupRequestValidator } from "@pushprotocol/restapi/src/lib/chat/helpers";
import { useState } from "react";
export default function SecondaryNav() {
  const [currentTab, setCurrentTab] = useState("POPULAR");
  const unSelected = "inline-block p-4 font-semibold text-black ";
  const Selected =
    "inline-block p-4 text-white font-bold border-b-4 border-white rounded-t-lg active ";
  return (
    <div
      className="w-full fixed flex justify-center items-center"
      style={{ top: "95px", background: "#f7a34f", height: "3.3rem" }}
    >
      <div class="text-sm  text-center ">
        <div class="flex flex-row -mb-px">
          <div class="me-2">
            <button
              onClick={() => setCurrentTab("POPULAR")}
              class={currentTab === "POPULAR" ? Selected : unSelected}
            >
              POPULAR
            </button>
          </div>
          <div class="me-2">
            <button
              onClick={() => setCurrentTab("ALL")}
              class={currentTab === "ALL" ? Selected : unSelected}
              style={{ minWidth: "85px" }}
            >
              ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
