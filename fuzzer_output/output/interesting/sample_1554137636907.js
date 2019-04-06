function main() {
const v7 = {get:3647412246,isExtensible:"toString"};
const v9 = new Proxy(SharedArrayBuffer,v7);
const v10 = {...v9};
}
%NeverOptimizeFunction(main);
main();
