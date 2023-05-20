const varName = 'tweetUsers';
let allUsers;
export function setUsers(users) {
  allUsers = users;
  localStorage.setItem(varName, JSON.stringify(allUsers));
}

export function getUsers() {
  if (!allUsers) {
    allUsers = JSON.parse(localStorage.getItem(varName));
  }  
  return allUsers;
}

export function getUser(id) {
  return getUsers().find(u => u.id === id);
}

export function updateUsers(){
    localStorage.setItem(varName, JSON.stringify(allUsers));
}