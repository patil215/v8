function main() {
const v2 = [1337,1337,1337,1337];
let v3 = 13.37;
const v5 = [13.37,13.37];
const v7 = [1337];
const v8 = {PI:1337,hypot:v7,trimStart:v5};
const v9 = {setPrototypeOf:v3,apply:v8,deleteProperty:v3,ownKeys:v2};
const v11 = new Proxy(v7,v9);
let v14 = 4095044242;
const v18 = v11.__proto__;
}
%NeverOptimizeFunction(main);
main();
