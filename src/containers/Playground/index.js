import React from 'react'
import reactml from '@iconix/reactml';

import { Switch, Route, Link } from 'react-router-dom';

import actionLib from './actionLib';
import exampleSpec from './example.yml'

const { ReactMLHoc, materialUiTagFactory, ReactMLArrayMapper } = reactml;

const Todo = ({ todo }) =>
    <div className="checkbox">
        <label>
            <input type="checkbox" value={todo.get('label')}
                checked={todo.get('done')} />
            {todo.get('label')}
        </label>
    </div>;
const Status = ({ status }) => <span>{status}</span>;

const appTagFactory = () => ({
    Todo, Status,
    ...materialUiTagFactory, ReactMLArrayMapper,
    Switch, Route, Link,
});

export const YamlApp = () => {
    const App = ReactMLHoc(exampleSpec, actionLib, appTagFactory(), 'playground', "App");
    return <App />
}
/*


// courtesy: https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
// consider this instead: https://github.com/ctrlplusb/react-async-component
function asyncComponent(getComponent) {
    return class AsyncComponent extends React.Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }
}


class YamlApp1 extends React.Component {
    state = { loaded: true, spec: exampleSpec };

    render() {
        const { spec, pct } = this.state;
        if (!this.state.loaded) {
            return <div> Loading ({pct}%)... </div>;
        }
        const tagFactory = () => ({
            ...materialUiTagFactory, Status, ReactMLArrayMapper, Todo,
            Switch, Route, Link, ReactMLRoutes,
        });

        const Header = ReactMLHoc(spec, actionLib, tagFactory(), 'links', 'Header')
        const Footer = ReactMLHoc(spec, actionLib, tagFactory(), 'playground', 'Footer');

        const componentGet = (name) =>
            ReactMLHoc(spec, actionLib, tagFactory(), 'playground', name);
        const getComponentGet = (name) => {
            const Component = ReactMLHoc(spec, actionLib, tagFactory(), 'playground', name);
            // debugger
            return (location, callback) => {
                // debugger
                setTimeout((() => {
                    debugger
                    callback(null, <Component />);
                }), 100)
            }
        };
        const NavRoutes = (props) => (<main>
            {Object.keys(props).map((path, i) => {
                const
                    componentName = props[path],
                    component = componentGet(componentName);
                return (<Route key={i} exact path={path}
                    component={component}
                />);
            })}
        </main>);
        const NavRoutes2 = (props) => (<main>
            {Object.keys(props).map((path, i) => {
                const
                    componentName = props[path],
                    getComponent = getComponentGet(componentName);
                return (<Route key={i} exact path={path}
                    getComponent={getComponent}
                />);
            })}
        </main>);
        const getAsyncComponent = (name) => () => {
            const Component = ReactMLHoc(spec, actionLib, tagFactory(), 'playground', name);
            return Promise.resolve(Component);
        }
        const NavRoutes3 = (props) => (<main>
            {Object.keys(props).map((path, i) => {
                const
                    componentName = props[path],
                    component = asyncComponent(getAsyncComponent(componentName));
                return (<Route key={i} exact path={path}
                    component={component}
                />);
            })}
        </main>);
        return (<div>
            <Header />
            <NavRoutes3 {...spec.pages} />
            <Footer />
        </div>);
    }
}
*/