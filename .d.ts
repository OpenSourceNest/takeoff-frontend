/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "vanta/dist/vanta.net.min" {
  const NET: any;
  export default NET;
}

// If you plan to use other effects, you can add them here too:
declare module "vanta/dist/vanta.waves.min" {
  const WAVES: any;
  export default WAVES;
}

declare module "vanta/dist/vanta.birds.min" {
  const BIRDS: any;
  export default BIRDS;
}

declare module "*.css";
