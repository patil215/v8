function main() {
const v2 = [13.37];
const v4 = {get:RegExp};
const v6 = Object.defineProperty(v2,"flatMap",v4);
const v7 = {};
let v8 = v7;
const v13 = [1337];
for (let v17 = 0; v17 < 100; v17++) {
    const v20 = Object(0,v6,0,857977632);
    v13.__proto__ = v20;
}
}
%NeverOptimizeFunction(main);
main();
