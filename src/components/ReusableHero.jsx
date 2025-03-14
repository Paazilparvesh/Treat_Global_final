export const ReusableHero = ({
  children,
  heroImage,
  className = "",
  insert,
}) => {
  return (
    <div
      className={`relative  container mx-auto lg:mt-5 overflow-hidden lg:rounded-xl w-full   ${className}`}
    >
      {heroImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            borderRadius: "inherit",
          }}
        />
      )}
      {insert && (
        <div className="absolute inset-0 bg-black opacity-50 lg:rounded-xl" />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};
