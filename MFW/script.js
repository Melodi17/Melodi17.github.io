/* find **all** swear words on the page, surround with span tags, and add a class */
var words = ["fuck", "shit", "dumbass", "-ass", "asshole", "bitch"];

var regex = new RegExp(words.join("|"), "gi");
var body = document.body.innerHTML;
body = body.replace(regex, function(match) {
    return "<span class='swear'>" + match + "</span>";
});

document.body.innerHTML = body;
