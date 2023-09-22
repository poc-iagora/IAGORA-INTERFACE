import React, { useState } from "react";
import { IagoraHeader } from "../iagora-header";
import "../iagora.css";
import { Card } from "@material-ui/core";
import { CardBody, CardText, Button, CardHeader } from "reactstrap";

export function CardProject () {

    return  (
        <div>
            <IagoraHeader />
            <div className="container d-flex justify-content-around">
                <div style={{minWidth: "600px"}}>
                    <p>Fiche de projet</p>
                </div>
            </div>
            <div>
                <Card>
                    <CardHeader>Nom du projet, représenté par .... </CardHeader>
                    <CardBody>
                        <CardText>Description du projet</CardText>
                        <CardText>Ressources humaines requises</CardText>
                        <CardText>Ressources matérielles requises</CardText>
                        <CardText>Budget estimé</CardText>
                        <CardText>Documents</CardText>
                        <Button href="/#" color="primary">Participer</Button>
                        <Button href="/#" color="primary">Financer</Button>
                        <Button href="/#" color="primary">Evaluer</Button>
                        <Button href="/#" color="primary">Valider</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
