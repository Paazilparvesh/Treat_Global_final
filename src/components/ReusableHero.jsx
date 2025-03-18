export const ReusableHero = ({
  children,
  heroImage,
  heroVideo,
  className = "",
  insert,
}) => {
  return (
    <div
      className={`relative mb-20 mx-auto lg:mt-5 overflow-hidden lg:rounded-3xl w-[1800px] h-[500px] ${className}`}
    >
      {/* Background Video */}
      {heroVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Background Image (if no video is provided) */}
      {!heroVideo && heroImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            borderRadius: "inherit",
          }}
        />
      )}

      {/* Overlay */}
      {insert && (
        <div className="absolute inset-0 bg-black opacity-50 lg:rounded-xl" />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};
