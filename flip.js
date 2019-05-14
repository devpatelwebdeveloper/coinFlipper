let result, userChoice;
let computerCount = 0;
let playerCount = 0;

//resetting the html

function resetAll() {
  const resetHTML =
    '<div class="tail"><img src="images/tail.png" /></div><div class="head"><img src="images/head.png" /></div>';
  setTimeout(function() {
    $(".coinBox").html(resetHTML);
    $("#btnFlip").removeAttr("disabled");
  }, 2000);
}

//User selecting dropdown menu

$(document).on("change", "#userChoice", function() {
  // alert("Working");
  userChoice = $(this).val();
  //alert(userChoice);
  if (userChoice === "") {
    const alert = `<span class="text text-danger">Please Select a coin side to play the game</span>`;
    $("#btnFlip").attr("disabled", "disabled");
    $(this)
      .parent("p")
      .prepend(alert);
  } else {
    $("#btnFlip").removeAttr("disabled");
    $(this)
      .siblings("span")
      .empty();

    //alert(userChoice);
  }
  return userChoice;
});

// final result

function finalResult(result, userChoice) {
  if (result === userChoice) {
    alert(`Result: ${result} and your choice is: ${userChoice}. Hence you won`);
    playerCount = playerCount + 1;
    $("#headsCounter").html(
      `<p> Player won <strong>${playerCount}</strong> times</p> `
    );
  } else {
    alert(
      `Result: ${result} and your choice is: ${userChoice}. Hence you lost the game`
    );
    computerCount = computerCount + 1;
    $("#tailsCounter").html(
      `<p> Computer won <strong>${computerCount}</strong> times</p>`
    );
  }
}

// Flip the Coin

$(document).on("click", "#btnFlip", function() {
  let flipCoin = $(".coinBox>div").addClass("flip");
  const number = Math.floor(Math.random() * 2);
  $(this).attr("disabled", "disabled");
  setTimeout(function() {
    flipCoin.removeClass("flip");
    //Getting the result
    if (number) {
      result = "head";
      //alert("Head");
      $(".coinBox").html(
        '<img src="images/head.png" /><h3 class="text-primary">Head</h3>'
      );

      finalResult(result, userChoice);
      resetAll();
    } else {
      result = "tail";
      //alert("Tail");
      $(".coinBox").html(
        '<img src="images/tail.png" /><h3 class="text-primary">Tail</h3>'
      );

      finalResult(result, userChoice);
      resetAll();
    }
  }, 2000);
  return false;
});
