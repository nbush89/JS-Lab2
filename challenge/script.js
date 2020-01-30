function printSquare(width) {
  let poundSymbol = "#";
  for (let i = 0; i < width; i++) {
    console.log(poundSymbol.repeat(width));
  }
}
printSquare(3);

function printTriangle(width) {
  let pound = "#";
  for (let i = 1; i <= width; i++) {
    console.log(pound.repeat(i));
  }
}
printTriangle(4);

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    console.log("A");
  } else if (score >= 80 && score < 90) {
    console.log("B");
  } else if (score >= 70 && score < 80) {
    console.log("C");
  } else if (score >= 60 && score < 70) {
    console.log("D");
  } else {
    console.log("E");
  }
}
getGrade(76);

function prioritize(urgent, important) {
  if (urgent === true && important === true) {
    console.log("priority 1");
  } else if (urgent === false && important === true) {
    console.log("priority 2");
  } else if (urgent === true && important === false) {
    console.log("priority 3");
  } else {
    console.log("priority 4");
  }
}
