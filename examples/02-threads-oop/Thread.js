class Thread {
  constructor($thread, voteCount) {
    this.$thread = $thread;
    this.$upvoteActionable = this.$thread.querySelector('.js-upvote');
    this.$downvoteActionable = this.$thread.querySelector('.js-downvote');
    this.$voteCount = this.$thread.querySelector('.js-vote-count');

    this.voteCount = voteCount;
    this.userVote = 0;

    this.updateUI();
    this.addListeners();
  }

  addListeners() {
    this.$upvoteActionable.addEventListener('click', () => {
      if (this.userVote === 1) {
        this.userVote = 0;
      } else {
        this.userVote = 1;
      }

      this.updateUI();
    });

    this.$downvoteActionable.addEventListener('click', () => {
      if (this.userVote === -1) {
        this.userVote = 0;
      } else {
        this.userVote = -1;
      }

      this.updateUI();
    });
  }

  updateUI() {
    this.$voteCount.innerText = this.voteCount + this.userVote;

    if (this.userVote === 1) {
      this.$upvoteActionable.classList.add('active');
      this.$downvoteActionable.classList.remove('active');
    } else if (this.userVote === 0) {
      this.$upvoteActionable.classList.remove('active');
      this.$downvoteActionable.classList.remove('active');
    } else if (this.userVote === -1) {
      this.$upvoteActionable.classList.remove('active');
      this.$downvoteActionable.classList.add('active');
    }
  }
}

export default Thread;
