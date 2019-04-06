function main() {
const v3 = [1337];
const v4 = [];
const v5 = {length:v4,getFloat64:v4,toLocaleString:Error,of:v3};
let v6 = 13.37;
with (v6) {
    const v10 = toLocaleString(v5,0,4);
}
}
%NeverOptimizeFunction(main);
main();
