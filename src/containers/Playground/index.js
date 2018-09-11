import React from 'react'
import reactml from '@iconix/reactml';

import { Switch, Route, Link } from 'react-router-dom';

import actionLib from './actionLib';
import exampleSpec from './example.yml'

const { ReactMLHoc, materialUiTagFactory, ReactMLArrayMapper } = reactml;

const appTagFactory = () => ({
    ...materialUiTagFactory, ReactMLArrayMapper,
    Switch, Route, Link,
});

export const YamlApp = () => {
    const App = ReactMLHoc(exampleSpec, actionLib, appTagFactory(), 'playground', "App");
    return <App />
}
