function main() {
this.valueOf = this;
const v2 = typeof 2468829855;
const v4 = v2 === "boolean";
let v7 = 0;
const v8 = v7 + 1;
v7 = v8;
function v10(v11,v12,v13) {
}
let v15 = 5;
const v16 = {set:v10,get:v10};
const v17 = v16 + 1;
v15 = v17;
}
%NeverOptimizeFunction(main);
main();
