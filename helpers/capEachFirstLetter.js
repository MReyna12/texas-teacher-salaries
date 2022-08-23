const capFirstLetter = (text) => {
  let capitalizedText = text.slice();

  if (!capitalizedText.includes(" ") && !capitalizedText.includes("-")) {
    capitalizedText =
      capitalizedText.charAt(0).toUpperCase() + capitalizedText.slice(1);
  } else if (capitalizedText.includes("-")) {
    const arrayOfText = capitalizedText.split("-");
    const capEachFirstLetter = arrayOfText.map(
      (word) => word[0].toUpperCase() + word.slice(1)
    );
    capitalizedText = capEachFirstLetter.join(" ");
  } else {
    const arrayOfText = capitalizedText.split(" ");
    const capEachFirstLetter = arrayOfText.map(
      (word) => word[0].toUpperCase() + word.slice(1)
    );
    capitalizedText = capEachFirstLetter.join(" ");
  }

  return capitalizedText;
};

export default capFirstLetter;
