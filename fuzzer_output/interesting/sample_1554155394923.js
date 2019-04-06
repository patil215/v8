function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [];
const v8 = {};
const v9 = {call:v6,iterator:Function,seal:"undefined",indexOf:v7,trimRight:Function};
let v10 = v4;
const v12 = [v4,13.37,13.37];
const v14 = [];
const v15 = {iterator:1337,getUint8:v12,reverse:v14};
const v16 = Function("undefined","undefined",v14,v7);
const v22 = [1337,1337,1337,1337,1337];
let v23 = v22;
const v25 = [13.37,13.37,13.37,13.37];
v25.__proto__ = v15;
const v29 = new gc(v25);
}
%NeverOptimizeFunction(main);
main();
