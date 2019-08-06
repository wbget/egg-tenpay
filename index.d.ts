import 'egg';

declare module 'egg' {
  interface Application {
    tenpay: any;
  }
}
