import { createTweetList } from './createTweetList';
import { fetchTweets } from './mockapi-API';
import { refs } from './refs';
import { getUsers, setUsers } from './storage';
import { onFollowClick } from './onFollowClick';
import { onLoadMoreClick, showUsers } from './users';

const tweetsPerPage = 3;
let next = tweetsPerPage;

function setNext() {
  next += tweetsPerPage
  return next;
}

if (!getUsers()) {
  fetchTweets().then(data => {
    setUsers(data);
    showUsers(next);
  });
} else {
  showUsers(next);
}

refs.gallery.addEventListener('click', onFollowClick);
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick=()=> onLoadMoreClick(setNext));

