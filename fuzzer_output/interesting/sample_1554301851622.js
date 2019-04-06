function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = ["number",13.37,"number",Math];
const v7 = {shift:v6,toFixed:1337,getOwnPropertyDescriptors:1337,atan2:v3,SQRT1_2:1337,splice:v5,setUint32:Math};
const v9 = [1337];
v9.__proto__ = v7;
const v11 = new Float64Array(v9);
let v16 = 0;
const v17 = v16 + 1;
v16 = v17;
}
%NeverOptimizeFunction(main);
main();
