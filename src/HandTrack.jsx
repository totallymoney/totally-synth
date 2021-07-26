import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import * as handTrack from 'handtrackjs'

const defaultModelOptions = {
  flipHorizontal: true,
  maxNumBoxes: 1,
  iouThreshold: 0.5,
  scoreThreshold: 0.6,
}

function HandTrack({
  onPositionChange = () => {},
  modelOptions = defaultModelOptions,
  shouldRenderPredictions = false,
}) {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const model = useRef(null)
  const [statusText, setStatusText] = useState('')
  const [isVideo, setIsVideo] = useState(false)

  useLayoutEffect(() => {
    contextRef.current = canvasRef.current.getContext('2d')
  }, [])

  function runDetection() {
    if (videoRef.current) {
      model.current.detect(videoRef.current).then((predictions) => {
        onPositionChange(predictions[0] && predictions[0].bbox)
        shouldRenderPredictions &&
          model.current.renderPredictions(
            predictions,
            canvasRef.current,
            contextRef.current,
            videoRef.current
          )
        requestAnimationFrame(runDetection)
      })
    }
  }

  function startVideo(videoRef) {
    handTrack.startVideo(videoRef).then(function (status) {
      console.log('video started', status)
      if (status) {
        setIsVideo(true)
      } else {
        setStatusText('Please enable video')
      }
    })
  }

  useEffect(() => {
    if (isVideo) {
      runDetection()
    }
  }, [isVideo])

  useEffect(() => {
    startVideo(videoRef.current)
  }, [videoRef.current])

  useEffect(() => {
    handTrack.load(modelOptions).then((lmodel) => {
      model.current = lmodel
    })
  }, [model.current])

  return (
    <div style={{ padding: '10px', backgroundColor: '#7c909c' }}>
      <video
        ref={videoRef}
        width="160"
        height="120"
        style={{
          display: shouldRenderPredictions ? 'none' : 'block',
        }}
      />
      <canvas
        width="160"
        height="120"
        style={{ display: shouldRenderPredictions ? 'block' : 'none' }}
        ref={canvasRef}
      />
      <p>{statusText}</p>
    </div>
  )
}

export default HandTrack
