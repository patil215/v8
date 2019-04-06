function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [13.37,3760296089];
const v8 = {cbrt:13.37,getUint32:v4,set:3760296089,delete:v7,a:"isSealed",is:v7,isConcatSpreadable:13.37,freeze:v7,exp:gc};
const v9 = {hasOwnProperty:v7,__lookupSetter__:v6};
for (let v14 = 0; v14 < 3; v14 = v14 + "undefined") {
    const v15 = 3647412246 + v14;
}
let v16 = gc;
const v18 = [13.37,13.37,13.37];
const v20 = (13.37).__proto__;
v20[-65537] = 13.37;
const v24 = [1337];
for (let v30 = 0; v30 != 1337; v30++) {
    let v31 = v30;
    let v32 = v24;
    v32[v31] = v30;
    const v34 = [13.37,13.37,13.37,13.37];
    const v36 = gc(v34);
    const v37 = v24.shift(Function,1337,-3176458122,v24);
}
(13.37).fill = 0;
let v40 = v20;
while (v40 < 5) {
    let v41 = 5;
    const v42 = v40 + 1;
    v40 = v42;
}
}
%NeverOptimizeFunction(main);
main();
