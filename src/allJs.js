function showanswer() {
  document.getElementById("answer").hidden = false;
}

function replaceBlank(word) {
  let l = word.length;
  let l2 = Math.ceil(l/2);
  word2 = word.slice(0,l2);
  for (i=0; i<l-l2; i++){
    word2 += '_';
  }
  return word2;
}

function readWords() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     alert(this.responseText);
    }
  };
  xhttp.open("GET", "src/enwiki.txt", true);
  xhttp.send();
}

function goToNextInput() {
  
}