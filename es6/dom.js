document.getElementById('add-border').addEventListener('click', function(){
  const container = document.getElementById('friend-container');
  container.style.border = '3px solid yellow';
})

function addBackgroundColor(){
const friends = document.getElementsByClassName('friend');
for (const friend of friends) {
  friend.style.backgroundColor = 'lightblue';
}
}

// creat new addfriend List 

document.getElementById('add-friend').addEventListener('click', function(){
  const container = document.getElementById('friend-container');
  const friendDiv = document.createElement('div');
  friendDiv.classList.add('friend');
  friendDiv.innerHTML = `
  <h3 class="friend-name">New friend-4</h3>
  <p>Possimus quisquam commodi asperiores exercitationem?</p>
  `;
  container.appendChild(friendDiv);
})