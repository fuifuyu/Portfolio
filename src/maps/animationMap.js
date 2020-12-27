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
    timeline: "rotateRight",
    goal: "rotateUp",
    gallery: "rotateRight",
  },
  skill: {
    intro: "rotateLeft",
    timeline: "rotateRight",
    goal: "rotateUp",
    gallery: "rotateRight",
  },
  timeline: {
    intro: "rotateLeft",
    skill: "rotateLeft",
    goal: "rotateUp",
    gallery: "rotateRight",
  },
  goal: {
    intro: "rotateDown",
    skill: "rotateDown",
    timeline: "rotateDown",
    gallery: "rotateDown",
  },
  gallery: {
    intro: "rotateLeft",
    skill: "rotateLeft",
    timeline: "rotateLeft",
    goal: "rotateUp",
  },
}
