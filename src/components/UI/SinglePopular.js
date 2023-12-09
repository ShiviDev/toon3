import Image from "next/image";
export default function SinglePopular(props) {
  return (
    <>
      <div className="mb-3 flex flex-row">
        <img
          style={{ height: "100px", width: "100px" }}
          src={props.img}
          className=" rounded-xl transition duration-500 hover:scale-105 "
        />
        <div className="flex flex-col   ml-2">
          <p className="font-semibold text-lg text-yellow-500">{props.title}</p>
          <p className=" text-white">{props.author}</p>
          <p className=" text-white"> chapter: {props.chapter}</p>
        </div>
      </div>
    </>
  );
}
