const $upvoteActionable = document.querySelector('.js-upvote');
const $downvoteActionable = document.querySelector('.js-downvote');
const $voteCount = document.querySelector('.js-vote-count');

const voteCount = 240;
let userVote = 0;

const addListeners = () => {
  $upvoteActionable.addEventListener('click', () => {
    if (userVote === 1) {
      userVote = 0;
    } else {
      userVote = 1;
    }

    updateUI();
  });

  $downvoteActionable.addEventListener('click', () => {
    if (userVote === -1) {
      userVote = 0;
    } else {
      userVote = -1;
    }

    updateUI();
  });
};

const updateUI = () => {
  $voteCount.innerText = voteCount + userVote;

  if (userVote === 1) {
    $upvoteActionable.classList.add('active');
    $downvoteActionable.classList.remove('active');
  } else if (userVote === 0) {
    $upvoteActionable.classList.remove('active');
    $downvoteActionable.classList.remove('active');
  } else if (userVote === -1) {
    $upvoteActionable.classList.remove('active');
    $downvoteActionable.classList.add('active');
  }
};

updateUI();
addListeners();
