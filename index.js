/* BREAKING CHOCOLATE SOLUTION*/

function breakChocolate(n, m) {
  const product = n * m;
  return product > 0 ? product - 1 : 0;
}

OR


function breakChocolate(n, m) {
  const product = n * m;
  if (product > 0) {
    return product - 1;
} else {
    return 0;
}
}








