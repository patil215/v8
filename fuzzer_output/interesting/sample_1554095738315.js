function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [v6];
const v8 = {max:Function,setPrototypeOf:10};
const v9 = {exec:v6};
let v10 = "undefined";
Function["undefined"] = 1337;
function v12(v13,v14,v15,v16) {
    let v19 = 0;
    while (v19 < 4) {
        v16.__proto__ = Function;
        const v20 = v19 + 1;
        v19 = v20;
    }
    return 1337;
}
const v22 = 1337 > 10;
const v24 = [Function];
const v27 = v12(v7,13.37,13.37,"undefined",1337,v4);
}
%NeverOptimizeFunction(main);
main();
