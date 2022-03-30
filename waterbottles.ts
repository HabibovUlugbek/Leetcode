function numWaterBottles(numBottles: number, numExchange: number): number {
  let remain = 0;
  let result = numBottles;
  while (numBottles >= numExchange) {
    result = result + Math.trunc(numBottles / numExchange);
    remain = numBottles % numExchange;
    numBottles = remain + Math.trunc(numBottles / numExchange);
  }
  return result;
}
