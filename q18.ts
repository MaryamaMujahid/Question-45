let countriesTovisit: string[]= ["Canada", "Saudia Arabia", "Kashmire", "Turkey"];
console.log("orignal order",countriesTovisit);

console.log("alphatabatical order", [...countriesTovisit].sort());

console.log("still in orignal order", countriesTovisit);

console.log("riverse order", [...countriesTovisit].reverse());

console.log("still in orignal order", countriesTovisit);

console.log("orignal aarays reverse", countriesTovisit.reverse());

console.log("back to orignal order", countriesTovisit.reverse());

console.log("sorted in alphatabatical order", countriesTovisit.sort());

console.log("orignal aarays reverse again", countriesTovisit.reverse());