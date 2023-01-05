import { useState } from "react";
import Spinner from "../spinner/spinner";


const Image = ({ src, alt, width, height }) => {
  const [imageReady, setImageReady] = useState(false);
  
  return (
    <div style={{position: "relative"}}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={imageReady ? height : width}
        onLoad={() => setImageReady(true)}
        style={{visibility: imageReady ? "visible" : "hidden"}}
      />
      <div style={{ width: width, height: width, visibility: imageReady ? "hidden" : "visible", position: "absolute", top: "0", bottom: {width}}}
      className="d-flex justify-content-center align-items-center">
        <Spinner />
      </div>
    </div>
  );
};

export default Image;
