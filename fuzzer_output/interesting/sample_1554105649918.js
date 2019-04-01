function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [1337,String];
const v10 = {max:Function,setPrototypeOf:1};
for (let v14 = 0; v14 < 7; v14++) {
    v10.lastIndexOf = v14;
}
const v15 = {all:String,log10:String,ownKeys:v4,max:v6};
const v16 = {source:v7,includes:"number",ownKeys:v15,multiline:13.37,bind:v4};
let v17 = v4;
for (let v21 = 0; v21 < 5; v21++) {
    const v23 = {};
    const v25 = new Proxy(Array,v23);
    function v27(v28,v29,v30,v31) {
        for (const v33 in Function) {
            const v34 = [];
        }
    }
    const v40 = [1337];
    for (let v44 = 0; v44 < 100; v44++) {
        const v45 = v27(10,Function,1337,v40,Function);
    }
}
}
%NeverOptimizeFunction(main);
main();
