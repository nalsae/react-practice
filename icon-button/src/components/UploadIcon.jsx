const ICON_DEFAULT_PATH = './assets/icons/type=';

const ICON_TYPE = {
  idle: 'up-arrow',
  pending: 'spinner-animate',
  resolved: 'check-mark',
  rejected: 'cross',
  disabled: 'not-allowed',
};

const getPath = (type) => `${ICON_DEFAULT_PATH}${ICON_TYPE[type]}.svg`;

const UploadIcon = ({ type }) => {
  const IconClassNames = `${type === 'disabled' ? 'icon-disabled' : ''}`;

  return <img src={getPath(type)} className={IconClassNames} />;
};

export default UploadIcon;
