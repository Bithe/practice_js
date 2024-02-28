function greeting(greetingHandler, name) {
    greetingHandler(name);
}

function greetingHandler(name) {
  console.log("rayaan", name);
}

greeting(greetingHandler, 'hossain');



