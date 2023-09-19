// 4
function mostCharracter(text) {
    const string = text.toLowerCase().split("").sort();
    console.log(string)
    let counter = {};
    let penampung = [];

    for (let x of string) {
        if (x in counter) {
          counter[x] += 1;
        } else {
          counter[x] = 1;
        }
      }
    for (let x in counter) {
      penampung.push(counter[x]);
      penampung.sort((a, b) => a - b);
    }
    let theMost = penampung[penampung.length - 1];
    for (let x in counter) {
      if (counter[x] === theMost) {
        return x;
      }
    }
}