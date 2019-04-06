function main() {
const v4 = [13.37];
const v5 = {getInt32:Reflect,__proto__:v4,__lookupSetter__:-9007199254740993,fromCharCode:1337,cos:Reflect};
const v8 = [];
const v9 = {keyFor:"undefined",race:1337,trimEnd:1337,stackTraceLimit:1337,ignoreCase:v8,acosh:v8};
function v10(v11,v12,v13,v14) {
}
function v15(v16,v17,v18,v19) {
    const v20 = v16.concat(v17,v17,v18);
}
const v22 = new Proxy(v5,v10);
const v23 = v5[v9];
const v24 = v15(v22,v10,v15,v10,v23);
}
%NeverOptimizeFunction(main);
main();
