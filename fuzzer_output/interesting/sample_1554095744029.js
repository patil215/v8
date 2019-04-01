function main() {
const v3 = {max:Function,setPrototypeOf:"undefined"};
let v4 = "undefined";
let v8 = 0;
v8 = 10;
for (const v9 in v4) {
}
delete v3[9007199254740992];
}
%NeverOptimizeFunction(main);
main();
