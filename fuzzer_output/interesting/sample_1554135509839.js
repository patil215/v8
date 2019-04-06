function main() {
const v3 = {get:3647412246,isExtensible:"toString"};
const v5 = new Proxy(Function,v3);
const v11 = [1337];
let v16 = undefined;
const v17 = {...v5};
}
%NeverOptimizeFunction(main);
main();
