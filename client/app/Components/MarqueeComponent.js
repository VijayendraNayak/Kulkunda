// MarqueeComponent.js

import { useEffect } from 'react';
import Link from 'next/link';

const MarqueeComponent = () => {
  useEffect(() => {
    // Ensure that the script runs after the component has mounted
    if (typeof window !== 'undefined') {
      // Check if we are in the browser environment
      const $ = require('jquery');
      const mainDiv = $('#maindiv');
      const links = $('.marquee-content a');

      mainDiv.width($('#div1').width());

      // Add hover event handlers to pause and resume links
      links.on('mouseenter', () => {
        links.css('animation-play-state', 'paused');
      });

      links.on('mouseleave', () => {
        links.css('animation-play-state', 'running');
      });
    }
  }, []);

  return (
    <div id="maindiv" className="overflow-hidden h-20 md:h-32 lg:h-40">
        <div id="div1" className="marquee-content">
            <Link href="/Pages/News">
                <p className="text-black-500 cursor-pointer hover:scale-100 hover:underline">
                Seva and Darshana
              </p>
            </Link>
        </div>
        <div id="div2" className="marquee-content">
            <Link href="/Pages/News">
                <p className="text-black-500 cursor-pointer hover:scale-100 hover:underline">
                   New User?
                </p>
            </Link>
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
            transform: translateY(300%);
          }
          to {
            transform: translateY(-300%);
          }
        }

        .marquee-content a {
          color: inherit; /* Use the default link color */
          text-decoration: none; /* Remove default underline */
        }

        .marquee-content:hover a {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MarqueeComponent;
