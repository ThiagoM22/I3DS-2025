import "./App.css";
import foto from "../src/img/Shrek.gif"; //Importante o Avatar da pasta imagem e atribuindo seu avlor para a variavel foto
import foto2 from "../src/img/Avatar.jpg";

import Profile from "./components/profile/profile";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Footer from "./components/footer/Footer";
import { useState } from "react";
const App = () => {
  const [isLight, setIsLight] = useState(false);
  const [fotoPerfil, setFotoPerfil] = useState(foto);

  const troca = () => {
    setIsLight(!isLight);
    setFotoPerfil(isLight ? foto : foto2);
  };

  return (
   <div className="container">
    <div id="App" className={isLight && "light"}>
      <Profile fotoPerfil={fotoPerfil}>@ThiagoMazzi</Profile>
      <Switch troca={troca} islight={isLight} />
      <ul>
        <Links link={"https://github.com/ThiagoM22"}>Github</Links>
        <Links link={"https://www.instagram.com/thiago.mazzi/"}>
          Instagram
        </Links>
        <Links link={"https://xn--portiflio-b7a.com/"}>Portifólio</Links>
        <Links link={"https://nubank.com.br/"}>Me pague um café☕</Links>
      </ul>

      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/ThiagoM22"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://www.instagram.com/thiago.mazzi/"}
          icon={"logo-instagram"}
        />
        <SocialLinks
          link={"https://www.linkedin.com/"}
          icon={"logo-linkedin"}
        />
        <SocialLinks link={"https://www.youtube.com/"} icon={"logo-youtube"} />
      </div>

      <Footer>Meu nome é Mazzi</Footer>
    </div>
   </div>
  );
};

export default App;
