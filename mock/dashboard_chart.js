function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [100, 50, 38, 78, 66, 80];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
