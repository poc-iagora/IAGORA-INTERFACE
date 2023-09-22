import React from "react";
import { IagoraHeader } from "../iagora-header";
import "../iagora.css";
import Table from "components/Table/Table.js";


export function ListProject () {

    return  (
        <div>
            <IagoraHeader />
            <div className="container d-flex justify-content-around">
                <div style={{minWidth: "600px"}}>
                    <p>Liste de projets</p>
                </div>
            </div>
            <div>   
                <Table tableHeaderColor="primary" tableHead={['Name','Country','City','Salary']}
                    tableData={[
                        [ "Dakota Rice" , "Niger" , "Oud-Turnhout" , "$36,738" ] ,
                        [ "Minerva Hooper" , "Curaçao" , "Sinaai-Waas" , "$23,789" ] ,
                        [ "Sage Rodriguez" , "Netherlands" , "Baileux" , "$56,142" ] ,
                        [ "Philip Chaney" , "Korea, South" , "Overland Park" , "$38,735" ] ,
                        [ "Doris Greene" , "Malawi" , "Feldkirchen in Kärnten" , "$63,542" ] ,
                        [ "Mason Porter" , "Chile" , "Gloucester" , "$78,615" ]
                    ]}
                />
            </div>
        </div>
    )
}
