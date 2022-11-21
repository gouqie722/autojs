"ui";
ui.layout(
  <vertical id="container">
    <button id="btn" text="执行"/>
    <button id="btn1" text="停止执行"/>
  </vertical>
);


/* <button text="第一个按钮"/>
<text textSize="16sp" text="请输入手机号"/>
<input id="phone" phoneNumber="true" text="10086"  />
<text textSize="16sp" text="请输入时间(单位秒: 最小值20秒)" />
<input id="num" phoneNumber="true"  /> */




// var watchData = {
//   BTC: -0.3,
//   ETH: -0.4,
//   OKT: -0.5,
//   LTC: -0.6,
//   DOT: -0.7,
//   DOGE: -0.8,
// };

// Object.keys(watchData).forEach(item => {
//   let textView = ui.inflate(
//     <text textColor="#000000" textSize="14sp"/>
//   , ui.container);
//   let inputView = ui.inflate(
//     <input />
//   , ui.container);
//   textView.attr("text", item);
//   inputView.attr("text", watchData[item]);
//   ui.container.addView(textView);
// })



let timer = null;
let thread = null;
ui.btn.click(function () {
  handleClick();
});

function handleClick() {
  var phone = ui.phone.getText().toString();
  var num = ui.num.getText().toString();
  num = Number(num) < 5 ? 5 : Number(num);
  toast(phone + "您好! 时间: " + num);
  console.log('点击了按钮');
  if (timer) {
    console.log('清除定时器');
    clearInterval(timer);
  }
  thread = threads.start(function () {
    timer = setInterval(() => {
      console.log('开启新的线程 => setInterval => 监听数据变化', phone, num);
    }, 2000);
    console.log('开启新的线程', phone, num);
    test(phone, num);
  });
  setTimeout(() => {
    thread.interrupt();
  }, 10000);
}

var w = floaty.rawWindow(
  <frame gravity="center">
      <text id="text">悬浮文字</text>
  </frame>
);

function test(phone, num) {
  console.log(phone + "您好! 时间: " + Number(num) * 1000);
  var intent = {
    action: 'android.intent.action.DIAL',
    data: 'tel:' + phone,
  }
  console.log({ a: 233 }, phone);

  app.startActivity(intent)
  sleep(500);

  console.log('拨打高清电话 11');
  desc('拨打高清电话').click();
}

ui.btn1.click(function () {
  console.log('停止执行');
  if (timer) {
    console.log('清除定时器');
    clearTimeout(timer);
  }
});
// 192.168.10.71
