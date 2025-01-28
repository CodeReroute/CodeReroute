// Floating animation for team members
export const floatingAnimation = () => ({
  initial: { y: 0, x: 0 },
  animate: {
    y: [0, -15, 0, -8, 0],
    x: [-8, 5, -3, 8, -8],
    transition: {
      // Increased duration for slower movement
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
      // repeatType: 'mirror',
      // Random delay for each avatar to create asynchronous movement
      delay: Math.random() * 2,
      // Custom times array for more organic movement
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
});
