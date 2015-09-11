var replaceWord = function(haystack, needle, replaceWord) {
    var result = "";
    var re = new RegExp(needle, "gi");

    if(haystack.match(re)) {
        result = haystack.replace(re, replaceWord);
    } else {
        return "Word not found in string";
    }

    return result;
}


$(document).ready(function() {

  $("form#stringform").submit(function(event) {

    var sentence = $("input#sentence").val();
    var needle = $("input#needle").val();
    var wordToReplace = $("input#wordToReplace").val();

    var result = replaceWord(sentence, needle, wordToReplace);

    $(".text").text(result);
    $("#result").show();

    event.preventDefault();

  });
});
