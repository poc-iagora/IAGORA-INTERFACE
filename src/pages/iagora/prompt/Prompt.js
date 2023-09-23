import React, { useState } from "react";
import axios from 'axios';

// reactstrap components
import {
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button,
    Container
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

// index page sections
import Hero from "views/IndexSections/Hero.js";

class Prompt extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            question: "", // Pour stocker la valeur du champ de texte "question"
            url: "",      // Pour stocker la valeur du champ de texte "url"
            responseText: "",
        };
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    handleButtonClick = (e) => {
        e.preventDefault();
        var requestData = {
            q1: this.state.question,
            url: this.state.url,
        };

        // Utilisez axios pour envoyer la requête POST
        if(this.state.url != ""){
            axios.post('https://iagora.onrender.com/llm', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then((response) => {
                this.setState({ responseText: response.data });
                // Traitez la réponse ici si nécessaire
                console.log('Réponse de la requête POST :', response);
            })
            .catch((error) => {
                // Gérez les erreurs ici
                console.error('Erreur lors de la requête POST :', error);
            });

        }
        else{
            requestData = {
                query: this.state.question
            };
            axios.post('https://iagora.onrender.com/ask', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then((response) => {
                this.setState({ responseText: response.data });
                // Traitez la réponse ici si nécessaire
                console.log('Réponse de la requête POST :', response);
            })
            .catch((error) => {
                // Gérez les erreurs ici
                console.error('Erreur lors de la requête POST :', error);
            });
        }
    }

    render() {
        return (
            <>
                <DemoNavbar />
                <main ref="main">
                    <Hero />
                    <section className="section">
                        <Container>
                            <>
                                <FormGroup>
                                    <Form onSubmit={this.handleButtonClick}>
                                        <Input
                                            id="question"
                                            name="question"
                                            placeholder="Quel est le numéro atomique du carbone?"
                                            type="textarea"
                                            value={this.state.question}
                                            onChange={(e) => this.setState({ question: e.target.value })}
                                        />
                                        <Input
                                            id="url"
                                            name="url"
                                            placeholder="https://fr.wikipedia.org/wiki/"
                                            type="text"
                                            value={this.state.url}
                                            onChange={(e) => this.setState({ url: e.target.value })}
                                        />
                                        <Button className="is-valid" type="submit">
                                            Valider
                                        </Button>
                                    </Form>
                                </FormGroup>
                                    <textarea
                                        id="responseTextarea"
                                        value={this.state.responseText} // Affichez la réponse de la requête
                                        readOnly
                                    />
                            </>
                        </Container>
                    </section>
                    <section className="section section-components">
                        <Container>
                        </Container>
                    </section>

                </main>
            </>
        );
    }
}

export default Prompt;
