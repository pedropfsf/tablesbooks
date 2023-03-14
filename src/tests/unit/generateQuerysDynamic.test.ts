import Request from "../../utils/Request";

describe("generateQuerysDynamic", () => {
  // SET
  const props = {
    q: "Terror",
  };
  let querys = "";
  const matrixProps = Object.entries(props);
  const resultExpect = "?q=Terror";

  // ACT
  for(const index in matrixProps) {
    const [key, value] = matrixProps[index];

    querys += Request.applyQuery({
      key,
      value,
      flag: Number(index) === 0 ? "?" : "&"
    })
  }
  
  it ("testing whether it will return the query in the correct format", () => {
    // ASSERT
    expect(querys).toStrictEqual(resultExpect);
  });

});

export default 0;