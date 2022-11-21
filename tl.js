// console.log('dddd');

// console.log(module.exports === exports);

// console.log(arguments[2] === module, arguments[0] === module.exports);



var dataMap = {};
var timer = null;

timer = setInterval(() => {
  console.log('开启新的线程 => setInterval => 监听数据变化');
  // 获取到监听数据的name，金额，百分比
  var tv_name = id("tv_name").find();
  var tv_change_percent = id("tv_change_percent").find();
  var tv_price = id("tv_price").find();

  var len = tv_name.length;

  for (let i = 0; i < len; i++) {
    // console.log('监听的数据', tv_change_percent[i].text(), tv_price[i].text(), tv_name[i].text().split('\n')[0]);
    dataMap[tv_name[i].text().split('\n')[0]] = tv_change_percent[i].text();
  }
  console.log(dataMap, '监听到的数据');
}, 2000);


setTimeout(() => {
  clearInterval(timer);
}, 20000);