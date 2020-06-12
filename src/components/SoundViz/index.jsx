import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

const SoundBox = styled.div`
  height: 300px;
  width:100%;
`

const Sound = () => {

  const chartBox = useRef();


  const setChart = (audioElement) => {

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioSrc = audioCtx.createMediaStreamSource(audioElement);
    const analyser = audioCtx.createAnalyser();

    // bind analyser to the media element source.
    audioSrc.connect(analyser);
    audioSrc.connect(audioCtx.destination);

    const bufferSize = analyser.frequencyBinCount
    //console.log(bufferSize);
    
    // const frequencyData = new Uint8Array(200);
    const frequencyData = new Uint8Array(bufferSize);

    analyser.getByteFrequencyData(frequencyData);
    const h = 300;
    const w = chartBox.current.clientWidth-10;
    
    const colorScale =  d3
    .scaleSequential()
    .domain([150, 1])
    .interpolator(d3.interpolateViridis);
    
    const circleX = d3.scaleLinear()
      .domain([0, frequencyData.length])
      .range([0, w]);
    
    const svg = d3.select(chartBox.current).append('svg')
      .attr('width', w)
      .attr('height', h);
    
    const dots = svg.selectAll('circle')
      .data(frequencyData)
      .enter().append('circle')
      .attr('r', function(d) { return w/frequencyData.length/2 +.3; })
      .attr('cx', function(d, i) { return circleX(i); })
      .attr('cy', function(d) { return h/2 - d; })
      .attr('fill', function(d, i) { return colorScale(d); });
    
    function drawChart() {
    
      requestAnimationFrame(drawChart);
      
      analyser.getByteFrequencyData(frequencyData);
      
      svg.selectAll('circle')
        .data(frequencyData)
        .attr('cy', function(d) { return h/2 - d; })
        .attr('fill', function(d, i) { return colorScale(d); });

    };
    
    drawChart();
  }
  

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
        setChart(stream);
      }, (error) => {
        console.error(error)
    });
  }, []);

  return (
    <SoundBox>
      <div ref={chartBox}></div>
    </SoundBox>
  )
}

export default Sound