function main() {
const v4 = [13.37];
let v5 = v4;
let v8 = undefined;
v4[257] = 100;
const v10 = {get:v4};
const v12 = Object.values(v5,"for",v10);
const v14 = [13.37,"floor",parseInt,1337];
let v17 = "undefined";
const v18 = v17.charCodeAt(1337,v14);
}
%NeverOptimizeFunction(main);
main();
