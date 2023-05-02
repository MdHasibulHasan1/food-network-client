import React from "react";

const ChefData = ({ chef }) => {
  const [disable, setDisable] = useState(false);
  const handleDisable = () => {
    setDisable(true);
  };
  console.log(chef);
  const { years_of_experience, chef_name, _id, picture_url, recipes } = chef;
  console.log(years_of_experience);
  return (
    <div className="flex gap-3 lg:card-side bg-base-100 shadow-2xl p-4">
      <figure className="w-4/12 ">
        <img className="w-full mx-auto h-full" src={picture_url} alt="Album" />
      </figure>
      <div className="flex flex-col justify-between">
        <div className="">
          <h2 className="card-title">{chef_name}</h2>
          <p>{`${years_of_experience} years experience`}</p>
          <p>{` Total recipes: ${recipes.length}`}</p>
        </div>
        <div className="flex items-end">
          <div>
            <button
              onClick={handleDisable}
              className="btn btn-block my-2 btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Add to favorite
            </button>
            <button className="btn btn-block btn-outline">
              Recipe Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefData;
