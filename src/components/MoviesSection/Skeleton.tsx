import React, { FC } from "react";
import ContentLoader from "react-content-loader";

const Skeleton: FC = () => (
  <ContentLoader
    speed={3}
    width="250px"
    height="100%"
    viewBox="0 0 240 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="240" height="360" />
    <rect x="0" y="390" rx="10" ry="10" width="240" height="20" />
    <rect x="0" y="415" rx="10" ry="10" width="240" height="25" />
  </ContentLoader>
);

export default Skeleton;
