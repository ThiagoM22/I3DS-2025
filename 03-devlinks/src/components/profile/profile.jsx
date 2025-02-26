import style from "./profile.module.css";
const Profile = ({children, fotoPerfil}) => {
  return (
    // para utilizar o css por meio do react devemos importar o modulo css e chamalo da seguinte forma
    <div id={style.profile}>
      <img src={fotoPerfil} alt="" />
      <p>{children}</p>
    </div>
  );
};

export default Profile;
