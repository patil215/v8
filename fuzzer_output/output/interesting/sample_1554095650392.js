function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = {max:Function,setPrototypeOf:10};
const v13 = {max:Function,setPrototypeOf:10};
const v18 = {max:Function,setPrototypeOf:10};
const v27 = v6.unshift;
const v31 = [13.37,13.37,13.37,v18];
if (v31) {
} else {
    v27.length = 10;
}
v4.__proto__ = v13;
}
%NeverOptimizeFunction(main);
main();
