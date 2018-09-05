import React from 'react'
import reactml from '@iconix/reactml';
import exampleSpec from './example.yml'
import actionLib from './actionLib';
import Status from './Status';

const { ReactMLHoc, materialUiTagFactory, ReactMLArrayMapper } = reactml;

const Todo = ({ todo }) =>
    <div className="checkbox">
        <label>
            <input type="checkbox" value={todo.get('label')}
                checked={todo.get('done')} />
            {todo.get('label')}
        </label>
    </div>;

const tagFactory = {
    ...materialUiTagFactory, Status, ReactMLArrayMapper, Todo,
};

export default ReactMLHoc(exampleSpec, actionLib, tagFactory, 'playground', 'Editor');
