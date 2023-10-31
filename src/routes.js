import Index from "./views/Index";
import Landing from "./views/examples/Landing";
import React from "react";
import Login from "./views/examples/Login";
import Profile from "./views/examples/Profile";
import Register from "./views/examples/Register";
import ChatPage from "./components/bubble/ChatPage";
import BigChat from "./pages/iagora/big-chat/BigChat";
import {RegForm} from "./pages/iagora/form/RegForm";
import { RegProject } from "pages/iagora/projectreg/RegProject";
import { CardProject } from "pages/iagora/projectfiche/CardProject";
import { ListProject } from "pages/iagora/projectlist/ListProject";
import { Dashboard } from "pages/iagora/dashboard/projectdb/Dashboard";
import { ListEtudiant } from "pages/iagora/projectlist/ListEtudiant";
import { CandidatProject } from "pages/iagora/projectlist/CandidatProject";
import { SuiviProject } from "pages/iagora/dashboard/projectdb/SuiviProject";
import Prompt  from "pages/iagora/prompt/Prompt";
import Expert  from "pages/iagora/prompt/Expert";
import AudioMp3  from "pages/iagora/prompt/AudioMp3";
import Fichier  from "pages/iagora/prompt/Fichier";

export const routes = [
    {
        path: "/audio",
        element: <AudioMp3/>
    },
    {
        path: "/file",
        element: <Fichier/>
    },
    
    {
        path: "/expert",
        element: <Expert/>
    },
    {
        path: "/prompt",
        element: <Prompt/>
    },
    {
        path: "/candidat-projet",
        element: <CandidatProject/>
    },
    {
        path: "/suivi-project",
        element: <SuiviProject />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/list-project",
        element: <ListProject />
    },
    {
        path: "/list-etudiant",
        element: <ListEtudiant />
    },
    {
        path: "/card-project",
        element: <CardProject />
    },
    {
        path: "/reg-project",
        element: <RegProject />
    },
    {
        path: "/reg-form",
        element: <RegForm />
    },
    {
        path: "/chat-bot",
        element: <BigChat />
    },
    {
        path: "/",
        element: <ListProject/>
    },
    {
        path: "/landing-page",
        element: <Landing />
    },
    {
        path: "/login-page",
        element: <Login />
    },
    {
        path: "/profile-page",
        element: <Profile />
    },
    {
        path: "/register-page",
        element: <Register />
    },
    {
        path: "/chat",
        element: <Prompt />
    }
]