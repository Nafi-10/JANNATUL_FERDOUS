const BIO_DATA_FILENAME = 'Jannatul-Ferdous-Bio-Data.pdf';

export const downloadBioData = () => {
  const downloadLink = document.createElement('a');
  downloadLink.href = `/${BIO_DATA_FILENAME}`;
  downloadLink.download = BIO_DATA_FILENAME;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
};
