"ui";
ui.layout(
  <vertical id="container">
    <button text="第一个按钮"/>
    <button text="第二个按钮"/>
  </vertical>
);


var watchData = {
  BTC: -0.3,
  ETH: -0.4,
  OKT: -0.5,
  LTC: -0.6,
  DOT: -0.7,
  DOGE: -0.8,
};

Object.keys(watchData).forEach(function (item) {
  let textView = ui.inflate(
    <text textSize="16sp" text={item} />
  , ui.container);
  let inputView = ui.inflate(
    <input text={watchData[item]} id={item} />
  , ui.container);
  textView.attr("text", 1);
  ui.container.addView(textView);
  ui.container.addView(inputView);
})

// 子线程
var thread = null;
var timer = null;


// console.log(len, '长度');

var dataMap = {};

thread = threads.start(function () {
  setTimeout(() => {
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
  }, 5000);
  setTimeout(() => {
    clearInterval(timer);
  }, 20000);
  console.log('开启新的线程');
});

// id("tv_name").find().parent().children()
//   .forEach(function(child){
//     log(child.className());
//     log(child.text(), '文本');
//   });
