async function testAsync(){
    let str='空字符';
    setTimeout(()=>{
        str='5:Hello async';
        console.log(str);
    },1050);
    return str;
}
const result = testAsync();
result.then(resultP=>{console.log('3:then:'+resultP)});
console.dir('1:'+result);

function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
        console.log('2:async is a sync');
    });
}
async function test() {
    const v = await takeLongTime(); //2.执行promise获取结果,resolve是异步的，要等结果，console.log是同步，在控制台输出内容。
    console.log('4:async:'+v);
}
test();
/*
*
*  中的异步函数3秒以后触发，此时先返回一个 promise 对象,then 中的函数传入promise等待异步触发
'1:[object Promise]'
2:async is a sync
3:then:空字符
4:async:long_time_value
*/