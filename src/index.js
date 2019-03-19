import React, { Component } from "react";
import ReactDOM from "react-dom";

// RTML Library
import { newVocab } from "@iconix/reactml";
// Bring in Victory charts
import victoryVocab from "@iconix/reactml/build/curated-vocabs/victory";

import routerVocab from "./lib/router";

// import material UI component vocab
import materialVocab from "./lib/material-ui-vocab";

// merged vocabularies
const vocab = newVocab()
	.merge(routerVocab)
	.merge(victoryVocab)
	.merge(materialVocab);

// Load RTML files
const appLoader = require("./app.rtml");
const contentLoader = require("./content.rtml");
const routingExampleLoader = require("./routing-example.rtml");

// Merge RTML vocabularies

// Example1:
// appLoader(contentLoader(vocab));

// Example 2:
routingExampleLoader(vocab);

// Lookup "App" component - defined in app.rtml
const App = vocab.map("App");

// Insert into the index.html page
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
