function main() {
let v1 = -65535;
const v6 = [13.37,13.37,13.37,13.37];
const v8 = [1337,1337,Atomics];
const v9 = Atomics === v8;
let v10 = v1;
const v12 = [v6,null,v10];
}
%NeverOptimizeFunction(main);
main();
