import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';

// Create and configure the Cloudinary instance.
const CloudVideo = (props) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'mvacoimbra',
    },
  });

  // props iD pass
  // const publicId = props.publicId;
  // Use the video with public ID'
  const myVideo = cld.video('synthfolio/synthvideo');

  // Apply the transformation.
  myVideo.resize(fill(1280, 720));

  // classes
  const classes = props.className;

  return (
    <div>
      <AdvancedVideo cldVid={myVideo} autoPlay muted loop className={classes} />
    </div>
  );
};

export default CloudVideo;
