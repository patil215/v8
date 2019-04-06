function main() {
const v4 = [13.37,13.37];
const v6 = ["number",RegExp,v4];
const v7 = {log1p:RegExp};
const v8 = {};
let v9 = 1337;
const v10 = 13.37 in v6;
const v11 = v9.hasOwnProperty(v10,v8,v6,Symbol,v7);
}
%NeverOptimizeFunction(main);
main();
