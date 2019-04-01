function main() {
const v2 = {max:Function,setPrototypeOf:10};
let v3 = v2;
let v7 = 0;
const v8 = [13.37,13.37,13.37,13.37];
let v11 = 0;
do {
    v3.__proto__ = v8;
    const v12 = v11 + 1;
    v11 = v12;
} while (v11 < 4);
}
%NeverOptimizeFunction(main);
main();
