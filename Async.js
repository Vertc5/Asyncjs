/*
step
# 1 place Order -> 2
# 2 cut the fruit -> 2
# 3 add water and ice -> 1
# 4 start the machine -> 1
# 5 select container -> 2
# 6 select topping -> 3
# 7 Serving icecream -> 2
*/

/*console.log(" I ");

console.log(" eat ");

setTimeout(() => {
  console.log("eat2");
}, 2000);

console.log(" Ice Cream ")
;*/

/*
function one(call_two) {
  console.log("hello one and get two");
  call_two();
}

function two() {
  console.log("hello TWO");
}

one(two);
*/

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

/*
// 1st Function
let order = (fruit_name, call_production) => {
  setTimeout(function () {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);

    // Order placed. Call production to start
    call_production();
  }, 2000);
};

// 2nd Function call back hell
let production = () => {
  // blank for now
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("The fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);

        setTimeout(() => {
          console.log("start the machine");

          setTimeout(() => {
            console.log(`Ice cream placed on ${stocks.holder[1]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);

              setTimeout(() => {
                console.log("serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

// Trigger 👇
order(0, production);
*/

// base
let is_shop_open = true;

// async/await code solution

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]}`);

    await time(0000);
    console.log("start production");

    await time(2000);
    console.log("Cut the fruit");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`Ice cream placed on ${stocks.holder[1]}`);

    await time(2000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(1000);
    console.log("serve Ice cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("Day ended");
  }
}

kitchen();

/*
async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc don't exist", error);
  } finally {
    console.log("runs the code anyway");
  }
}
order();
*/

/*
// Promise code solution
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Ou chop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0000, () => console.log("Production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("The fruit has been chopped"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("start the machine"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`Ice cream placed on ${stocks.holder[1]}`)
    );
  })
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
  })
  .then(() => {
    return order(1000, () => console.log("serve Ice cream"));
  })

  .catch(() => {
    console.log("customer left");
  })

  .finally(() => {
    console.log("day ended, shop is closed");
  });
*/
