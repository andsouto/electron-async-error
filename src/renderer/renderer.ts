import priorityQueue from 'async/priorityQueue';

import '../../templates/index.scss';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

const queue = priorityQueue(function(task, callback) {
    console.log('task', task);
    callback();
});

queue.push('task:foo', 0);