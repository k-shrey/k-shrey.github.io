declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
// declare module "*.svg";
declare module "*.gif";

// declare module "*.svg" {
//     declare module '*.svg' {
//   const content: React.ElementType<React.ComponentPropsWithRef<'svg'>>;
//   export default content;
// }
//   }

declare module '*.svg' {
    const content: React.ElementType<React.ComponentPropsWithRef<'svg'>>;
    export default content;
  }