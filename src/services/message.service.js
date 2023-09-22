import config from "../config/chat.config.json";

export async function getResponse (q, url) {
    let response;
    if (url) {
        // TODO do http request to question with url
        response = await fetchChatResponse("llm", {
            q1: q,
            url: url
        });
    }
    else {
        // TODO do http request to simple question
        response = await fetchChatResponse("prediction", {
            q2: q
        });
    }
    // await new Promise(resolve => setTimeout(resolve, 2000));
    return await response.text();
    // return " Voici le code complet Angular pour un système de connexion incluant une classe LoginComponent qui gère les paramètres d'entrée, une classe LoginService à laquelle cette composante peut se connecter et une interface de connexion qui permet à l'utilisateur de s'identifier:\n\n//LoginComponent\nimport { Component, OnInit } from '@angular/core';\nimport { LoginService } from './login.service';\n\n@Component({\n  selector: 'login',\n  templateUrl: './login.html',\n  styleUrls: ['./login.css']\n})\nexport class LoginComponent implements OnInit {\n\n  username: string;\n  password: string;\n  constructor(private loginService: LoginService) { }\n\n  ngOnInit(): void {\n  }\n  \n  login() {\n    this.loginService.login(this.username, this.password);\n  }\n\n}\n\n//LoginService\nimport { Injectable } from '@angular/core';\nimport { HttpClient } from '@angular/";
}

export function getMessages () {
    const string = localStorage.getItem(config.chatStorageKey);
    const data = [];
    if (string != null) {
        data.push(...JSON.parse(string));
    }
    else {
        data.push(
            {
                content: " Salut ! que puis-je faire pour vous ? "
            }
        );
    }
    return data;
}

export function saveMessages (messages) {
    localStorage.setItem(config.chatStorageKey, JSON.stringify(messages));
}

async function fetchChatResponse (path, body) {
    return await fetch(config.chatUrl + path, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}
