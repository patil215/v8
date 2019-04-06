function main() {
Number[-256] = "boolean";
let v3 = Number;
const v4 = {is:"boolean",toFixed:Number,message:v3,endsWith:"boolean",..."boolean",...Number,...v3,...-256,...Number};
let v18 = 0;
let v21 = 0;
const v22 = v21 + 1;
v21 = v22;
const v23 = v18 + 1;
v18 = v23;
}
%NeverOptimizeFunction(main);
main();
