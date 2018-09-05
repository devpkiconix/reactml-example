import reactml from '@iconix/reactml';
import exampleSpec from './example.yml'
import actionLib from './actionLib';

const { ReactMLHoc } = reactml;

const tagFactory = {};

export default ReactMLHoc(exampleSpec, actionLib, tagFactory,
    'playground', 'ReadOnly');
