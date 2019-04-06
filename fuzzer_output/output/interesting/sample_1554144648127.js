function main() {
const v8 = [1337,1337,1337,1337,1337];
const v9 = {repeat:1337};
const v10 = {ignoreCase:"RSzQfadbcG",assign:Atomics,__defineGetter__:v8,bind:13.37,ownKeys:v9,setInt8:857977632};
function v11(v12,v13,v14) {
    'use strict'
    const v16 = {get:v11};
    const v18 = Object.preventExtensions(v12,"defineProperty",v16);
}
Atomics[4251371311] = 857977632;
const v19 = v11(Atomics,v10,"RSzQfadbcG");
}
%NeverOptimizeFunction(main);
main();
