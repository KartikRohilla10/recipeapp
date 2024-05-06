import ChiefCard from "./ChiefCard";

export default function ChiefsSection() {
  const chiefs = [
    {
      name: "Jaspreet Carlos",
      img: "/img/top-chiefs/img_1.jpg",
      recipesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "Con Doe",
      img: "/img/top-chiefs/img_2.jpg",
      recipesCount: "05",
      cuisine: "Japanese",
    },
    {
      name: "Erich Mishra",
      img: "/img/top-chiefs/img_3.jpg",
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Chrown Brown",
      img: "/img/top-chiefs/img_4.jpg",
      recipesCount: "08",
      cuisine: "American",
    },
    {
      name: "Bheem Lively",
      img: "/img/top-chiefs/img_5.jpg",
      recipesCount: "09",
      cuisine: "French",
    },
    {
      name: "Ben Affs",
      img: "/img/top-chiefs/img_6.jpg",
      recipesCount: "04",
      cuisine: "Indian",
    },
  ];
  return (
    <div className="section chiefs">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-chiefs-container">
        {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
        {chiefs.map((chief) => (
          <ChiefCard key={chief.name} chief={chief} />
        ))}
      </div>
    </div>
  );
}
