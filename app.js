$(document).ready(function() {
  var strength = 0;
  var stamina = 0;
  var damage = 0;
  var armor = 0;
  var range = 0;
  var speed = 0;
  var stealth = 0;
  var health = 0;
  var magic = 0;
  var role = "";
  var data;
  $.post("https://api.random.org/json-rpc/1/invoke", JSON.stringify({
      "jsonrpc": "2.0",
      "method": "generateIntegers",
      "params": {
        "apiKey": "08215bb2-128c-45d8-8618-855d05e202be",
        "n": 10,
        "min": 1,
        "max": 10,
        "replacement": true,
        "base": 10
      },
      "id": 15309
    }),
    function(pulledData) {
      data = pulledData
      console.log(data);
      console.log(data.result.random.data[0]);
    });
  Materialize.updateTextFields();
  $('#name').click(function() {
    $("#warriorName").hide(1000);
    $("#name").hide(1000);
    $("h1").hide(1000);
    $("#first_name2").val();
    $("#playerName").append($("#first_name2").val());
    classSelect();
  });

  function classSelect() {
    $(".question").append("<h1>What is your class?</h1>")
    $(".mainButton").addClass("btn waves-effect waves-light");
    $(".warrior").text("Warrior");
    $(".archer").text("Archer");
    $(".mage").text("Mage");
  };

  $(".warrior").click(function() {
    strength = 6;
    stamina = 5;
    damage = 5;
    armor = 5;
    range = 1;
    speed = 2;
    stealth = 0;
    health = 5;
    magic = 0;
    $("#strength").append(strength);
    $("#stamina").append(stamina);
    $("#damage").append(damage);
    $("#armor").append(armor);
    $("#range").append(range);
    $("#speed").append(speed);
    $("#health").append(health);
    $("#stealth").append(stealth);
    $("#magic").append(magic);
    role = "Warrior";
    firstQuest();

  });
  $(".archer").click(function() {
    strength = 4;
    stamina = 7;
    damage = 3;
    armor = 2;
    range = 7;
    speed = 6;
    stealth = 7;
    health = 5;
    magic = 0;
    $("#strength").append(strength);
    $("#stamina").append(stamina);
    $("#damage").append(damage);
    $("#armor").append(armor);
    $("#range").append(range);
    $("#speed").append(speed);
    $("#health").append(health);
    $("#stealth").append(stealth);
    $("#magic").append(magic);
    role = "Archer";
    firstQuest();
  });
  $(".mage").click(function() {
    role = "Mage";
    strength = 3;
    stamina = 3;
    damage = 5;
    armor = 2;
    range = 7;
    speed = 4;
    stealth = 5;
    health = 5;
    magic = 7;
    $("#strength").append(strength);
    $("#stamina").append(stamina);
    $("#damage").append(damage);
    $("#armor").append(armor);
    $("#range").append(range);
    $("#speed").append(speed);
    $("#health").append(health);
    $("#stealth").append(stealth);
    $("#magic").append(magic);
    firstQuest();
  });

  function firstQuest() {
    $(".choice").append($(".mainButton").text(""));
    $(".mainButton").removeClass("btn waves-effect waves-light mage archer warrior");
    $("h1").hide(1000);
    $(".question").append("<h1>I'm glad you are here great one!</h1>");
    $(".question").append("<p>There are raiders attacking my village, and we need your help!</p>");
    $(".choiceButton").addClass("btn waves-effect waves-light");
    $(".1").text("Agree and follow the man.");
    $(".2").text("Attack the man.");
    $(".3").text("Pretend you're deaf");
  };
  $(".1").click(function() {
    ending();
    $(".question").append("<h1>As he leads you away he turns aruond...</h1>");
    $(".question").append("<p>Truth be told, I am the leader of the bandits. I found you and wanted to play a little game. Since you are here, I realized I wanted to fight you now instead; prepare to fight!</p>");
    $(".4").text("Rush and tackle the man.");
    $(".5").text("Sneak away.");
    $(".6").text("Insult the man.");
  });
  $(".2").click(function() {
    ending();
    $(".question").append("<h1>He looks at you confused only to tell you...</h1>");
    $(".question").append("<p>I was going to kill you when we reached the village, but I can do it right now!</p>");
    $(".4").text("Pull out your weapon and prepare to fight!");
    $(".5").text("Begin to undress.");
    $(".6").text("Insult the man.");
  });
  $(".3").click(function() {
    ending();
    $(".question").append("<h1>He repeats what he said and appears annoyed and says...</h1>");
    $(".question").append("<p>I guess if you're deaf I can attack you, and you can't scream for help.</p>");
    $(".4").text("Ramble incoherently to the man while running at him!");
    $(".5").text("Still pretend to be def.");
    $(".6").text("Insult the man.");
  });

  function ending() {
    $(".choice2").append($(".choiceButton").text(""));
    $(".choiceButton").removeClass("btn waves-effect waves-light 1 2 3");
    $("h1").hide(1000);
    $("p").hide(1000);
    $(".choiceButton2").addClass("btn waves-effect waves-light");
  };
  $(".4").click(function() {
    death();
    if (strength >= data.result.random.data[0]) {
      $(".question").append("<h1>You rush towards him and attack him!</h1>");
    } else {
      $(".question").append("<h1>You rush towards him and attack him!</h1>");
    };
  });

  function death() {
    $(".choice3").append($(".choiceButton2").text(""));
    $(".choiceButton2").removeClass("btn waves-effect waves-light 1 2 3");
    $("h1").hide(1000);
    $("p").hide(1000);
  }
});
