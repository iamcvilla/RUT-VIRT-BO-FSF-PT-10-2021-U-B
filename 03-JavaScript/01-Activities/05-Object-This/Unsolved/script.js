

// TODO: What is `this` referring to here?
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

helloThis(); //globally scoped function

// TODO: What is `this` referring to here? What will be logged in the console?
var child = {
  age: 10, // Number
  ageTenYears: function() { //
    console.log(this.age + 10);
  }
};

child.ageTenYears();


// TODO: What is `this` referring to here? What will be logged in the console?
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this);
      console.log(this.initialInvestment * 1.15);
    }
  }
};

investor.investment.investmentGrowth();

// TODO: Call the `helloThis` function and the object methods to check results in the console
