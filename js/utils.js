const ALERT_SHOW_TIME = 5000;

const dataErrorTemplate = document.querySelector('#data-error').content;

const showAlert = () => {
  const dataErrorElement = dataErrorTemplate.cloneNode(true);
  document.body.append(dataErrorElement);

  setTimeout (() => {
    dataErrorElement.remove();
  }, ALERT_SHOW_TIME);
};

export {showAlert};
