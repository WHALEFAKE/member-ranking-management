import React from 'react';

const EventCard = ({ title, description, dateLabel, img, reverse, linkText = 'View more details', linkUrl, imgClass, imgStyle }) => {
  return (
    <div className={`w-[calc(100%-80px*2)] max-w-[1500px] mx-auto my-8`}>
      <div className={`flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden p-4 md:p-6 gap-6 ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={`w-full md:w-1/2 ${reverse ? '-mx-4 md:-mr-6 md:rounded-r-xl' : '-mx-4 md:-ml-6 md:rounded-l-xl'}`}>
            <div className={`overflow-hidden ${reverse ? 'rounded-r-xl' : 'rounded-l-xl'}`}>
            <img
              src={img}
              alt={title}
              className={imgClass ? imgClass : 'w-full h-[300px] object-cover md:h-[360px]'}
              style={imgStyle}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-4xl md:text-6xl font-extrabold mb-4">{title}</h3>
          <p className="text-lg md:text-2xl text-gray-700 mb-6 leading-relaxed md:leading-loose">{description}</p>

          <div className="flex items-center justify-between">
            {linkUrl ? (
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-800 text-sm md:text-base flex items-center gap-2 rounded-md hover:shadow-sm inline-flex"
              >
                <span>{linkText}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3H21V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21H3V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ) : (
              <button className="px-4 py-2 border border-gray-800 text-sm md:text-base flex items-center gap-2 rounded-md hover:shadow-sm">
                <span>{linkText}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3H21V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21H3V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            <div className="text-xs md:text-sm font-semibold text-gray-800">{dateLabel}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
