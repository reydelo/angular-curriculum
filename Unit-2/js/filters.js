app.filter('kebab', function() {
  return function (input) {
    if (typeof input === "number") {
      return input;
    } else if (typeof input === "string") {
      return input.replace(/_| /g, "-");
    }
  };
});

app.filter('camel', function() {
  return function(input) {
    if (typeof input === "number") {
      return input;
    } else if (typeof input === "string") {
      array = input.split(/-|_/);
      for (var i = 1; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
      }
      return array.join("");
    }
  }
});

app.filter('pigLatin', function() {
  return function(input) {
    array = input.split(" ");
    for (var i = 0; i < array.length; i++) {
      if(array[i].match(/^[eEaAiIoOuUyY]/) != null) {
        array[i] = array[i] + "-yay";
      } else {
        if(array[i].length > 1 && array[i][1].match(/^[eEaAiIoOuUyY]/) != null) {
          array[i] = array[i].slice(1) + "-" + array[i].substring(0, 1).toLowerCase() + "ay"
        } else {
          array[i] = array[i].slice(2) + "-" + array[i].substring(0, 2).toLowerCase() + "ay"
        }
      }
    }
    return array.join(" ");
  }
});

app.filter('redact', function() {
  return function(input, string) {
    array = input.split(" ");
    for(var i = 0; i < array.length; i++) {
      if(array[i] === string) {
        array[i] = "REDACTED";
      }
    }
    return array.join(" ");
  }
});
