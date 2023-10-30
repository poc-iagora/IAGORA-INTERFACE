import "./Message.css";

export function Message ({content, author}) {
    return (
        <div
            className={["messageContainer", author].join(' ')}
        >
            <pre>
            {content
                .substring(1, content.length-1)
                .replaceAll(/\\n/g, "\n")
                .replaceAll(/\\"/g, "\"")
                .replaceAll(/\\t/g, "    ")
            }
            </pre>
        </div>
    )
}
