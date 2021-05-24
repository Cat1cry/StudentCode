//rotate()
var players = [
  "0000",
  "1111",
  "2222",
  "3333",
  "4444",
  "5555",
  "6666",
  "7777",
  "8888",
  "9999",
];
var players1 = [
  "0000",
  "1111",
  "2222",
  "3333",
  "4444",
  "5555",
  "6666",
  "7777",
  "8888",
  "9999",
];
var count_num = 0;
var timer_delay = 50;
var bFalling_down = false;
var a;
var b;
index = 0;
img = ["图片/img.png", "图片/img_1.png", "图片/img_2.png"];
var number = 0;
var Number;
var timetext;
var numbertext;
var Valuetext;

function createCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function addArr() {
  Intext = document.getElementById("INtext").value;      // 签到功能
  players.push(Intext);
  players1.push(Intext);
}
function get(test) {
  radio_obj = document.getElementsByName(test);      //两种抽奖模式
  for (i = 0; i < radio_obj.length; i++) {
    if (radio_obj[i].checked == true) {
      return radio_obj[i].value;
    }
  }
}

function start_rotate() {
  bFalling_down = false;
  timer_delay = 50;
  rotate_wheel();
  Number = players.length - 1;

  if (get("test") === "1") {                          
    players.splice(b, 1);
    document.getElementById("number").innerHTML =
      "当前剩余人数：" + players.length;
    if (players.length === 0) {
      players = ["数组已空"];
    }
  }
  if (get("test") === "2") {
    players = players1;
    Number = players1.length - 1;
    document.getElementById("number").innerHTML =
      "当前剩余人数：" + players1.length;
  }
}

function slow_down() {
  bFalling_down = true;
}

function rotate_wheel() {
  count_num++;
  //disp_content(count_num);
  dispWheel(count_num);
  if (bFalling_down == false) {
    id = setTimeout("rotate_wheel()", timer_delay);
    console.log(id);
  } else {
    //timer_delay +=100;//慢慢转
    timer_delay = timer_delay + 5 * Math.log(timer_delay);
    if (timer_delay < 500) {
      id = setTimeout("rotate_wheel()", timer_delay);
    } else {
      b = a;
      var d = new Date();
      h = d.getHours();
      m = d.getMinutes();
      s = d.getSeconds();
      time = h + "时" + m + "分" + s + "秒";

      mytable = document.getElementById("id1");

      addtr = document.createElement("tr");

      addtd = document.createElement("td");
      addtd1 = document.createElement("td");
      addtd2 = document.createElement("td");

      tdtext = document.createTextNode(number);
      td1text = document.createTextNode(time);
      td2text = document.createTextNode(players[b]);

      mytable.appendChild(addtr);

      addtr.appendChild(addtd);
      addtr.appendChild(addtd1);
      addtr.appendChild(addtd2);

      addtd.appendChild(tdtext);
      addtd1.appendChild(td1text);
      addtd2.appendChild(td2text);
      number++;

      createCookie("number", number, 1);
      createCookie("time", time, 1);
      createCookie("Value", players[b], 1);
    }
  }
}

function dispWheel(subLocate) {                                //转盘
  document.getElementById("wheellocate1").innerHTML =
    players[subLocate % players.length];
  document.getElementById("wheellocate2").innerHTML =
    players[(subLocate + 1) % players.length];
  document.getElementById("wheellocate3").innerHTML =
    players[(subLocate + 2) % players.length];
  document.getElementById("wheellocate4").innerHTML =
    players[(subLocate + 3) % players.length];
  document.getElementById("wheellocate5").innerHTML =
    players[(subLocate + 4) % players.length];

  a = (subLocate + 2) % players.length;
}

function disp_content(content) {
  oelement = document.getElementById("dispContentId");
  oelement.innerHTML = content + "";
}

function display() {
  document.getElementById("img").src = img[index];  // 图片轮播
  time = setTimeout("display()", 1000);
  index++;
  if (index >= 3) {
    index = 0;
  }
}

setInterval(function () {
  document.getElementById("date").innerHTML = "您好，当前时间为：" + Date();   //实时时钟
}, 60);

function text() {
  numbertext = getCookie("number");
  timetext = getCookie("time");
  Valuetext = getCookie("Value");

  mytable = document.getElementById("id1");

  addtr = document.createElement("tr");

  addtd = document.createElement("td");
  addtd1 = document.createElement("td");
  addtd2 = document.createElement("td");

  tdtext = document.createTextNode(numbertext);
  td1text = document.createTextNode(timetext);
  td2text = document.createTextNode(Valuetext);

  mytable.appendChild(addtr);

  addtr.appendChild(addtd);
  addtr.appendChild(addtd1);
  addtr.appendChild(addtd2);

  addtd.appendChild(tdtext);
  addtd1.appendChild(td1text);
  addtd2.appendChild(td2text);


}
