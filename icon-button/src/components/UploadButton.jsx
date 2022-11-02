import UploadIcon from './UploadIcon.js';

const BUTTON_CONTENT = {
  idle: '업로드',
  pending: '업로드 중',
  resolved: '완료',
  rejected: '실패',
  disabled: '업로드',
};

const UploadButton = ({ type }) => {
  const buttonClassNames = `button-default ${
    type === 'disabled' ? 'button-disabled' : ''
  }`;

  return (
    <button className={buttonClassNames}>
      <span>{BUTTON_CONTENT[type]}</span>
      <UploadIcon type={type} />
    </button>
  );
};

export default UploadButton;
