const createStep = msg => {
  document.querySelector(
    ".info"
  ).innerHTML += `<div class="alert alert-info" role="alert">
    ${msg}
  </div>`;
};
document.querySelector(".clear").addEventListener("click", () => {
  console.log("hi");
  document.querySelector(".info").textContent = "";
});
const cookMaggiStep = [
  "After 1 sec~~ Bring 2½ cups of water to a boil in a small saucepan. Add the noodles and cook for 2 minutes. Add the flavor packet, stir, and continue to cook for another 30 seconds.",
  "After 2 sec~~ Remove the pan from the heat and carefully add the egg. Do not stir; pull the noodles over the egg and let sit for one minute to poach.",
  "After 3 sec~~ Carefully transfer everything to a serving bowl, add the butter, cheese and sesame seeds and mix. Garnish with the scallions if desired.",
];
document.querySelector(".cook").addEventListener("click", cookMaggi);

// Insert your code below~

function cookMaggi() {
  //Put your code here.
  //Read more about setTimeOut
  //https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
  //To create a message step, use createStep(message)
}

//This is just to demostrate how to create a step. Please remove after this.
createStep(cookMaggiStep[0]);
