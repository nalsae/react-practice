import Icon from './components/UploadIcon.js';
import UploadButton from './components/UploadButton.js';
var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(React.StrictMode, null, React.createElement(Icon, {
  type: "idle"
}), React.createElement(Icon, {
  type: "pending"
}), React.createElement(Icon, {
  type: "resolved"
}), React.createElement(Icon, {
  type: "rejected"
}), React.createElement(Icon, {
  type: "disabled"
}), React.createElement(UploadButton, {
  type: "idle"
}), React.createElement(UploadButton, {
  type: "pending"
}), React.createElement(UploadButton, {
  type: "resolved"
}), React.createElement(UploadButton, {
  type: "rejected"
}), React.createElement(UploadButton, {
  type: "disabled"
})));
console.log(root);
//# sourceMappingURL=main.js.map