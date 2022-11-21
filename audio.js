// "nodejs";
// const media = require("media");
// const url = 'http://music.163.com/song/media/outer/url?id=1309394512.mp3';
// playByUrl(url);
// async function playByUrl(uri) {
//   await media.playMusic(uri, 1.0, false);
// }

console.log('路径', files.cwd());

//播放音乐
media.playMusic("./autojs/009820.mp3");
device.vibrate(1000);
console.log('时长', media.getMusicDuration());
// device.vibrate(2000);
//让音乐播放完
sleep(media.getMusicDuration());
