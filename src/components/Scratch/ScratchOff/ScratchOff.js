//hooks
import useScratch from "../../../hooks/useScratch";
//uitls
import {
  SCRATCH_BACKGROUND_DEFAULT,
  SCRATCH_FOREGROUND_DEFAULT,
  handleMouseMove,
  handleTouchMove,
} from "../../../utils/scratch";
//styles
import "./scratchOff.scss";

//-- React Component (render function) -----------
export default function ScratchOff({
  width,
  height,
  background,
  foreground,
  onfinished,
}) {
  if (background === undefined) {
    background = SCRATCH_BACKGROUND_DEFAULT;
  }
  if (foreground === undefined) {
    foreground = SCRATCH_FOREGROUND_DEFAULT;
  }
  const { canvasReference, scratchPosition, setScratchPosition } = useScratch({
    width,
    height,
    background,
    foreground,
    onfinished,
  });
  return (
    <canvas
      ref={canvasReference}
      className="canvas-style"
      onMouseMove={(eventMouse) => {
        handleMouseMove(eventMouse, scratchPosition, setScratchPosition);
      }}
      onTouchMove={(eventTouch) => {
        handleTouchMove(eventTouch, scratchPosition, setScratchPosition);
      }}
    />
  );
}
