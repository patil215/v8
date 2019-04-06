function main() {
const v2 = [1337,1337,1337];
for (let v6 = 0; v6 < 6; v6++) {
    const v8 = {deleteProperty:v6,setPrototypeOf:1337,getOwnPropertyDescriptor:1337,ownKeys:v6,preventExtension:"number",set:"number"};
    const v10 = new Proxy(v2,v8);
    const v11 = (1337)[v10];
}
}
%NeverOptimizeFunction(main);
main();
