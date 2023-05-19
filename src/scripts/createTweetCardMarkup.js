function createTweetCardMarkup({ user, tweets, followers, avatar }) {
  return `<li class="tweet-card">
          <img class="gallery__image"
            src="${avatar}"
            alt="${user}"
            loading="lazy"
          />
          <div class="info">
            <p class="info__item"><b>${tweets} tweets</b></p>
            <p class="info__item"><b>${followers} followers</b></p>
                     </div>
        </li>`;
}
