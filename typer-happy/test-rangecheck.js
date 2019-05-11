// Sanity piece of code that can be used to test artificially injected range analysis errors related to addition

function opt_me(b) {
    let x = b % 5;
    let y = b % 8;
    return x + y;
  }

for (var i = 0; i < 1000; i++) {
  opt_me(i);
}
