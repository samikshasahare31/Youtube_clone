// import React from 'react';
// import moment from 'moment';

// const Videolength = ({ time }) => {
//   // Handle cases where time is not provided or invalid
//   if (!time) {
//     return <div className="text-gray-500 text-xs">Duration not available</div>;
//   }

//   try {
//     // Convert duration to seconds if it's provided as ISO 8601 duration format (e.g., "PT15M51S")
//     const durationInSeconds = moment.duration(time).asSeconds();

//     // Format the duration in seconds into a readable time format (HH:mm:ss)
//     const formattedDuration = moment.utc(durationInSeconds * 1000).format('H:mm:ss');

//     // Render the formatted duration inside a styled div
//     return (
//       <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
//         {formattedDuration}
//       </div>
//     );
//   } catch (error) {
//     console.error('Error formatting video duration:', error);
//     return <div className="text-gray-500 text-xs">Duration format error</div>;
//   }
// };

// export default Videolength;

import React from 'react';
import moment from 'moment';

const Videolength = ({ time }) => {
  // Handle cases where time is not provided or invalid
  if (!time || typeof time !== 'string') {
    return <div className="text-gray-500 text-xs">Duration not available</div>;
  }

  try {
    // Parse the ISO 8601 duration format (e.g., "PT15M51S") using moment.duration
    const duration = moment.duration(time);

    // Calculate total duration in seconds
    const durationInSeconds = duration.asSeconds();

    // Format the duration in seconds into a readable time format (HH:mm:ss)
    const formattedDuration = moment.utc(durationInSeconds * 1000).format('H:mm:ss');

    // Render the formatted duration inside a styled div
    return (
      <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
        {formattedDuration}
      </div>
    );
  } catch (error) {
    console.error('Error formatting video duration:', error);
    return <div className="text-gray-500 text-xs">Duration format error</div>;
  }
};

export default Videolength;
