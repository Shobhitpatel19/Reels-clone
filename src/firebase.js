// npm i firebase 
// src -> create firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import secret from "./secrets";
import { getFirestore } from "firebase/firestore";

let app = initializeApp(secret);
// From these three lines you are able to include firebase in your react app

export let auth = getAuth(app);
export const db = getFirestore(app);