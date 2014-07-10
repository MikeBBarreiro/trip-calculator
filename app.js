var prompt = require('sync-prompt').prompt;

var usersMiles = prompt('How far is your trip going to be? (ex: 125m) ');
usersMiles = parseInt(usersMiles);
var gpg = prompt('What is you gas per gallon? Ex:3.05 $ ');
gpg = parseFloat(gpg).toFixed(2);
var tankSize = prompt('How big is your gas tank? ');
tankSize = parseInt(tankSize);
var mpgRating = prompt('What is your vehicles MPG rating? ');
 mpgRating = parseInt(mpgRating);
var speed = prompt('How fast are you plaining on driving? ');
speed = parseInt(speed);
var carType = prompt('What kind of Vehicle are you going to drive?(truck or car?)  ');
carType = parseInt(carType);

var mphOver55 = speed - 55;
var mpgOffset;
var effMpg;


if (mphOver55 > 0) {
  if(carType === 'car'){
    effMpg = mpg - mphOver55;
  }else if(carType === 'truck') {
    effMpg = mpg - (mpgOver55 * 3);
  }else{
    console.log('Invalid Vehicle, assumption will be truck. ');
    carType = 'truck';
    effMpg = mpgRating - (mphOver55 * 3);

  }
}else{
  effMpg = mpgRating;
}
//10 pgm is minimum
effMpg = (effMpg >= 10) ? effMpg : 10;

var gallonsOfGas = usersMiles / effMpg;
var totalCostOfGas = gpg / tankSize;
var numberOfTanks = gallonsOfGas / tankSize;
var numberOfStops = Math.ceil(numberOfTanks);



console.log('To go ' + usersMiles + ' miles in your ' + carType + ' you will cost $' + totalCostOfGas.toFixed(2) + ' and take ' + numberOfTanks.toFixed(2) + ' tanks of gas. ');




