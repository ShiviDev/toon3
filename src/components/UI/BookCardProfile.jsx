import Image from "next/image";

export default function BookCardProfile(props) {
  return (
    <div className="relative bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <Image
        className="w-full h-auto rounded-xl backdrop-blur-sm blur-sm"
        src={props.image}
        alt="Image Description"
        width={400}
        height={200}
      />
      <div className="absolute top-0 start-0 end-0">
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-white">{props.title}</h3>
          {/* <p className="mt-1 text-gray-800">{props.description}</p> */}
          <p className="mt-5 text-md text-gray-200">{props.year}</p>
        </div>
      </div>
      <p className="text-lg font-medium text-gray-800 text-center no-underline">
        Chapters:
        <span className="text-yellow-500 pl-2 font-semibold">56</span>
      </p>
    </div>
  );
}
