import React from 'react';

const BlogArchive = () => {
  const archiveMonths = [
    'June 2025', 'March 2025', 'February 2025', 'January 2025',
    'December 2024', 'November 2024', 'October 2024', 'September 2024',
    'August 2024', 'July 2024', 'June 2024', 'May 2024',
    'April 2024', 'March 2024', 'February 2024', 'January 2024',
    'December 2023', 'November 2023', 'October 2023', 'September 2023',
    'August 2023', 'July 2023', 'June 2023', 'May 2023',
    'April 2023', 'March 2023', 'February 2023', 'January 2023',
    'December 2022', 'November 2022', 'October 2022', 'September 2022',
    'July 2022', 'January 2022'
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Archive</h3>
      <div className="space-y-3">
        {archiveMonths.map((month, index) => (
          <div key={index}>
            <button className="text-gray-600 hover:text-blue-500 transition-colors text-sm">
              {month}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogArchive;