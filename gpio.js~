var spawn = require('child_process').spawn;

var debug = false;

function cmd(cmd, args, okCallback){

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
	console.log('standard error output:\n' + data); 
    });

    // 注册子进程关闭事件 
    free.on('exit', function (code, signal) { 
	console.log('child process eixt ,exit:' + code); 
    });
}

//cmd('free', ['-m']);

function gpio(name, pin , value){
    cmd('gpio', [name, pin, value]);
}
gpio.write = function(pin, value){
    cmd('gpio', ['write', pin, value]);
};
gpio.read = function(pin, callback){
    cmd('gpio', ['read', pin], callback);
};

gpio.mode = function(pin, value, callback){
    cmd('gpio', ['mode', pin, value], callback);
};

/*
gpio.write(7, 1);

setTimeout(function(){
    gpio.write(7, 0);
}, 3000);
*/

gpio.read(7, function(rs){
    console.log('[' + rs +']');
});

module.exports = gpio;
