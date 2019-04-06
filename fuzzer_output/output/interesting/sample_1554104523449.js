function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337];
const v7 = {unshift:v4,getUint8:this};
const v11 = [false,v7,v6,this];
}
%NeverOptimizeFunction(main);
main();
