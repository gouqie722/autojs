// "nodejs";



// const { showToast } = require('toast');

// console.log(process.versions);

// showToast('Hello, Auto.js Pro with Node.js!');
// 返回到桌面
// home();
// toast('1111');

// click('设置');

// // 停留两秒
// sleep(1500);

// id("tv_price").findOne().parent().children()
//   .forEach(function(child){
//     log(child.className());
//     log(child.text(), '文本');
//   });



// console.log('1233333333333');

// print('print print print')

// while(!click('发现'));
// sleep(1500);
// click('华为运动健康');



// 滚动
// scrollUp(1)
// scrollDown(1)
// sleep(1000)
// scrollUp(1)

// 设置文本
// setText('测试~~~~~');
// sleep(500);
// click('发送');
// sleep(1500);
// setText('测试~~~~~');
// sleep(500);
// click('发送');
// sleep(1500);
// setText('测试~~~~~');
// sleep(500);
// click('发送');
// sleep(1500);
// setText('测试~~~~~');
// sleep(500);
// click('发送');
// sleep(1500);
// setText('测试~~~~~');
// sleep(500);
// click('发送');
// sleep(1500);


// setText('弄了个自动发消息的');
// click('发送');

// sleep(100);
// setText('弄了个自动发消息的');
// click('发送');


// input(0, '你好')
// sleep(100);



// click('微信');

// let tel_num = "18770017283";
// console.log(tel_num, '号码');

// function tryCallByShell() {
//   console.log('shell');
//   return !shell("am start -a android.intent.action.DIAL tel:" + tel_num, true).code;
// }

// tryCallByShell();

// // function tryCallByIntent() {
// //   let call_intent = {
// //     action: "CALL",
// //     data: "tel:" + tel_num,
// //     root: true,
// //   };
// //   console.log(call_intent);
// //   app.startActivity(call_intent);
// // }

// // tryCallByIntent();

// console.log(tryCallByShell(), '运行结果');

// function call(context,id, telNum){
//   // id starts from zero to one
//   importClass(android.content.Intent);
//   importClass(android.net.Uri);
//   importClass(android.content.Context);
//   importClass(android.telecom.TelecomManager);
//   let telecomManager = context.getSystemService(Context.TELECOM_SERVICE);
//   console.log('telecomManager', telecomManager);
//   if(telecomManager != null){
//     let phoneAccountHandleList = telecomManager.getCallCapablePhoneAccounts();
//     let intent = new Intent();
//     intent.setAction(Intent.ACTION_CALL);
//     intent.setData(Uri.parse("tel:" + telNum));
//     intent.putExtra(TelecomManager.EXTRA_PHONE_ACCOUNT_HANDLE, phoneAccountHandleList.get(id));
//     app.startActivity(intent);
//   }
// };



// call(context,0,18870114570)

// 自动拨打电话
setTimeout(() => {
  var intent = {
    action: 'android.intent.action.DIAL',
    data: 'tel:15129203018'
  }
  console.log({ a: 233 }, 15129203018, app);
  
  app.startActivity(intent)
  
  sleep(500);
  
  console.log('拨打高清电话 11');
  desc('拨打高清电话').click();
}, 3000);

console.log({ a: 233 }, 15129203018);

