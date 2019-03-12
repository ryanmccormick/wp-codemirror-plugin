import * as React from 'react';
import CodeMirror, { Editor } from 'codemirror';
import 'codemirror/mode/vb/vb';
import 'codemirror/mode/vbscript/vbscript';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/htmlembedded/htmlembedded';
import 'codemirror/mode/css/css';
import 'codemirror/mode/php/php';
import 'codemirror/mode/sql/sql';
import 'codemirror/theme/darcula.css';

import { WpCodeMirrorProps } from './wp-code-mirror.props';
import './WpCodeMirror.css';

class WpCodeMirror extends React.Component {

  static defaultProps: Partial<WpCodeMirrorProps> = {
    lang: '',
    line: 1,
    codeBlock: ''
  };

  props: WpCodeMirrorProps;
  elementRef: HTMLDivElement;
  codeMirrorInstance: Editor;

  constructor(props: WpCodeMirrorProps) {
    super(props);
    this.initCodeMirror = this.initCodeMirror.bind(this);
  }

  componentDidMount(): void {
    this.initCodeMirror(this.elementRef);
  }

  initCodeMirror(hostElement: HTMLElement): void {
    this.codeMirrorInstance = CodeMirror(hostElement, {
      value: this.props.codeBlock,
      mode: this.props.lang,
      lineNumbers: true,
      viewportMargin: Infinity,
      readOnly: true,
      theme: 'darcula'
    });
  }

  render() {
    return (<div ref={ref => this.elementRef = ref!} className="wp-codemirror-host"/>);
  }
}

export { WpCodeMirror };
