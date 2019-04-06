function main() {
const v4 = [1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
const v6 = [1337,1337,1337];
const v7 = ["undefined",v6,1337,WeakMap];
const v8 = {getUint8:v7,fill:v4,input:-4294967295,test:WeakMap,getInt8:-4294967295,pow:v4,some:"undefined",min:"undefined"};
const v9 = {isExtensible:-4294967295,acosh:"undefined",setInt8:1.7976931348623157e+308,getInt32:-4294967295,every:WeakMap,pow:1.7976931348623157e+308,filter:v8,propertyIsEnumerable:1.7976931348623157e+308,some:1337};
let v10 = 1.7976931348623157e+308;
v7[426653051] = v9;
let v13 = 0;
let v16 = 0;
const v17 = v13 + 1;
v13 = v17;
for (let v21 = 0; v21 < 100; v21++) {
    v7.length = 2;
    for (const v23 in v7) {
    }
}
}
%NeverOptimizeFunction(main);
main();
