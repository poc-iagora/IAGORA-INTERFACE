import "./input.css";

export function Input ({placeholder, name, ...rest}) {

    const label = placeholder ?? name;

    return (
        <div className={"input-container"} >
            <label htmlFor={name}>{label}</label>
            <div>
                <input
                    className={"input"}
                    placeholder={label}
                    name={name}
                    {...rest}
                    id={name}
                />
            </div>
        </div>
    )
}