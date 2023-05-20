export function createTweetCardMarkup({ user, tweets, followers, avatar, id }) {
  return `<li class="tweet-card">
          <img class="avatar__image"
            src="${avatar}"
            alt="${user}"
            loading="lazy"
          />
          <div class="info">
            <p class="info__tweets"><b>${tweets} tweets</b></p>
            <p class="info__followers"><b>${followers} followers</b></p>
                     </div>
         <button type ='button' class="follow" data-id=${id}>Follow</button>
         </li>`;
}

// export function getTweetCardMarkup({ user, tweets, followers, avatar, id }) {
//   const li = document.createElement('li');
//   // const btnText = isFollowing ? 'Following' : 'Follow';
//   li.className = 'tweet-card';
//   li.innerHTML = `
//   <img class="avatar__image"
//     src="${avatar}"
//     alt="${user}"
//     loading="lazy"
//   />
//   <div class="info">
//     <p class="info__tweets"><b>${tweets} tweets</b></p>
//     <p class="info__followers"><b>${followers} followers</b></p>
//              </div>
//  <button type ='button' class="follow" data-id=${id}>Follow</button></li>`;
//   // li.addEventListener('click', handleCardClick);
//   return li;
// }
