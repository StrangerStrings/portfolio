import React from 'react';

 const icons = {
  html: ' M 13.703 12.776 L 37.72 12.783 L 37.295 17.577 L 19.05 17.608 L 19.389 22.53 L 36.786 22.488 L 35.513 37.211 L 25.754 39.927 L 15.91 37.296 L 15.231 29.732 L 19.898 29.709 L 20.238 33.562 L 25.669 35.005 L 31.1 33.562 L 31.609 27.231 L 14.976 27.254 L 13.703 12.776 Z '
};

 const Icon = ({ name }) => {
   
   if (!(name in icons)) {
     console.warn(`Unable to find icon with the name '${name}'`);
     return null;
   }

   return (
     <svg viewBox=''>
       <path d={icons[name]}></path>
     </svg>
   );
 };

 export default Icon; 