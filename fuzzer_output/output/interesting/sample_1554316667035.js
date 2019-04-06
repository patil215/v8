function main() {
const v2 = Symbol.search;
v2[v2] = Symbol;
for (const v3 in v2) {
}
const v8 = [13.37,13.37];
const v10 = [1337,1337,1337,1337,1337];
const v11 = [1337];
const v12 = {hypot:v8,dotAll:1337,getInt32:v11,isExtensible:1337,leftContext:v11,deleteProperty:v10,padStart:v11};
const v13 = {cbrt:2236674423,find:v11,test:v12,toLocaleUpperCase:v11,trimRight:"object",E:13.37,deleteProperty:v8,unscopables:"object",lastMatch:13.37};
const v14 = 13.37 + v8;
for (let v18 = 0; v18 < 7; v18++) {
    v18[Atomics] = 1337;
}
let v19 = 2236674423;
const v21 = [207489508];
const v23 = [v21];
const v24 = {};
const v26 = v11.entries(Atomics,v10,v21,v24,1337);
const v27 = new BigUint64Array(v23,v24);
for (const v28 of v27) {
    const v29 = v28 << v28;
    const v30 = v29 % v29;
}
}
%NeverOptimizeFunction(main);
main();
