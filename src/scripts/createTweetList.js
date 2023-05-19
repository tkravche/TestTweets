export function createTweetList(tweets) {
  const tweetList = tweets.map(tweet => createPhotoCardMarkup(tweet)).join('');
  refs.gallery.insertAdjacentHTML('beforeend', tweetList);
}
