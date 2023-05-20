import { createTweetCardMarkup } from './createTweetCardMarkup';

export function createTweetList(tweets) {
  return tweets.map(tweet => createTweetCardMarkup(tweet)).join('');
}
