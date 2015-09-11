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

//
// $(document).ready(function() {
//
//   $("form#triangle").submit(function(event) {
//
//     var height = parseInt($("input#height").val());
//     var length = parseInt($("input#length").val());
//     var width = parseInt($("input#width").val());
//
//     var result = checkTriangle(height, length, width);
//
//     $(".triangleResult").text(result);
//     $("#result").show();
//
//     event.preventDefault();
//
//   });
// });
