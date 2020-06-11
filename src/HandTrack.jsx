import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import * as handTrack from "handtrackjs";

const defaultModelOptions = {
  flipHorizontal: true,
  maxNumBoxes: 2,
  iouThreshold: 0.5,
  scoreThreshold: 0.6,
};

function HandTrack({
  onPositionChange = () => {},
  modelOptions = defaultModelOptions,
}) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const model = useRef(null);
  const [statusText, setStatusText] = useState("");
  const [isVideo, setIsVideo] = useState(false);

  useLayoutEffect(() => {
    contextRef.current = canvasRef.current.getContext("2d");
  }, []);

  function runDetection() {
    model.current.detect(videoRef.current).then((predictions) => {
      onPositionChange(predictions[0] && predictions[0].bbox);
      model.current.renderPredictions(
        predictions,
        canvasRef.current,
        contextRef.current,
        videoRef.current
      );
      if (isVideo) {
        requestAnimationFrame(runDetection);
      }
    });
  }

  function startVideo(videoRef) {
    handTrack.startVideo(videoRef).then(function (status) {
      console.log("video started", status);
      if (status) {
        setIsVideo(true);
      } else {
        setStatusText("Please enable video");
      }
    });
  }

  useEffect(() => {
    if (isVideo) {
      runDetection();
    }
  }, [isVideo]);

  useLayoutEffect(() => {
    startVideo(videoRef.current);
  }, []);

  useEffect(() => {
    handTrack.load(modelOptions).then((lmodel) => {
      model.current = lmodel;
    });
  });

  return (
    <div>
      <video ref={videoRef} style={{ display: "none" }} />
      <canvas ref={canvasRef} />
      <p>{statusText}</p>
    </div>
  );
}

export default HandTrack;
