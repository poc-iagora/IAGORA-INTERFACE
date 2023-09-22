import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import {routes} from "./routes";
import "./App.css";
import {Chat} from "./components/chat/chat";

export function App () {

    const [visible, setVisible] = useState(false);

    return (
        <div className={"container-page"}>
            <BrowserRouter>
                <Routes>
                    {routes.map((route, index) =>
                        <Route
                            key={"route-" + index}
                            path={route.path}
                            element={route.element}
                        />
                    )}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
            <div className={[
                "chat-container",
                visible ? "chat-visible" : ""
            ].join(' ')}>
                <Chat className={"chat-box"} />
            </div>
            <div
                className={[
                    "bubble",
                    visible ? "bubble-active" : ""
                ].join(' ')}
                onClick={() => setVisible(!visible)}
            >
                <i className="ni ni-chat-round" />
            </div>
        </div>
    )
}
