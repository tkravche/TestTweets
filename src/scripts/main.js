import { createTweetList } from './createTweetList';
import { fetchTweets } from './mockapi-API';
import { refs } from './refs';
import { getUser, getUsers, setUsers, updateUsers } from './storage';

if (getUsers()) {
  refs.gallery.innerHTML = createTweetList(getUsers());
} else {
  fetchTweets().then(data => {
    setUsers(data);
    refs.gallery.innerHTML = createTweetList(data);
  });
}
refs.gallery.addEventListener('click', handleClick);

const infoHtml = followers => `<b>${followers} followers</b>`;

function handleClick(e) {
  const clickedEl = e.target;
  if (clickedEl.classList.contains('follow')) {
    const user = getUser(clickedEl.dataset.id);
    if (!clickedEl.classList.contains('isFollowing')) {
      clickedEl.classList.add('isFollowing');
      clickedEl.innerText = 'Following';
      user.followers++;
      user.isFollowing = true;
    } else {
      clickedEl.classList.remove('isFollowing');
      clickedEl.innerText = 'Follow';
      user.followers--;
      user.isFollowing = false;
    }
    const li = clickedEl.parentElement;
    const followers = li.querySelector('.info__followers');
    followers.innerHTML = infoHtml(user.followers);
    updateUsers();
  }

}
