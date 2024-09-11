var voteId = document.getElementById("vote-id")
var upvoteButton = document.getElementById("upvote")
var downvoteButton = document.getElementById("downvote")
var upvoteText = document.getElementById("upvotes")
var upvotes = parseInt(document.getElementById("upvotes").innerHTML)
var upvote = false
var downvote = false

function ColoraDiRosso() {
  upvoteButton.style.backgroundColor = "#d93900"
  downvoteButton.style.backgroundColor = "#d93900"
  voteId.style.backgroundColor = "#d93900" 
  if(!upvote) {
    upvoteText.innerHTML = upvotes + 1
    upvote = true
    downvote = false
  } else {
    upvoteButton.style.backgroundColor = "#2a3236"
    downvoteButton.style.backgroundColor = "#2a3236"
    voteId.style.backgroundColor = "#2a3236"
    upvoteText.innerHTML = upvotes
  }
}

function ColoraDiBlu() {
  upvoteButton.style.backgroundColor = "#6a5cff"
  downvoteButton.style.backgroundColor = "#6a5cff"
  voteId.style.backgroundColor = "#6a5cff"
  if(!downvote) {
    upvoteText.innerHTML = upvotes - 1
    downvote = true
    upvote = false
  } else {
    upvoteButton.style.backgroundColor = "#2a3236"
    downvoteButton.style.backgroundColor = "#2a3236"
    voteId.style.backgroundColor = "#2a3236"
    upvoteText.innerHTML = upvotes
  }
}
