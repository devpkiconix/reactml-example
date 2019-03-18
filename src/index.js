import React, { Component } from "react";
import ReactDOM from "react-dom";

// RTML Library
import { newVocab } from "@iconix/reactml";
// Bring in Victory charts
import victoryVocab from "@iconix/reactml/build/curated-vocabs/victory";

// import material UI component vocab
import materialVocab from "./lib/material-ui-vocab";

// merged vocabularies
const vocab = newVocab().merge(victoryVocab).merge(materialVocab);

// Load RTML files
const appLoader = require("./app.rtml");
const contentLoader = require("./content.rtml");

// Merge RTML vocabularies
appLoader(contentLoader(vocab));

// Lookup "Page" component - defined in app.rtml
const Page = vocab.map("Page");

// Insert into the index.html page
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<Page/>, wrapper) : false;

