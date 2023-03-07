describe("compare two tables and bring out all the words in addition to the table compared to table 2", () => {
  test("should be true", () => {
    expect(true).toBeTruthy();
  });

  test("hugo solution split", () => {
    const span1Split = ["test1"];
    const span1Local = ["test1", "test2", "test3"];

    const wordsAdded1 = span1Local.filter(
      (word) => span1Split.indexOf(word) === -1
    );

    expect(wordsAdded1).toStrictEqual(["test2", "test3"]);
  });

  test("hugo solution includes", () => {
    const span1Split = ["test1"];
    const span1Local = ["test1", "test2", "test3"];

    const wordsAdded1 = span1Local.filter((word) => !span1Split.includes(word));

    expect(wordsAdded1).toStrictEqual(["test2", "test3"]);
  });

  test("arthur solution work", () => {
    const span1Split = ["test1"];
    const span1Local = ["test1", "test2", "test3"];

    const wordsAdded1 = sortWords(span1Local, span1Split);

    expect(wordsAdded1).toStrictEqual(["test2", "test3"]);
  });

  test("arthur solution work with reverse params", () => {
    const span1Split = ["test1"];
    const span1Local = ["test1", "test2", "test3"];

    const wordsAdded1 = sortWords(span1Split, span1Local);

    expect(wordsAdded1).toStrictEqual(["test2", "test3"]);
  });

  test("arthur solution work with doublons", () => {
    const span1Split = ["test"];
    const span1Local = ["test", "test", "test"];

    const wordsAdded1 = sortWords(span1Local, span1Split);

    expect(wordsAdded1).toStrictEqual(["test", "test"]);
  });
});

function sortWords(tab1, tab2) {
  let tab = [];
  let smallestArray = tab1;
  let biggestArray = tab2;

  if (tab1.length > tab2.length) {
    smallestArray = tab2;
    biggestArray = tab1;
  }

  for (let i = 0; i < biggestArray.length; i++) {
    if (biggestArray[i] !== smallestArray[i]) {
      tab.push(biggestArray[i]);
    }
  }

  return tab;
}
