var ICON_DEFAULT_PATH = './assets/icons/type=';
var ICON_TYPE = {
  idle: 'up-arrow',
  pending: 'spinner-animate',
  resolved: 'check-mark',
  rejected: 'cross',
  disabled: 'not-allowed'
};

var getPath = function getPath(type) {
  return "" + ICON_DEFAULT_PATH + ICON_TYPE[type] + ".svg";
};

var UploadIcon = function UploadIcon(_ref) {
  var type = _ref.type;
  var IconClassNames = "" + (type === 'disabled' ? 'icon-disabled' : '');
  return React.createElement("img", {
    src: getPath(type),
    className: IconClassNames
  });
};

export default UploadIcon;
//# sourceMappingURL=UploadIcon.js.map