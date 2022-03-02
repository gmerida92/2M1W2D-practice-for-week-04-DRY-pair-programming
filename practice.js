function bigNum(num1,num2){
  let bigNum;
  if(num1>num2){
    bigNum = num1
  }else{
    bigNum = num2
  }
  return bigNum
}

function multiplyBiggerNumByTwo(num1, num2) {
  return bigNum(num1,num2) * 2
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum * 2;
  // } else {
  //   bigNum = num2;
  //   return bigNum * 2;
  // }
}

function divideBiggerNumByThree(num1, num2) {
  return bigNum(num1,num2) / 3
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum / 3;
  // } else {
  //   bigNum = num2;
  //   return bigNum / 3;
  // }
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${bigNum(sum1,sum2)} tacos.`;
  // let bigNum;
  // if (sum1 > sum2) {
  //   bigNum = sum1;
  //   return `I ate ${bigNum} tacos.`;
  // } else {
  //   bigNum = sum2;
  //   return `I ate ${bigNum} tacos.`;
  // }
}

function adoptSmallerDog(weight1, weight2) {
  // let val;
  // const awns = bigNum(weight1,weight2);
  // if(awns === weight1){
  //   val = weight2
  // }else{
  //   val = weight2
  // }
  return `I adopted a dog that weighs ${bigNum(weight2,weight1)} pounds.`;
  // let smallDog;
  // if (weight1 < weight2) {
  //   smallDog = weight1;
  //   return `I adopted a dog that weighs ${smallDog} pounds.`;
  // } else {
  //   smallDog = weight2;
  //   return `I adopted a dog that weighs ${smallDog} pounds.`;
  // }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
