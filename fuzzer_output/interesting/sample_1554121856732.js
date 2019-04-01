function main() {
const v3 = {max:Function,setPrototypeOf:10};
const v8 = [13.37,13.37,13.37,13.37];
const v11 = {max:Function,setPrototypeOf:10};
v11.__proto__ = v8;
v11.length = 281213553;
}
%NeverOptimizeFunction(main);
main();
