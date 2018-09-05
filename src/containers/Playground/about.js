import reactml from '@iconix/reactml';
import exampleSpec from './example.yml'
import actionLib from './actionLib';

const { ReactMLHoc } = reactml;
const TagFactory = {};

export default ReactMLHoc(exampleSpec, actionLib, TagFactory, 'about', 'About');
