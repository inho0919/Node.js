var module = require('./module_time');

module.timer.on('tick', function(time){
    var time = new Date(); 
    console.log('now:'+time);
});