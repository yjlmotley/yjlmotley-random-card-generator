/* eslint-disable */
import "./style.css";

window.onload = () => {
  // Define arrays for suits & numbers
  const suits = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Function to update the suits & numbers randomly
  function getRandomCard() {
    // Generate random indices for suits & numbers
    const randomSuits = Math.floor(Math.random() * suits.length);
    const randomNumbers = Math.floor(Math.random() * numbers.length);

    // Set the suit symbols & number based on the random indices
    document.querySelector(".top-suit").innerHTML = suits[randomSuits];
    document.querySelector(".bottom-suit").innerHTML = suits[randomSuits];
    document.querySelector(".number").innerHTML = numbers[randomNumbers];

    // If the suit is hear or diamond, make the suit & the numbers red
    const isRed =
      suits[randomSuits] === "&hearts;" || suits[randomSuits] === "&diams;";
    document
      .querySelectorAll(".top-suit, .bottom-suit, .number")
      .forEach(element => {
        element.computedStyleMap.color = isRed ? "red" : "";
      });
  }

  // Call getRandomCard function initially
  getRandomCard();

  // Call getRandomCard function when pressing the button
  document.querySelector("button").addEventListener("click", getRandomCard);

  console.log("Thanks for checking out my random card generator page!");
};
