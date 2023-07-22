import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';

// Create and configure the Cloudinary instance.
const CloudVideo = ({publicId, className}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'mvacoimbra',
    },
  });

  // Use the video with public ID'
  const myVideo = cld.video(publicId);

  // Apply the transformation.
  myVideo.resize(fill(1280, 720));

  // classes
  const classes = className;

  return (
    <div>
      <AdvancedVideo cldVid={myVideo} autoPlay muted loop className={classes} />
    </div>
  );
};

export default CloudVideo;
