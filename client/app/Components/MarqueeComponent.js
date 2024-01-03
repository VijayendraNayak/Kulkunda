// MarqueeComponent.js

import { useEffect } from 'react';

const MarqueeComponent = () => {
  useEffect(() => {
    // Ensure that the script runs after the component has mounted
    if (typeof window !== 'undefined') {
      // Check if we are in the browser environment
      const $ = require('jquery');
      $('#maindiv').width($('#div1').width());
    }
  }, []);

  return (
    <div id="maindiv">
      <div className="marquee-content">
        <a href="your-link-url">
          &nbsp;Test-1 Test-2 Test-3 Test-4 Test-5 Test-6 Test-7 Test-8 Test-9 Test-10 Test-11
        </a>
      </div>
      <div className="marquee-content">
        <a href="your-second-link-url">
          &nbsp;Test-1 Test-2 Test-3 Test-4 Test-5 Test-6 Test-7 Test-8 Test-9 Test-10 Test-11
        </a>
      </div>
      <style jsx>{`
        #maindiv {
          overflow: hidden;
          height: 100px; /* Set the desired height */
        }

        .marquee-content {
          display: block;
          animation-duration: 15s;
          animation-iteration-count: infinite;
          animation-name: marquee;
        }

        @keyframes marquee {
          from {
            transform: translateY(500%);
          }
          to {
            transform: translateY(-500%);
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeComponent;
