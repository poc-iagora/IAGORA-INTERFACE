import React, {useState} from "react";
import {IagoraHeader} from "../iagora-header";
import "../iagora.css";
import "./reg-form.css";
import {inputList} from "./input-data";
import { Input } from "./input/input";
import {Button} from "reactstrap";
import {Bars} from "react-loader-spinner";


function Form ({onSubmit, steps, currentStep, data, onInputChange, inputs, previous}) {
    return (
        <form onSubmit={onSubmit}>
            <div className="mt-4">
                {inputs.filter((input, index) => steps[currentStep - 1] <= index && index < steps[currentStep]).map((input, index) => (
                    <Input
                        key={"input-iagora-" + index}
                        {...input}
                        required={true}
                        value={data[input.name] ?? ""}
                        onChange={onInputChange}
                    />
                ))}
            </div>
            <Button
                color="light"
                type="button"
                disabled={currentStep === 1}
                onClick={() => previous()}
            >
                Précedent
            </Button>
            <Button color="primary" type="submit">
                {currentStep < steps.length - 1 ? "Suivant" : "Valider"}
            </Button>
        </form>
    )
}


export function RegForm () {

    const [inputs] = useState(inputList);
    const [currentStep, setCurrentStep] = useState(1);
    const [steps] = useState([0, 5, 10, 15, 20, 23]);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    function waitLoading () {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 400);
    }

    function onSubmit (e) {
        e.preventDefault();
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            waitLoading();
        }
        else {
            console.log(data);
        }
    }

    function onInputChange (e) {
        const name = e.target.name;
        setData({
            ...data,
            [name]: e.target.value
        });
    }

    function previous () {
        setCurrentStep(currentStep - 1);
        waitLoading();
    }

    const props = {onSubmit, steps, currentStep, previous, data, onInputChange, inputs}
    return  (
        <div>
            <IagoraHeader />
            <div className="container d-flex justify-content-around">
                <div style={{minWidth: "600px"}}>
                    <p>Afin d'améliorer votre experience veuillez répondre a quelques questions.</p>
                    {(loading && <Loading />) || (<Form{...props}/>)}
                </div>
            </div>
        </div>
    )
}

function Loading () {
    return (
        <div className={"d-flex justify-content-around m-9"}>
            <Bars
                height="40"
                width="40"
                color={"#5e72e4"}
                ariaLabel="loading"
            />
        </div>
    )
}
