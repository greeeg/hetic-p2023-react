import Thread from './Thread';

const $threads = document.querySelectorAll('.thread');

$threads.forEach($thread => {
  new Thread($thread, Math.round(Math.random() * 100));
});
