import Image from "next/image";
import SinglePopular from "./SinglePopular.js";
export default function PopularCards() {
  var comic = {
    title: "",
    author: "",
    chapter: 25,
    image: "",
  };
  const comics = [
    {
      name: "Killed my butterfly",
      chapter: 204,
      author: "MSMSMSMSM",
      image: "/explore/storycard1.png",
    },
    {
      name: "Dear Mom",
      chapter: 104,
      author: "HuddleUser",
      image: "/explore/storycard2.png",
    },
    {
      name: "Vietnam war and PTSD",
      chapter: 22,
      author: "PopKorn",
      image: "/explore/storycard3.png",
    },
    {
      name: "Klandestine",
      chapter: 19,
      author: "HuddleUser",
      image: "/explore/storycard4.png",
    },
    {
      name: "Blade 3",
      chapter: 20,
      author: "LoverBoyz",
      image: "/explore/storycard5.png",
    },
    {
      name: "Attack on Titan",
      chapter: 28,
      author: "Hajime Isayama",
      img: "/explore/storycard9.png",
    },
    {
      name: "Hunter X Hunter",
      chapter: 50,
      author: "Clattonia",
      image: "/explore/storycard6.png",
    },
    {
      name: "Queen Diana",
      chapter: 18,
      author: "Hajime Isayama",
      image: "/explore/storycard7.png",
    },
    {
      name: "Hunter X Hunter 4",
      chapter: 201,
      author: "Prof. X",
      image: "/explore/storycard8.png",
    },
  ];
  return (
    <section>
      <div
        className="w-[80%] mx-auto items-center flex flex-row justify-center pt-36"
        style={{ overflow: "auto" }}
      >
        <div className="mt-8 w-1/2 flex flex-row">
          <div className="flex w-1/2 flex-col  pr-10 ">
            <Image
              height={250}
              width={250}
              src="/explore/storycard.png"
              className="rounded-xl transition duration-500 hover:scale-105 "
            />
            <div className="w-full mt-1">
              <p className="text-yellow-400 text-sm">Fantasy</p>
              <p className="text-yellow-300 text-xl font-semibold">
                Dragon Blood
              </p>
              <p className="text-white text-sm">chap: 49</p>
              <p className="text-white">
                In the magical realm of Eldoria, Princess Seraphina, a royal
                with dragon blood, embarks on a perilous quest to avert an
                ancient darkness threatening the delicate balance between humans
                and dragons. With newfound powers and a diverse group of allies,
                she races against time to find the legendary Dragonheart and
                save her kingdom
              </p>
            </div>
          </div>

          <div className="w-1/2 pl-2 mb-2 flex flex-col">
            {comics.map((comic) => (
              <SinglePopular
                key={comic.name}
                title={comic.name}
                author={comic.author}
                chapter={comic.chapter}
                img={comic.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
