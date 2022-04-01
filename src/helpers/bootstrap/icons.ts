import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default (() => {
  const addIconsToLibrary = (): void => {
    library.add(faExclamationTriangle);
  };

  return {
    addIconsToLibrary,
  };
})();
