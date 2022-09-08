import { useState, useEffect, useRef } from "react";
//utils
import {
  defaultForeground,
  defaultBackground,
  defaultMousePosition,
  setup,
  loadImage,
  determineSize,
  resizeCanvas,
  draw,
  eraseScratchLine,
} from "../utils/scratch";

const useScratch = ({ width, height, background, foreground, onfinished }) => {
  const canvasReference = useRef(null);
  const [complete, setComplete] = useState(false);
  const [context, setContext] = useState(null);
  const [scratchContext, setScratchContext] = useState(null);
  const [foregroundData, setForeground] = useState(defaultForeground);
  const [backgroundData, setBackground] = useState(defaultBackground);
  const [displaySize, setDisplaySize] = useState(null);
  const [scratchPosition, setScratchPosition] = useState(defaultMousePosition);

  useEffect(() => {
    loadImage(foreground, setForeground);
  }, [foreground]);
  // Load images from props
  useEffect(() => {
    loadImage(background, setBackground);
  }, [background]);

  // Setup display canvas and scratch canvas
  useEffect(() => {
    setup(canvasReference.current, setContext, setScratchContext);
  }, [canvasReference, setContext, setScratchContext]);
  // Size canvas
  useEffect(() => {
    determineSize(
      backgroundData,
      foregroundData,
      width,
      height,
      setDisplaySize
    );
  }, [backgroundData, foregroundData, width, height, setDisplaySize]);

  useEffect(() => {
    resizeCanvas(context, scratchContext, displaySize);
  }, [context, scratchContext, displaySize]);
  // Scratch image after mouse move
  useEffect(() => {
    eraseScratchLine(
      context,
      scratchContext,
      scratchPosition,
      displaySize,
      complete,
      setComplete,
      backgroundData
    );
  }, [
    context,
    scratchContext,
    scratchPosition,
    displaySize,
    complete,
    setComplete,
  ]);
  // Perform initial draw to display canvas
  useEffect(() => {
    draw(context, scratchContext, backgroundData, foregroundData, displaySize);
  }, [
    context,
    scratchContext,
    backgroundData,
    foregroundData,
    displaySize,
    scratchPosition,
  ]);
  // Invoke callback when complete
  useEffect(() => {
    if (complete && onfinished && backgroundData?.image?.complete) {
      onfinished();
    }
  }, [complete]);

  return { canvasReference, scratchPosition, setScratchPosition };
};

export default useScratch;
