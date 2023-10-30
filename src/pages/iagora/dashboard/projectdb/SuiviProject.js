import React from "react";
import { IagoraHeader } from "../../iagora-header";
import "../../iagora.css";
import Tasks from 'components/Tasks/Tasks.js';
import { bugs } from 'variables/general';


export function SuiviProject () {

    return  (
        <div>
            <IagoraHeader />
            <div className="container d-flex justify-content-around">
                <div style={{minWidth: "600px"}}>
                    <p>Liste de projets</p>
                </div>
            </div>
            <div>   
                <Tasks
                    checkedIndexes={[0,3]}
                    tasksIndexes={[0,1,2,3]}
                    tasks={bugs}
                />
            </div>
        </div>
    )
}

