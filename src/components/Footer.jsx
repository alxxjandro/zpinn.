import footer from "../styles/footer.module.css";
import footerxl from "../assets/footer-xl.jpg";
import footermd from "../assets/footer-md.jpg";
import footersm from "../assets/footer-sm.jpg";
import { FaGithub } from "react-icons/fa";
import { SiTheodinproject } from "react-icons/si";

function Footer() {
  return (
    <div className={footer.footer}>
      <img
        srcSet={`
                ${footersm} 480w,
                ${footermd} 768w,
                ${footerxl} 1024w
            `}
        sizes="
                (max-width: 600px) 100vw,
                (max-width: 1024px) 90vw,
                1024px
            "
        src={footerxl}
        alt="a pretty cool collection of vinyls"
        className={footer.bgimg}
      />
      <div className={footer.content}>
        <div className={footer.left}>
          <h1 className={footer.zpinn}>zpinn.</h1>
          <h2>
            Not for sale. Just for <span className="strong">show.</span>
            <br /> Designed by <span className="strong">alxxjandro</span>{" "}
          </h2>
          <div className={footer.leftIcons}>
            <a target="blank" href="https://github.com/alxxjandro">
              <FaGithub />
            </a>
            <a target="blank" href="https://www.theodinproject.com/">
              <SiTheodinproject />
            </a>
          </div>
        </div>
        <div className={footer.right}>
          <h1>
            Not everything <br /> has to be <span className="strong">loud</span>{" "}
            <br /> to be <span className="strong">heard.</span>{" "}
          </h1>
          <h2>
            Photo by{" "}
            <a
              target="blank"
              href="https://unsplash.com/photos/black-wooden-shelf-with-books-5j7nQv-jaVM"
            >
              Samuel Regan-Asante
            </a>{" "}
            on{" "}
            <a target="blank" href="https://unsplash.com/">
              Unsplash
            </a>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
