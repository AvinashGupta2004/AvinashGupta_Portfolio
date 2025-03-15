new FinisherHeader({
  count: 3,
  size: {
    min: 1028,
    max: 1500,
    pulse: 0.2,
  },
  speed: {
    x: {
      min: 0.6,
      max: 3,
    },
    y: {
      min: 0.6,
      max: 3,
    },
  },
  colors: {
    background: "#ffffff",
    particles: ["#99ccff"],
  },
  blending: "screen",
  opacity: {
    center: 0.65,
    edge: 0,
  },
  skew: 0,
  shapes: ["c"],
});
