import "./Typing.css";

export function Typing ({isTyping}) {

    if (!isTyping) {
        return (
            <div></div>
        );
    }

    return (
        <div className="typing">
            <div className="typing__dot"></div>
            <div className="typing__dot"></div>
            <div className="typing__dot"></div>
        </div>
    )
}