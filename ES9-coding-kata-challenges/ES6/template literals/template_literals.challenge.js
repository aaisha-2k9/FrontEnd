// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if
// if a registered member - discount is 5%
// if not registered member - discount is 4%

const DISCOUNT = {
  REGISTERED: "discount is 5% ",
  NOT_REGISTERED: "discount is 4%"
};
let person = {
  status: DISCOUNT.REGISTERED
};
let person1 = {
  status: DISCOUNT.NOT_REGISTERED
};
function isEligibleforDicsount(person) {
  if (person.status === DISCOUNT.REGISTERED) {
    return DISCOUNT.REGISTERED;
  }
  else {
    return DISCOUNT.NOT_REGISTERED;
  }
}
console.log(`The person is eligible for discount and the ${isEligibleforDicsount(
  person
)}`);
console.log(`The person is eligible for discount and the ${isEligibleforDicsount(
  person1
)}`);
