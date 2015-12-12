var spawn = require('child_process').spawn;

var debug = false;

function cmd(cmd, args, okCallback, errorCallback){

    //free = spawn('free', ['-m']);
    free = spawn(cmd, args);

    // 捕获标准输出并将其打印到控制台 
    free.stdout.on('data', function (data) { 
	if(okCallback){
	    okCallback(data);
	}
	console.log('standard output:\n' + data); 
    });

    // 捕获标准错误输出并将其打印到控制台 
    free.stderr.on('data', function (data) { 
	if(errorCallback){
	    errorCallback(data);
	}
	console.log('standard error output:\n' + data); 
    });

    // 注册子进程关闭事件 
    free.on('exit', function (code, signal) { 
	console.log('child process eixt ,exit:' + code); 
    });
}
//cmd('free', ['-m']);

var gpio = {};

gpio.write = function(pin, value, callback){
    cmd('gpio', ['write', pin, value], null, callback);
};
gpio.read = function(pin, callback, callback2){
    cmd('gpio', ['read', pin], callback, callback2);
};
gpio.mode = function(pin, value, callback){
    cmd('gpio', ['mode', pin, value], null, callback);
};

/*
gpio.write(7, 1);

setTimeout(function(){
    gpio.write(7, 0);
}, 3000);

gpio.read(7, function(rs){
    console.log('[' + rs +']');
});
*/

module.exports = gpio;
