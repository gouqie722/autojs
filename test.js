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

id("tv_price").findOne().parent().children()
  .forEach(function(child){
    log(child.className());
    log(child.text(), '文本');
  });


console.log('end');

