import "../styles/developers/developers.css";
import GitHub from "../assets/static_images/github.svg";
import Instagram from "../assets/static_images/instagram.svg";
import LinkedIn from "../assets/static_images/linkedin.svg";
import Images from "../assets/developers/index";

const developersData = [
  {
    name: "Steve Fernandes",
    role: "UI/UX Designer, Frontend Developer",
    image: Images.Steve,
    social: {
      instagram: "https://www.instagram.com/steve_______9856",
      linkedin: "https://www.linkedin.com/in/aspireve",
      github: "https://github.com/aspireve",
    },
  },
  {
    name: "Jitesh Dubey",
    role: "UI/UX Designer, Frontend Developer",
    image: Images.Jitesh,
    social: {
      instagram: "https://instagram.com/jitesh_dubey_jd/",
      linkedin: "https://www.linkedin.com/in/jiteshdubey/",
      github: "https://github.com/jiteshdubey-jd",
    },
  },
  {
    name: "Tanay Agrawal",
    role: "Developer and Coordinator",
    image: Images.Tanay,
    social: {
      instagram: "https://www.instagram.com/_tanay_agarwal",
      linkedin: "https://www.linkedin.com/in/tanay-agarval",
      github: "https://github.com/itsTanay",
    },
  },
  {
    name: "Aditi Yadav",
    role: "Frontend Developer",
    image: Images.Aditi,
    social: {
      instagram: "https://www.instagram.com/adiiti.___",
      linkedin: "",
      github: "https://github.com/aditiyadav2004",
    },
  },

  {
    name: "Sumit Tiwari",
    role: "Frontend Developer",
    image: Images.Sumit,
    social: {
      instagram: "https://www.instagram.com/sumitevolv",
      linkedin: "https://www.linkedin.com/in/sumit-tiwari-623b04257/",
      github: "https://github.com/Sumitevolv",
    },
  },
  {
    name: "Aniket Gupta",
    role: "Frontend Developer",
    image: Images.Aniket,
    social: {
      instagram: "https://www.instagram.com/the_aniketgupta0408",
      linkedin: "https://www.linkedin.com/in/aniket-gupta-94952425",
      github: "https://github.com/Aniket04087021",
    },
  },
];

const Developers = () => {
  return (
    <div>
      <div className="developer-info">
        <div className="colors">
          <div className="circle"></div>
          <div className="random"></div>
        </div>
        <h1>Meet The Developers</h1>
        <div className="developer-detail-cards">
          {developersData.map((developer, index) => (
            <div className="developer-card" key={index}>
              <div className="img-container">
                <div className="skewed">
                  <div id="img-div">
                    <img
                      loading="lazy"
                      src={developer.image}
                      alt={developer.name}
                    />
                  </div>
                </div>
              </div>
              <div className="developers_content">
                <h2>{developer.name}</h2>
                <p>{developer.role}</p>
                <div className="links">
                  <div className="icon_link">
                  <img
                    src={Instagram}
                    className="icons insta"
                    alt="Instagram logo"
                    onClick={() => window.open(developer.social.instagram, '_blank')}
                  />
                  </div>
                  <div className="icon_link">

                  <img
                    src={LinkedIn}
                    onClick={() => window.open(developer.social.linkedin, '_blank')}
                    className="icons linked"
                    alt="LinkedIn logo"
                  />
                  </div>
                  <div className="icon_link">


                  <img
                    src={GitHub}
                    onClick={() => window.open(developer.social.github, '_blank')}
                    className="icons github"
                    alt="GitHub logo"
                  />
                                    </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;
