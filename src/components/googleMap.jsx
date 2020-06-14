import React from 'react';

const GoogleMap = ({ src }) => (
  <div id="Kako do nas?" className="my-8 overflow-hidden">
    <iframe
      src={src}
      height="450"
      frameBorder="0"
      className="w-full"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      title="Hogar location"
    />
  </div>
)

export default GoogleMap;