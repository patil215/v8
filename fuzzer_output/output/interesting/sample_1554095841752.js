function main() {
const v2 = {max:Function,setPrototypeOf:10};
let v5 = 0;
let v8 = 0;
do {
    const v9 = v2 + 1;
    v8 = v9;
} while (v8 < 4);
}
%NeverOptimizeFunction(main);
main();
