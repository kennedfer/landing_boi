export const Section = ({ children, background }) => {
  return (
    <section
      style={{
        backgroundImage: `url("/images/backgrounds/bg${background}.jpg")`,
      }}
    >
      <div>{children}</div>
    </section>
  );
};
