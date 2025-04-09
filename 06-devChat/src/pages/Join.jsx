import React, { useRef } from "react";
import io from "socket.io-client";
import styles from "./Join.module.css";
const Join = (props) => {
  //Hooks
  const usernameRef = useRef(null);

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim()) {
      alert("Preencha o campo de nome de usuário");
      return;
    }

    //criando conexão com o socket
    const servidorSocket = await io.connect("http://192.168.0.130:3000");
    servidorSocket.emit("set_username", username);

    //abrindo a conexão com o socket
    props.setSocket(servidorSocket);
    props.visibility(true);
  };
  return (
    <div className="text-center">
      <h1 className="fw-bold">devChat</h1>

      <div
        id="join-box"
        className={`${""} bg-light mt-4 rounded-3 py-4 px-5 text-dark d-flex flex-column justify-content-center align-items-center gap-3`}
      >
        <h2 className="">Bem-vindo ao devChat!</h2>
        <div className="form-floating mb-3">
          <input
            ref={usernameRef}
            type="text"
            className={`form-control border-bottom border-0`}
            id="floatingInput"
            placeholder="Nome de usuário"
            onKeyDown={(e) => e.key == "Enter" && handleSubmit()}
          />
          <label htmlFor="floatingInput" className="">
            Nome de usuário
          </label>
        </div>
        <button
          className={`${styles.bgRoxo} btn px-5 py-2 text-light fw-bold`}
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
