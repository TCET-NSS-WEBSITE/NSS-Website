import { useNavigate } from "react-router-dom";
import "../../styles/footer.css";

function FooterSection({ title, list, link }) {
  const navigate = useNavigate();
  return (
    <div className="section-div">
      <h3>{title}</h3>
      <ul>
        {list.map((item, idx) => (
          <li key={item} onClick={() => navigate(link[idx] || "../")}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="links">
        <FooterSection
          title="TCET-NSS UNIT"
          list={["Home", "About Us", "Team", "Testimonials", "Projects"]}
          link={[
            "../",
            "../about",
            "../team",
            "../testimonials",
            "../projects",
          ]}
        />
        <FooterSection
          title="ABOUT US"
          list={["What is NSS", "History", "Logo Significance", "Our Magazine"]}
          link={[
            "../about/#what-is-nss",
            "../about/#history",
            "../about/#significance",
            "../about/#magazine",
          ]}
        />
        <FooterSection
          title="DOMAINS"
          list={["Education", "Health", "Environment", "Society"]}
          link={[
            "../projects?domain=Education/#projects",
            "../projects?domain=Health/#projects",
            "../projects?domain=Environment/#projects",
            "../projects?domain=Society/#projects",
          ]}
        />
        <FooterSection
          title="TEAM"
          list={[
            "Chair Person",
            "Programme Officers",
            "Deputy Programme Officers",
            "Councils",
            "Junior Councils",
          ]}
          link={[
            "../team/#chairperson",
            "../team/#programme-officer",
            "../team/#deputy-programme-officer",
            "../team/#council",
            "../team/#junior-council",
          ]}
        />
      </div>
      <hr />
      <div className="footer-impt-links">
        <p>TCET-NSS. All rights reserved</p>
        <p
          className="developers-link"
          onClick={() => navigate("../developers")}
        >
          Meet the Developers
        </p>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/tcetnssunit"
              target="blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://x.com/nss_tcet"
              target="blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
