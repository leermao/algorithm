import restoreIpAddresses from "../../code/recur/lesson1.js";

test("复原IP地址", () => {
  expect(restoreIpAddresses("25525511135")).toEqual([
    "255.255.11.135",
    "255.255.111.35",
  ]);
});
