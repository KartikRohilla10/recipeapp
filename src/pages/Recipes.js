import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const recipes = [
    {
      title: "American Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },

    {
      title: "Japanese Sushi",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },

    {
      title: "Italian Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },

    {
      title: "Japanese Traditional Sushi",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
      title: "Indian Classic Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {/* <RecipeCard /> */}
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
