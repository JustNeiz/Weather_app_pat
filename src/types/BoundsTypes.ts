type Bounds = {
  latMin: number;
  lonMin: number;
  latMax: number;
  lonMax: number;
};

type Transform = {
  k: number; // scale
  x: number; // translation in x
  y: number; // translation in y
};
export type { Bounds, Transform };