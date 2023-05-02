const diceRoller = function() {
  return Math.floor(Math.random() * 6) + 1;
};
process.argv.slice(2).forEach(e => {
  let dice = Number(e);
  if (dice === isNaN || dice !== 0) {
    let output = `Rolled ${dice} dice: `;
    while (dice > 0) {
      output += `${diceRoller()}, `;
      dice--;
    }
    output = output.slice(0, -2);
    console.log(output);
  }
});
