export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
    },
  },
};

export const cardReveal = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
    },
  },
};