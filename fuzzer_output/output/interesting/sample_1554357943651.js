function main() {
const v1 = [1337];
const v5 = [1337,1337];
const v6 = [v5,1337];
const v7 = {setFloat32:v6,toFixed:13.37,trimStart:1337,raw:"acosh"};
const v10 = Symbol.isConcatSpreadable;
const v12 = [1337];
const v16 = Symbol.keyFor(v10,v1,v7,420646669);
let v25 = 0;
}
%NeverOptimizeFunction(main);
main();
