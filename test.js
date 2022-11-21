// var text = text("BTC\
// Bitcoin").findOne();


// id: single_call_container
// fullId: com.android.contacts:id/single_call_container

// text.click();
// console.log('text', text);

// toast(text);
// console.log('开始执行');
// toast('开始执行');
// sleep(3000);
// click('微信');
// console.log('微信');
// sleep(1500);
// // while(!click('发现'));
// click('发现');

// console.log('发现');
// sleep(1500);
// click('朋友圈')
// console.log('执行完毕');
// className('android.widget.ListView').findOne()

console.log('start');
// click('欧易');
// 检测数据变化
// setInterval(() => {
  
// }, 3000);



var watchData = {
  BTC: -0.3,
  ETH: -0.4,
  OKT: -0.5,
  LTC: -0.6,
  DOT: -0.7,
  DOGE: -0.8,
};


var tv_name = id("tv_name").find();
var tv_change_percent = id("tv_change_percent").find();
var tv_price = id("tv_price").find();

var len = tv_name.length;

console.log(len, '长度');

// id("tv_name").find().parent().children()
//   .forEach(function(child){
//     log(child.className());
//     log(child.text(), '文本');
//   });

for (let i = 0; i < len; i++) {
  console.log('监听的数据', tv_change_percent[i].text(), tv_price[i].text(), tv_name[i].text().split('\n')[0]);
}

console.log('end');

