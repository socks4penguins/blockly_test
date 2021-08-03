import React, { useRef, useState } from 'react';
import { useBlocklyWorkspace } from 'react-blockly';
import ConfigFiles from '../../data/content';
import Blockly from 'blockly';
import '@blockly/block-plus-minus';

import '../../data/urb blocks';
import '../../data/urb gens';
import WizardBlocks from './WizardBlocks';
// import PropTypes from 'prop-types';

export default function BlocklyTest() {
  const blocklyRef = useRef(null);
  const [toolboxConfiguration, setToolboxConfiguration] = React.useState(
    ConfigFiles.INITIAL_TOOLBOX_JSON,
  );
  const [code, setCode] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [workspaceXML, setworkspaceXML] = useState(null);

  const { workspace, xml } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolboxConfiguration, // this must be a JSON toolbox definition
    initialXml: ConfigFiles.INITIAL_XML,
    onWorkspaceChange: handleWorkspaceChange,
  });

  function handleWorkspaceChange(event) {
    // console.log('selected', Blockly.selected);
    // Blockly.selected && Blockly.selected.select();
    // const sel = Blockly.selected
    // Blockly.selected && Blockly.selected.unselect();
    // sel && sel.select()
    setSelectedBlock(Blockly.selected);
    setCode(Blockly.JavaScript.workspaceToCode(workspace));
    var xml = Blockly.Xml.workspaceToDom(workspace);
    setworkspaceXML(Blockly.Xml.domToText(xml));
  }

  // eslint-disable-next-line no-undef
  //  Blockly.JavaScript.workspaceToCode(workspace);
  return (
    <div className="blockly-blockly-test fit vertical layout">
      <div>blockly test</div>
      <div className="flex" ref={blocklyRef} />
      {selectedBlock && <WizardBlocks selectedBlock={selectedBlock} workspace={workspace} />}
      <div className="horizontal layout full-width" style={{ height: '20%' }}>
        <div id="code" className="flex">
          {code}
        </div>
        <div id="xml" className="flex">
          {workspaceXML}
        </div>
      </div>
    </div>
  );
}

BlocklyTest.propTypes = {};
BlocklyTest.defaultProps = {};
