import "./Footer.module.css";

const Footer = ({children}) => {
  return (
    <footer>
      Feito com ❤️ por <a href="https://github.com">{children}</a>
    </footer>
  );
};

export default Footer;
