import SinglePopular from "./SinglePopular.js";
export default function AllCards() {
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
    <>
      <div className="w-[80%] mx-auto items-center grid grid-cols-3 gap-4 justify-center pt-36">
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
      <div className="w-[80%] mx-auto items-center grid grid-cols-3 gap-4 justify-center pt-3">
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
    </>
  );
}
