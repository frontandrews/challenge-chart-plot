import React from "react";
import AceEditor from "react-ace";

import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "./aceCodeEditor.css";

export default class AceCodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: props.defaultValue,
      onChange: props.onChange,
    };
  }

  render() {
    const { onChange, defaultValue, code } = this.state;
    return (
      <div className="AceCodeEditor">
        <AceEditor
          name="ace-editor"
          width="100hw"
          height="100vh"
          mode="javascript"
          theme="solarized_dark"
          onChange={onChange}
          defaultValue={defaultValue}
          value={code}
          enableBasicAutocompletion={false}
          enableLiveAutocompletion={false}
          enableSnippets={false}
        />
      </div>
    );
  }
}
