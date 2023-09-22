import React from "react";

export function Chat ({className}) {
    return (
        <div
            className={[
                "card",
                className
            ].join(' ')}
            id="chat1"
            style={{ borderRadius: 15 }}
        >
            <div
                className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
                style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
            >
                <i className="fas fa-angle-left" />
                <p className="mb-0 fw-bold">Live chat</p>
                <i className="fas fa-times" />
            </div>
            <div
                className="card-body"
                style={{
                    height: "400px",
                    overflowY: "scroll"
                }}
            >
                <div className="d-flex flex-row justify-content-start mb-4">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: 45, height: "100%" }}
                    />
                    <div
                        className="p-3 ms-3"
                        style={{
                            borderRadius: 15,
                            backgroundColor: "rgba(57, 192, 237,.2)",
                        }}
                    >
                        <p className="small mb-0">
                            Hello and thank you for visiting MDBootstrap. Please click
                            the video below.
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-end mb-4">
                    <div
                        className="p-3 me-3 border"
                        style={{ borderRadius: 15, backgroundColor: "#fbfbfb" }}
                    >
                        <p className="small mb-0">
                            Thank you, I really like your product.
                        </p>
                    </div>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        alt="avatar 1"
                        style={{ width: 45, height: "100%" }}
                    />
                </div>
                <div className="d-flex flex-row justify-content-start mb-4">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: 45, height: "100%" }}
                    />
                    <div className="ms-3" style={{ borderRadius: 15 }}>
                        <div className="bg-image">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                                style={{ borderRadius: 15 }}
                                alt="video"
                            />
                            <a href="#!">
                                <div className="mask" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-start mb-4">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: 45, height: "100%" }}
                    />
                    <div
                        className="p-3 ms-3"
                        style={{
                            borderRadius: 15,
                            backgroundColor: "rgba(57, 192, 237,.2)",
                        }}
                    >
                        <p className="small mb-0">...</p>
                    </div>
                </div>
            </div>

            <div className={"p-2"} >
                <div className="form-outline">
                  <textarea
                      className="form-control"
                      id="textAreaExample"
                      rows={2}
                      defaultValue={""}
                  />
                    <label className="form-label" htmlFor="textAreaExample">
                        Type your message
                    </label>
                </div>
            </div>
        </div>
    )
}