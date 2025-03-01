import Team from "./Team";
import Classes from "./Classes";

const AboutSection = () => {
  return (
    <section
      className="pt-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/contact-img.jpg')" }} 
    >
      <div className="bg-black/60 py-20 px-5 text-white text-center">
        <div className="container mx-auto">
          <div className="-mt-50">
            <div id="team-section">
              <Team />
            </div>
            <div id="classes-section">
              <Classes />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;





