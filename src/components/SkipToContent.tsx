const SkipToContent = () => {
  const handleSkip = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <a
      href='#main-content'
      onClick={e => {
        e.preventDefault();
        handleSkip();
      }}
      className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
