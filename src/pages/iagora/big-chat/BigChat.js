import "./BigChat.css";
import "../iagora.css";
import React, {useEffect, useState} from "react";
import {getMessages, getResponse, saveMessages} from "../../../services/message.service";
import {Message} from "../../../components/chat/message/Message";
import {Typing} from "../../../components/chat/message/typing/Typing";
import {IagoraHeader} from "../iagora-header";

export default function BigChat () {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [typing, setTyping] = useState(false);
    const [inputStyle, setInputStyle] = useState();
    const [url, setUrl] = useState("");

    useEffect(() => {
        setMessages(getMessages());
    }, []);

    function sendMessage () {
        const newMessage = {
            content: " "+message.substring(0, message.length - 1).replaceAll(/\n/g, "<br>")+" ",
            author: "me"
        }
        setMessage("")
        pushMessage(newMessage, true);
        getResponse(message, url).then(res => {
            const response = {
                content: res
            }
            pushMessage(response, false);
        });
    }

    function pushMessage (message, typing) {
        messages.push(message);
        saveMessages(messages);
        setMessages([...messages]);
        const content = document.getElementById("chatContent");
        content.scrollTop = content.scrollHeight + 50;
        setTyping(typing);
    }

    function onKeyUp (e) {
        if (e.key === "Enter" && !e.shiftKey) {
            sendMessage();
        }
    }

    function onInput (e) {
        const data = e.target.value + "";
        const length = data.length;
        const empty = data.replaceAll(/\s+/g, "").length;
        if (length > 0 || empty === 0) {
            setInputStyle({
                width: length +"ch"
            })
        }
        else {
            setInputStyle({});
        }
    }

    function onInputChange (e) {
        setUrl(e.target.value);
    }

    return (
        <div>
            <IagoraHeader />
            <div className={[
                "container"
            ].join(' ')}>
                <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet' />
                <div className="chatBot">
                    <div
                        className={"chatContent"}
                        id={"chatContent"}
                    >
                        {messages.map((message, index) =>
                            <Message
                                key={"message-" + index}
                                {...message}
                            />
                        )}
                        <div>
                            <Typing isTyping={typing} />
                        </div>
                    </div>
                    <div>
                        <div className={"linkDiv d-flex"}>
                            <div className={"linkContainer"}>
                                <i className="ni ni-tag" />
                                <input
                                    type="text"
                                    className={"urlInput"}
                                    placeholder={"Insérer un url ici"}
                                    onInput={onInput}
                                    style={inputStyle}
                                    onChange={onInputChange}
                                    value={url}
                                />
                            </div>
                        </div>
                        <div className={"sendBox d-flex justify-content-between"}>
                            <textarea
                                className={"textarea"}
                                placeholder={"Posez votre question ici"}
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                onKeyUp={onKeyUp}
                            ></textarea>
                            <div
                                className={"send"}
                                onClick={sendMessage}
                            >
                                <i className="ni ni-send" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}