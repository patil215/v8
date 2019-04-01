function main() {
const v6 = [1337];
const v7 = {max:Function,setPrototypeOf:10};
const v8 = {exec:v6};
const v11 = Function && 13.37;
const v15 = [1337];
function v16(v17,v18,v19,v20) {
    return arguments;
}
const v21 = v16(v8,v11,v11,v7,1337);
v21[1] = v15;
}
%NeverOptimizeFunction(main);
main();
