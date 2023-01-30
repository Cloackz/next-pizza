import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = ({ className }) => (
  <ContentLoader
    className={className}
    speed={2}
    width={260}
    height={500}
    viewBox="0 0 260 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="279" rx="10" ry="10" width="260" height="23" />
    <rect x="0" y="336" rx="10" ry="10" width="260" height="75" />
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="427" rx="24" ry="24" width="140" height="45" />
  </ContentLoader>
);

export default Skeleton;
