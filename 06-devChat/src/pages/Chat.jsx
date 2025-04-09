import React, { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.css";
const Chat = (props) => {
  const [messagesList, setMessagesList] = useState([]);
  const messageRef = useRef();
  const bottomRef = useRef();
  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      setMessagesList((current) => [...current, data]);
    });

    return () => props.socket.off("receive_message");
  }, [props.socket]);
  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messagesList]);

  const hadleSubmit = () => {
    // if(
    //  messagesList.map((message) => {if(message.author =="undefined") {window.location.reload()}})

    // );
    const message = messageRef.current.value;
    if (!message.trim()) return;

    props.socket.emit("message", message);

    messageRef.current.value = "";
    messageRef.current.focus();
  };

  return (
    <div
      id="chat-container"
      style={{ width: "400px", height: "600px" }}
      className="bg-light rounded-4 p-3 d-flex flex-column"
    >
      <div
        id="chat-body"
        className="overflow-y-hidden h-100 d-flex flex-column gap-3"
      >
        {messagesList.map((message, index) => (
          <div
            className={`${
              message.authorId == props.socket.id
                ? "align-self-end ms-5 bg-dark"
                : "align-self-start me-5 bg-dark-subtle text-dark"
            } p-2 rounded-3`}
            key={index}
          >
            <div className="message-author fw-bold">{message.author}</div>
            <div className="message-text">{message.text}</div>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>
      <div id="chat-footer" className="input-group">
        <input
          ref={messageRef}
          id="msg-user"
          name="msg-user"
          className="form-control text-dark"
          type="text"
          placeholder="Digite sua mensagem..."
          onClick={() => {}}
          onKeyDown={(e) => e.key == "Enter" && hadleSubmit()}
        />
        <span className="input-group-text" style={{ backgroundColor:"#7f00b2" }}>
          <button
            className="btn m-0 input-group-text"
            id="basic-addon1"
            onClick={() => hadleSubmit()}
          >
            <i className="bi bi-send-fill" style={{ color: "white",}}></i>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Chat;
