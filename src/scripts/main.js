import { createTweetList } from './createTweetList';
import { fetchTweets } from './mockapi-API';
import { refs } from './refs';

const fetchedTweets = fetchTweets().then(data => {
  const tweetList = createTweetList(data);
  refs.gallery.innerHTML = tweetList;
});
refs.gallery.addEventListener('click', handleClick);

function handleClick(e) {
  const clickedEl = e.target;
  if (clickedEl.classList.contains('follow')) {
    if (!clickedEl.classList.contains('isFollowing')) {
      clickedEl.classList.add('isFollowing');
      clickedEl.innerText = 'Following';
    } else {
      clickedEl.classList.remove('isFollowing');
      clickedEl.innerText = 'Follow';
    }
  }
}
