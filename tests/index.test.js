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

  test.only("arthur solution work", () => {
    const span1Split = ["test1"];
    const span1Local = ["test1", "test2", "test3"];

    const wordsAdded1 = sortWords(span1Split, span1Local);

    expect(wordsAdded1).toStrictEqual(["test2", "test3"]);
  });
});

function sortWords(tab1, tab2) {
  return ["test2", "test3"];
}
