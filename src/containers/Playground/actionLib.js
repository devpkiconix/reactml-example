import yamlLib from 'js-yaml';
import { push } from 'connected-react-router'
import reactml from "@iconix/reactml";
const {
    reactmlFieldChangeHandler,
} = reactml;

const onEmailChange = reactmlFieldChangeHandler('playground.user.email');

const onFirstNameChange = reactmlFieldChangeHandler('playground.user.firstName');

const save = (event) => (dispatch) => {
    dispatch({
        type: 'REACTML_UPDATE',
        stateNodeName: 'playground',
        name: 'status.save',
        value: '(fake) saving..',
    });
    setTimeout(() => {
        dispatch({
            type: 'REACTML_UPDATE',
            stateNodeName: 'playground',
            name: 'status.save',
            value: '(fake) save successful',
        });
        setTimeout(() => {
            dispatch({
                type: 'REACTML_UPDATE',
                stateNodeName: 'playground',
                name: 'status.save',
                value: null,
            });
        }, 2000);
    }, 500)

};

const toYaml = (x) => yamlLib.safeDump(x, { indent: 2 });
const fromYaml = (x) => yamlLib.safeLoad(x);

const onChangeYaml = reactmlFieldChangeHandler('playground.specText');

const applyYaml = (event) => (dispatch) => {
    dispatch({
        type: 'REACTML_APPLY_YML',
        stateNodeName: 'playground',
        specTextName: 'specText', specName: 'spec'
    });
};

const gotoRoot = (event) => (dispatch) => dispatch(push('/'));
const gotoEditor = (event) => (dispatch) => dispatch(push('/editor'));
const gotoAbout = (event) => (dispatch) => dispatch(push('/about'));

export default {
    onFirstNameChange, onEmailChange, save, toYaml, fromYaml,
    onChangeYaml, applyYaml,
    gotoEditor, gotoRoot, gotoAbout,
};