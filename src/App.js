import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import YamlApp from './containers/Playground/app';

export default () => <BrowserRouter>
    <YamlApp />
</BrowserRouter>;
