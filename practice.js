function multiplyBiggerNumByTwo(num1, num2) {
  return helper(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return helper(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${helper(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${helper(weight1, weight2) === weight1 ? weight2 : weight1} pounds.`;
}

function helper(num1, num2) {
  return num1 > num2 ? num1 : num2;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
