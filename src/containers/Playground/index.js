import React from 'react'
import reactml from '@iconix/reactml';

import { Switch, Route, Link } from 'react-router-dom';

import actionLib from './actionLib';
import exampleSpec from './example.yml'

const { ReactMLHoc, materialUiTagFactory, ReactMLArrayMapper } = reactml;

export class YamlApp extends React.Component {
    state = {
        loading: true, loaded: false, countdown: 0,
        spec: exampleSpec
    };

    componentDidMount() {
        // Fake timer
        const tryAgain = () => setTimeout(() => {
            const { countdown } = this.state;
            if (countdown < 1000) {
                this.setState({
                    loading: false, countdown: this.state.countdown + 100,
                    pct: Math.floor((this.state.countdown) / 1000 * 100),
                });
                tryAgain();
                return;
            };
            this.setState({ loading: false, loaded: true, countdown: null });
        }, 100);
        tryAgain();
    }

    render() {
        const { spec, pct } = this.state;
        if (!this.state.loaded) {
            return <div> Loading ({pct}%)... </div>;
        }
        const aboutTagFactory = () => ({});
        const roTagFactory = () => ({});
        const editorTagFactory = () => ({
            ...materialUiTagFactory, Status, ReactMLArrayMapper, Todo,
        });
        const appTagFactory = () => ({
            Switch, Route, Link, ReadOnly, Editor, About, Header, NavRoutes,
        });

        const Todo = ({ todo }) =>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value={todo.get('label')}
                        checked={todo.get('done')} />
                    {todo.get('label')}
                </label>
            </div>;

        const Status = ({ status }) => <span>{status}</span>;
        const Header = ReactMLHoc(spec, actionLib, appTagFactory(), 'links', 'Header')
        const Footer = ReactMLHoc(spec, actionLib, appTagFactory(), 'playground', 'Footer');
        const About = ReactMLHoc(spec, actionLib, aboutTagFactory(), 'about', 'About');
        const Editor = ReactMLHoc(spec, actionLib, editorTagFactory(), 'playground', 'Editor');
        const ReadOnly = ReactMLHoc(spec, actionLib, roTagFactory(),
            'playground', 'ReadOnly');
        const NavRoutes = (props) => <Switch>
            <Route exact={true} path='/' component={ReadOnly} />
            <Route exact={true} path='/reactml/view' component={ReadOnly} />
            <Route exact={true} path='/reactml/editor' component={Editor} />
            <Route exact={true} path='/reactml/about' component={About} />
        </Switch>;



        return (<div>
            <Header />
            <NavRoutes />
            <Footer />
        </div>);
    }
}