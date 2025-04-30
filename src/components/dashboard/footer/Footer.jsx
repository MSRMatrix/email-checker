import { useContext } from "react";
import "./footer.css"
import { Theme } from "../../context/Context";

const Footer = () => { 
    const { theme, setTheme } = useContext(Theme);
    return(
        <div className={`footer ${theme.anything}`}>
        <h2>Note: </h2>
        <p>
          Sometimes, a test or tool may indicate that an email address is valid,
          but it might still have issues.{" "}
        </p>
        <p>
          {" "}
          This can be because the test only checks certain aspects (like format
          or syntax) and not all possible factors that contribute to an email's
          validity.
        </p>
        <p>
          {" "}
          For example, the domain might not exist, or the mail server might be
          unreachable.
        </p>
      </div>
    )
}

export default Footer;