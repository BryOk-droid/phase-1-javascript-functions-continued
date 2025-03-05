function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(wrapper = "*") {
  return function (adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}

// Test cases
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("bathe my dog")); // "This Saturday, I want to bathe my dog!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

const highlight = wrapAdjective("||");
console.log(highlight("a dedicated programmer")); // "You are ||a dedicated programmer||!"

module.exports = { saturdayFun, mondayWork, wrapAdjective };
