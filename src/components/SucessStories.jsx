import doctor from "../assets/images/doctor.webp";
import { heading } from "../assets/styles/Style";
const SuccessStories = () => {
  const stories = [
    {
      name: "Rasel Biswas",
      location: "Malaysia",
      description:
        "Lorem ipsum dolor amet, consectetur adipiscing elit. Tempor ligula neque morbi a netus condimentum. Litora porta non conubia turpis",
      image: doctor,
    },
    {
      name: "Rasel Biswas",
      location: "Malaysia",
      description:
        "Lorem ipsum dolor amet, consectetur adipiscing elit. Tempor ligula neque morbi a netus condimentum. Litora porta non conubia turpis",
      image: doctor,
    },
    {
      name: "Rasel Biswas",
      location: "Malaysia",
      description:
        "Lorem ipsum dolor amet, consectetur adipiscing elit. Tempor ligula neque morbi a netus condimentum. Litora porta non conubia turpis",
      image: doctor,
    },
  ];

  return (
    <div className=" py-20">
      <div className="container  mx-auto px-4">
        <h1 className={heading}>
          Our Success <span className="text-secondary">Stories</span>
        </h1>
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div>
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full rounded-xl h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0  bg-opacity-40 text-white p-4">
                    <p className="font-manrope font-bold ">{story.description}</p>
                  </div>
                </div>
                <div className="p-4 text-center">
                <h3 className="text-lg font-figtree font-semibold">{story.name}</h3>
                <p className="text-gray-500 font-manrope">{story.location}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
