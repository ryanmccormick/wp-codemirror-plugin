import React from 'react';
import ReactDOM from 'react-dom';

import { WpCodeMirror } from './wp-codemirror/WpCodeMirror';
import 'codemirror/lib/codemirror.css';
import './index.css';

const elements = Array.from(document.querySelectorAll("pre[lang]")) as Array<HTMLPreElement>;

if (elements.length > 0) {
  elements.forEach((element: HTMLPreElement) => {
    const lang = (element.getAttribute('lang') || '').toLowerCase();
    const line = parseInt((element.getAttribute('line') || '0'), 10);
    const codeBlock = element.innerText;

    ReactDOM.render(<WpCodeMirror codeBlock={codeBlock} lang={lang} line={line}/>, element);
  });
}
