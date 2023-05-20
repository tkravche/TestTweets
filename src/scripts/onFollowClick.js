import { getUser, updateUsers } from './storage';

export function onFollowClick(e) {
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
  const infoHtml = followers => `<b>${followers} followers</b>`;