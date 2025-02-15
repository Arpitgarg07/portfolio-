import { Helmet, HelmetProvider } from "react-helmet-async";
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import python_icon from "../../assets/icons/python-5.svg";
import c_icon from "../../assets/icons/c_icon.svg";
import bootstrap_icon from "../../assets/icons/bootstrap_icon.svg";
import figma_icon from "../../assets/icons/figma_icon.svg";
import canva_icon from "../../assets/icons/canva_icon.svg";
import photoshop_icon from "../../assets/icons/photoshop_icon.svg";
import arduino_icon from "../../assets/icons/arduino_icon.svg";
import git_icon from "../../assets/icons/git_icon.svg";
import premierpro_icon from "../../assets/icons/premierpro_icon.svg";
function About() {
  const techStack1 = [
    html_icon,
    css_icon,
    js_icon,
    python_icon,
    c_icon,
    bootstrap_icon,
  ];
  const techStack2 = [
    git_icon,
    figma_icon,
    canva_icon,
    photoshop_icon,
    premierpro_icon,
    arduino_icon,
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Arpit Garg| About</title>
      </Helmet>
      <div className=" flex flex-col  items-center justify-center gap-y-4 p-8 text-textColor xl:gap-y-8 ">
        <div className="flex flex-col items-center gap-x-48 xl:flex-row">
          <div className=" xl:order-2">
            <div className=" box border-4 border-accentColor xl:h-[300px] xl:w-[300px] "></div>
          </div>
          <div>
            <h1 className="text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
              Front-End Developer + <br /> UI/Graphic Designer
            </h1>
            <h2 className="text-xl max-sm:hidden">
              Hi, I'm Arpit Garg. A passionate Front-end Developer + UI/Graphic Designer <br />{" "}
              based in jaipur, Rajasthan, India. 📍
            </h2>
          </div>
        </div>
        <div className="xl:flex xl:gap-x-24 ">
          <div className="order-1 space-y-4 text-center xl:w-1/2 ">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              About me:
            </h2>
            <p className="text-lg font-medium leading-tight text-slate-400 xl:text-xl">
            I am a Front-End Developer skilled in HTML, CSS, and
            JavaScript, building responsive and dynamic websites.
            I continuously expand my tech stack, exploring new tools 
            and frameworks.
            <br />
            As a Graphic and UI Designer, I craft intuitive and visually 
            appealing designs using Figma, Canva, and Adobe. I combine 
            creativity with user-centric design principles to deliver engaging
            digital experiences. I thrive in collaborative environments and am 
            always eager to learn and grow.
            </p>
          </div>
          <div className=" xl:w-1/2">
            <h3 className=" my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl ">
              Tech Stack{" "}
            </h3>
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3">
            {techStack1.map((item, i) => {
                return (
                  <img
                    className=" h-14 w-14 cursor-pointer rounded-full p-2  shadow-md  shadow-accentColor "
                    key={i}
                    src={item}
                    alt="tech-stack"
                  />
                );
              })}
            </div>
            <br />
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3">
              {techStack2.map((item, i) => {
                return (
                  <img
                    className=" h-14 w-14 cursor-pointer rounded-full p-2  shadow-md  shadow-accentColor "
                    key={i}
                    src={item}
                    alt="tech-stack"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

{
  /* <p className="px-8 text-lg font-medium  md:text-xl">
&lt;p&gt; As a Junior Front-End Developer, I possess an impressive
arsenal of skills in HTML, CSS, JavaScript, React and Tailwind. I
excel in designing and maintaining responsive websites that offer a
smooth user experience. My expertise lies in crafting dynamic,
engaging interfaces through writing clean and optimized code and
utilizing cutting-edge development tools and techniques. I am also a
team player who thrives in collaborating with cross-functional teams
to produce outstanding web applications. &lt;/p&gt;
</p> */
}
export default About;
