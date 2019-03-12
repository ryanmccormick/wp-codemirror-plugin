import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { WpCodeMirror } from './wp-codemirror/WpCodeMirror';
import 'codemirror/lib/codemirror.css';
import './index.css';

const elements = Array.from(document.querySelectorAll("pre[lang]")) as Array<HTMLPreElement>;

if (elements.length > 0) {
  elements.forEach((element: HTMLPreElement) => {
    const parentElement = element.parentElement!;
    const newHostElement = document.createElement('pre');
    const lang = (element.getAttribute('lang') || '').toLowerCase();
    const line = parseInt((element.getAttribute('line') || '0'), 10);
    const codeBlock = element.innerText;

    //    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T;
    parentElement.insertBefore(newHostElement, element);
    parentElement.removeChild(element);


    ReactDOM.render(<WpCodeMirror codeBlock={codeBlock} lang={lang} line={line}/>, newHostElement);
  });
}



// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
