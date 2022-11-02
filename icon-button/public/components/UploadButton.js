import UploadIcon from './UploadIcon.js';
var BUTTON_CONTENT = {
  idle: '업로드',
  pending: '업로드 중',
  resolved: '완료',
  rejected: '실패',
  disabled: '업로드'
};

var UploadButton = function UploadButton(_ref) {
  var type = _ref.type;
  var buttonClassNames = "button-default " + (type === 'disabled' ? 'button-disabled' : '');
  return React.createElement("button", {
    className: buttonClassNames
  }, React.createElement("span", null, BUTTON_CONTENT[type]), React.createElement(UploadIcon, {
    type: type
  }));
};

export default UploadButton;
//# sourceMappingURL=UploadButton.js.map