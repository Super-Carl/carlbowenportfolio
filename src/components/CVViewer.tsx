import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface CVViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVViewer = ({ isOpen, onClose }: CVViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    const link = document.createElement('a');
    link.href = '/resources/docs/cv.pdf';
    link.download = `Carl Bowen, CV (${month} ${year}).pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyLink = () => {
    const url = `${window.location.origin}/resources/docs/cv.pdf`;
    navigator.clipboard.writeText(url).then(() => {
      // You could add a toast notification here
      alert('CV link copied to clipboard!');
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4'
      role='dialog'
      aria-modal='true'
      aria-labelledby='cv-viewer-title'
    >
      <div className='bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b'>
          <h2 id='cv-viewer-title' className='text-2xl font-bold text-gray-900'>
            Carl Bowen's Resume
          </h2>
          <div className='flex gap-2'>
            <button
              onClick={copyLink}
              className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
              aria-label='Copy CV link to clipboard'
            >
              Copy Link
            </button>
            <button
              onClick={handleDownload}
              className='px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
              aria-label='Download CV as PDF'
            >
              Download PDF
            </button>
            <button
              onClick={onClose}
              className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
              aria-label='Close CV viewer'
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className='flex-1 overflow-hidden'>
          {isLoading && (
            <div className='flex items-center justify-center h-full'>
              <LoadingSpinner size='lg' />
            </div>
          )}
          <iframe
            src='/resources/docs/cv.pdf#toolbar=1&navpanes=0&scrollbar=1'
            className='w-full h-full border-0'
            title="Carl Bowen's Resume"
            onLoad={() => setIsLoading(false)}
            style={{ minHeight: '600px' }}
          />
        </div>

        {/* Footer */}
        <div className='p-4 bg-gray-50 border-t text-center text-sm text-gray-600'>
          <p>
            Press{' '}
            <kbd className='px-2 py-1 bg-gray-200 rounded text-xs'>Esc</kbd> to
            close
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVViewer;
