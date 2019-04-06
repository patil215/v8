function main() {
const v5 = [1337,1337,1337,1337,1337];
const v6 = {catch:1337};
const v7 = {ignoreCase:"RSzQfadbcG",isExtensible:Atomics,__defineGetter__:v5,bind:13.37,ownKeys:v6,setInt8:857977632};
function v8(v9,v10,v11) {
    'use strict'
    const v13 = {get:v8};
    const v15 = Object.preventExtensions(v9,"defineProperty",v13);
    return v15;
}
const v16 = v8(Atomics,v7,"RSzQfadbcG");
for (const v17 in v16) {
}
}
%NeverOptimizeFunction(main);
main();
