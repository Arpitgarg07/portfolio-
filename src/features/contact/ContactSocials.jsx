function ContactSocials() {
  const socials = [
    {
      social: "email",
      un: "arpitgarg5689@gmail.com",
      href: "mailto:arpitgarg5689@gmail.com",
    },
    {
      social: "github",
      un: "Arpitgarg07",
      href: "https://github.com/Arpitgarg07",
    },
    {
      social: "linkedin",
      un: "Arpit Garg",
      href: "https://www.linkedin.com/in/arpitgarg5689",
    },
    {
      social: "instagram",
      un: "arpit_garg74",
      href: "https://www.instagram.com/arpit_garg74",
    },
    {
      social: "Twitter",
      un: "Arpitgarg5689",
      href: "https://twitter.com/Arpitgarg5689",
    },
    {
      social: "Dribble",
      un: "arpitgarg56",
      href: "https://dribbble.com/arpitgarg56",
    },
  ];
  return (
    <div className="line-container flex flex-col">
      <p className="  text-3xl text-textColor">Reach Out Via Socials </p>
      <div className="flex flex-col space-y-2 pt-5">
        <p className="line text-base text-textColor md:text-2xl">
          .socials &#123;{" "}
        </p>
        {socials.map((social) => {
          return (
            <div className="  line text-base md:text-2xl" key={social.social}>
              <span className="pl-5 text-textColor md:pl-8">
                {social.social}:
              </span>
              <a
                className=" pl-2 text-base text-accentColor hover:underline md:text-2xl"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.un};
              </a>
            </div>
          );
        })}
        <p className="line text-base text-textColor md:text-2xl">&#125;</p>
      </div>
    </div>
  );
}

export default ContactSocials;
