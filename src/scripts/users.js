import { createTweetList } from './createTweetList';
import { refs } from './refs';
import { getUsers } from './storage';

export function showUsers(count) {
    const allUsers = getUsers();
    const tweetsToShow = allUsers.slice(0, count);
    refs.gallery.innerHTML = createTweetList(tweetsToShow);
    if (count >= allUsers.length) {
      const btn = document.querySelector('.btn-load-more');
      btn.remove();
      }

}

export function onLoadMoreClick(setNext) {
  const next = setNext();
  showUsers(next);
}
