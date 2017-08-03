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
    function(data) {
      console.log(data);
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
    firstQuest();
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
  });
  $(".archer").click(function() {
    firstQuest();
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
  });
  $(".mage").click(function() {
    firstQuest();
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
  });
  function firstQuest() {
    $(".choice").append($(".mainButton").text(""));
    $(".mainButton").removeClass("btn waves-effect waves-light mage archer warrior");
    $("h1").hide(1000);
  };

});
