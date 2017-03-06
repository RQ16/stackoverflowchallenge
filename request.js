  var xhr = new XMLHttpRequest();
  var url = "https://api.stackexchange.com/2.2/questions/unanswered?order=desc&sort=activity&site=stackoverflow";

  xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
      if(xhr.readyState === 4 && xhr.status === 200) {
        var unanswered = JSON.parse(xhr.responseText).items;
          renderData(unanswered);
          // var title = unanswered[i].title;
          // var newQuestion = document.createElement('li');
          // var newLink =  document.createElement('a');
          // newLink.href = unanswered[i].link
          // console.log(newLink);
          // newLink.textContent = title;
          // newQuestion.appendChild(newLink);
          // questionList.appendChild(newQuestion);

       console.log(unanswered);
    }
  }
  xhr.open('GET', url, true);
  xhr.send();

  var renderData = function(data) {
    var questionList = document.getElementById("questions")
    for (var i = 0; i < data.length; i++) {
    var title = data[i].title;
    var newQuestion = document.createElement('li');
    var newLink =  document.createElement('a');
    newLink.href = data[i].link
    console.log(newLink);
    newLink.textContent = title;
    newQuestion.appendChild(newLink);
    questionList.appendChild(newQuestion);
    }
  }
