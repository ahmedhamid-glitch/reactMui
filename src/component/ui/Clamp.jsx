const clamp = (min, max) => (i) => i <= min ? min : i >= max ? max : i;

export { clamp };
