
import doctor from "../assets/images/doctor.webp";
import storyVideo from "/src/assets/videos/homevideo2.mp4"; // Example video
import { heading } from "../assets/styles/Style";

const SuccessStories = () => {
  const stories = [
    {
      name: "Rasel Biswas",
      location: "Malaysia",
      description:
        "Lorem ipsum dolor amet, consectetur adipiscing elit. Tempor ligula neque morbi a netus condimentum. Litora porta non conubia turpis",
      image: doctor,
      video: storyVideo, // Add video file
    },
    {
      name: "Rasel Biswas",
      location: "Malaysia",
      description:
        "Lorem ipsum dolor amet, consectetur adipiscing elit. Tempor ligula neque morbi a netus condimentum. Litora porta non conubia turpis",
      image: doctor,
      video: storyVideo,
    },
    {
      name: "Rasel Biswas",
      location: "Malaysia",
      description:
        "Lorem ipsum dolor amet, consectetur adipiscing elit. Tempor ligula neque morbi a netus condimentum. Litora porta non conubia turpis",
      image: doctor,
      video: storyVideo,
    },
  ];

  return (
    <div className="py-20">
      <div className="mx-10 px-4">
        <h1 className={heading}>
          Our Success <span className="text-secondary">Stories</span>
        </h1>

        {/* Flex container for hover animation */}
        <div className="flex mt-15 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="group flex-1 transition-all duration-500 hover:flex-[1.5]">
              <div className="bg-white rounded-2xl overflow-hidden relative">
                
                {/* Image (default state) */}
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full rounded-xl h-[500px] object-cover transition-all duration-500 group-hover:opacity-0"
                />

                {/* Video (shown on hover) */}
                <video
                  src={story.video}
                  autoPlay
                  muted
                  loop
                  className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></video>

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
