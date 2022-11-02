import UploadButton from './components/UploadButton.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <UploadButton type="idle"></UploadButton>
    <UploadButton type="pending"></UploadButton>
    <UploadButton type="resolved"></UploadButton>
    <UploadButton type="rejected"></UploadButton>
    <UploadButton type="disabled"></UploadButton>
  </React.StrictMode>
);

console.log(root);
