const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/hp/.gemini/antigravity/brain/e576359e-159d-4376-9d60-6d1c7cbc6ed0/.system_generated/steps/21/output.txt'));
let output = '';
function printNode(node, path) {
  if (['15:44', '15:39', '15:62'].includes(node.id) || node.name === 'PROTO.svg fill') {
    output += 'Node: ' + node.name + ' (ID: ' + node.id + ') Path: ' + path + '\n';
    output += 'Props: ' + JSON.stringify({
      layoutMode: node.layoutMode,
      itemSpacing: node.itemSpacing,
      paddingLeft: node.paddingLeft,
      paddingRight: node.paddingRight,
      paddingTop: node.paddingTop,
      paddingBottom: node.paddingBottom,
      primaryAxisAlignItems: node.primaryAxisAlignItems,
      counterAxisAlignItems: node.counterAxisAlignItems,
      layoutAlign: node.layoutAlign,
      width: node.absoluteBoundingBox?.width,
      height: node.absoluteBoundingBox?.height
    }, null, 2) + '\n';
    if(node.children) {
      output += 'Children: ' + node.children.map(c => c.name + ' (' + c.layoutMode + ', W:' + c.absoluteBoundingBox?.width + ', H:' + c.absoluteBoundingBox?.height + ')').join(', ') + '\n';
    }
    output += '\n';
  }
  if (node.children) node.children.forEach(c => printNode(c, path + ' > ' + c.name));
}
printNode(data.document, data.document.name);
fs.writeFileSync('C:/Users/hp/Desktop/proto_portfolio/nav_props.txt', output);
