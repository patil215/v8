function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [1337,v2,"getPrototypeOf"];
const v6 = {log2:"getPrototypeOf",pop:v5,MIN_SAFE_INTEGER:v5};
const v12 = new Uint8ClampedArray(62509);
const v13 = new Int32Array(v12,v4,NaN,v6,1337);
}
%NeverOptimizeFunction(main);
main();
