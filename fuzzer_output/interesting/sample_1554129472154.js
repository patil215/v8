function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [13.37,v2,Boolean];
const v8 = [13.37,13.37];
const v9 = ["number",RegExp,v8];
const v11 = [1337,1337,1337];
const v13 = [13.37];
let v14 = v13;
function v15(v16,v17,v18,v19) {
    v17["for"] = -9007199254740992;
    const v21 = {trimRight:v15};
    const v23 = Object.defineProperty(v14,"for",v21);
    v17[2] = v13;
}
const v25 = v15(v9,v11,1337);
const v26 = v15(v3,v13,v25);
}
%NeverOptimizeFunction(main);
main();
