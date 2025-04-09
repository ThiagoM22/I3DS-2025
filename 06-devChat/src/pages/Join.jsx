import React, { useRef } from "react";
import io from "socket.io-client";
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
    const servidorSocket = await io.connect("http://192.168.10.123:3001");
    servidorSocket.emit("set_username", username);

    //abrindo a conexão com o socket
    props.setSocket(servidorSocket);
    props.visibility(true);
  };
  return (
    <div className="text-center">
      <h1>devChat</h1>

      <div
        id="join-box"
        className="mt-4 bg-secondary rounded-4 py-4 px-5  d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <h3>Bem-vindo ao devChat!</h3>
        <div className="form-floating mb-3">
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Nome de usuário"
            onKeyDown={(e) => e.key == "Enter" && handleSubmit()}
          />
          <label htmlFor="floatingInput" className="">
            Nome de usuário
          </label>
        </div>
        <button
          className="btn btn-light px-5 py-2"
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
