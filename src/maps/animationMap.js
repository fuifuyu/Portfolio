export const animPresetMap = {
  rotateLeft: {
    entering: "rotate-left-enter",
    exiting: "rotate-left-exit",
  },
  rotateRight: {
    entering: "rotate-right-enter",
    exiting: "rotate-right-exit",
  },
  rotateUp: {
    entering: "rotate-Up-enter",
    exiting: "rotate-Up-exit",
  },
  rotateDown: {
    entering: "rotate-down-enter",
    exiting: "rotate-down-exit",
  },
}

export const roomMap = {
  "/": {
    "/about": "rotateLeft",
  },
  "/about": {
    "/": "rotateRight",
  },
}
