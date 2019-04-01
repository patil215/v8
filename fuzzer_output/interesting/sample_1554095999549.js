function main() {
const v2 = [1337];
const v3 = {exec:v2};
with (v3) {
    exec = "undefined";
}
const v10 = {max:Function,setPrototypeOf:10};
const v12 = [13.37,13.37,13.37,v10];
}
%NeverOptimizeFunction(main);
main();
