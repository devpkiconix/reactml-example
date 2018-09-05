import React from 'react'
// For this demo, we are using the UMD build of react-router-dom
import { Switch, Route, Link } from 'react-router-dom';
import reactml from '@iconix/reactml';

import actionLib from './actionLib';
import ReadOnly from './readonly';
import Editor from './editor';
import About from './about';

import exampleSpec from './example.yml'
import appbarSpec from './header.yml'
const { ReactMLHoc } = reactml;

const NavRoutes = (props) => <Switch>
    <Route exact={true} path='/' component={ReadOnly} />
    <Route exact={true} path='/reactml/view' component={ReadOnly} />
    <Route exact={true} path='/reactml/editor' component={Editor} />
    <Route exact={true} path='/reactml/about' component={About} />
</Switch>;


const tagFactory = () => ({
    Switch, Route, Link, ReadOnly, Editor, About, Appbar, NavRoutes,
});

const Appbar = ReactMLHoc(appbarSpec, actionLib, tagFactory(),
    'links', 'Header')

const Footer = ReactMLHoc(exampleSpec, actionLib, tagFactory(),
    'playground', 'Footer');

const App = () => (
    <div>
        <Appbar />
        <main>
            <NavRoutes />
        </main>
        <Footer />
    </div>
)

export default App;
