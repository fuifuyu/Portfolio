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
    entering: "rotate-up-enter",
    exiting: "rotate-up-exit",
  },
  rotateDown: {
    entering: "rotate-down-enter",
    exiting: "rotate-down-exit",
  },
}

export const roomMap = {
  intro: {
    skill: "rotateRight",
    goal: "rotateUp",
    gallery: "rotateLeft",
  },
  skill: {
    timeline: "rotateRight",
    intro: "rotateLeft",
    goal: "rotateUp",
  },
  timeline: {
    skill: "rotateLeft",
    gallery: "rotateRight",
    goal: "rotateUp",
  },
  goal: {
    intro: "rotateDown",
    skill: "rotateDown",
    timeline: "rotateDown",
    gallery: "rotateDown",
  },
  gallery: {
    intro: "rotateRight",
    timeline: "rotateLeft",
    goal: "rotateUp",
  },
}
