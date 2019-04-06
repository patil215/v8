function main() {
let v4 = parseInt;
let v5 = 13.37;
const v8 = new BigUint64Array(1337,BigUint64Array,v5,v5,0);
let v9 = "object";
const v10 = v8.lastIndexOf(v9,"object",v4,parseInt);
}
%NeverOptimizeFunction(main);
main();
