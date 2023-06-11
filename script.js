// INPUT TAGS, CLASSES, IDS

const currentTime = document.getElementById('currentTime');
const setAlramNotification = document.getElementById('setAlramNotification');
const popupText = document.getElementById('popup_text');
const popupTime = document.getElementById('popup_alarm_time');
const popUpWindow = document.getElementById('popupWindow');
const popupCrossBtn = document.getElementById('cross');
const DismissBtn = document.getElementById('dismiss');
const SnoozeBtn = document.getElementById('snooze');
const dimBackground = document.getElementById('dimBackground');

// SET ALARM SECTION INPUT 
// Time
const inputHour = document.getElementById('hour');
const inputMinute = document.getElementById('minute');
const inputAMPM = document.getElementById('AMPM');
// IncreButton
const increHour = document.getElementById("increHour");
const increMinute = document.getElementById("increMinute");
const upAMPM = document.getElementById("upAMPM");
// DecreButton
const decreHour = document.getElementById("decreHour");
const decreMinute = document.getElementById("decreMinute");
const downAMPM = document.getElementById("downAMPM");


// INPUT SAVE AND CANCLE BUTTON
const setButton = document.getElementById('setAlarm');
const cancleButton = document.getElementById('cancleAlarm');
// INPUT TEXT
const inputText = document.getElementById('inputText');

// INPUT AUDIO AND TONE
let ringtone = new Audio("/MyAlarm/ringtone.mp3");
let tone = document.getElementById('tone');

// CREATE A VARIABLE
let set, text;
let isAlarmSet = false;
let date, h, m, s;

// Current Time
setInterval(() => {
    date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";

    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h == 0 ? h = 12 : h;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText = `${h} : ${m} : ${s} ${ampm}`;

    runAlarmFunction();

}, 1000);


// Play Sound Function
function playRingtone() {
    ringtone.play();
}

// Function For Run alarm
function runAlarmFunction() {

    if (set == `${h}:${m} ${ampm}`) {

        // ringtone.play();
        playRingtone();
        
        popUpWindow.classList.add("active");
        dimBackground.classList.add("active");

        // isAlarmSet = true;

    }
    
}

// CREATE A VARIABLE 
let hourvalue = 0,
    minutevalue = 0;
let pm_am, hour, minute;


//INPUT HOUR FROM USER
// ++ 
increHour.addEventListener("click", () => {
    // Play tone sound when click btn
    hour = inputHour.innerText;

    hourvalue++;

    if (hourvalue < 10) {
        inputHour.innerText = "0" + hourvalue;
        hour = inputHour.innerText;
    }
    else {
        inputHour.innerText = hourvalue;
        hour = inputHour.innerText;
    }

    if (hourvalue > 11) {
        hourvalue = 0;
    }

});
// --
decreHour.addEventListener("click", () => {
    
    hourvalue--;
    
    if (hourvalue < 10) {
        inputHour.innerText = "0" + hourvalue;
        hour = inputHour.innerText;
    }
    else {
        inputHour.innerText = hourvalue;
        hour = inputHour.innerText;
    }
    
    if (hourvalue < 1) {
        hourvalue = 12;
        inputHour.innerText = hourvalue;
        hour = inputHour.innerText;

        // console.log(inputHour.innerText)
    }

});



// INUPT MINUTES FROM USER
// ++
increMinute.addEventListener("click", () => {
    minute = inputMinute.innerText;

    minutevalue++;

    if (minutevalue < 10) {
        inputMinute.innerText = "0" + minutevalue;
        minute = inputMinute.innerText;
    }
    else {
        inputMinute.innerText = minutevalue;
        minute = inputMinute.innerText;

        if (inputMinute.innerText > 59) {
            minutevalue = 0;
            inputMinute.innerText = "0" + minutevalue;
        }
    }

});
// --
decreMinute.addEventListener("click", () => {

    minutevalue--;

    if (minutevalue < 10) {
        inputMinute.innerText = "0" + minutevalue;
        minute = inputMinute.innerText;

        // console.log(inputMinute.innerText)
    }
    else {
        inputMinute.innerText = minutevalue;
        minute = inputMinute.innerText;
        
        // console.log(inputMinute.innerText)
    }

    if (minutevalue < 0) {
        minutevalue = 59;
        inputMinute.innerText = minutevalue;
        minute = inputMinute.innerText;
    }

});



// INPUT AM/PM FROM USER 
upAMPM.addEventListener("click", () => {

    if (inputAMPM.innerText == "PM") {
        inputAMPM.innerText = "AM";
        // console.log(inputAMPM.innerText);
        pm_am = inputAMPM.innerText;
    }
    else {
        inputAMPM.innerText = "PM";
        pm_am = inputAMPM.innerText;
    }

});

downAMPM.addEventListener("click", () => {

    if (inputAMPM.innerText == "PM") {
        inputAMPM.innerText = "AM";
        pm_am = inputAMPM.innerText;
        // console.log(inputAMPM.innerText);
    }
    else {
        inputAMPM.innerText = "PM";
        pm_am = inputAMPM.innerText;
    }

});


// Set Button
setButton.addEventListener("click", () => setAlarmFunction());
cancleButton.addEventListener("click", () => dismissAlarmFunction());
DismissBtn.addEventListener("click", () => dismissAlarmFunction());
popupCrossBtn.addEventListener("click", () => dismissAlarmFunction());
SnoozeBtn.addEventListener("click", () => snooze());


// Function for save alarm
function setAlarmFunction() {

    if (hour == undefined) {
        inputHour.classList.add("active");
        inputHour.style.color = '#48444d';

        setTimeout(() => {
            inputHour.classList.remove("active");
            inputHour.style.color = '#fff';
        }, 500);

    }
    else {
        setAlramNotification.classList.add("active");
    }

    if (minute == undefined) {
        minute = "00";
    }

    if (pm_am == undefined) {
        pm_am = "PM";
    }

    set = `${hour}:${minute} ${pm_am}`;
    text = inputText.value;
    // SET TIME AND TEXT ON POPUP WINDOW SECTION
    popupText.innerText = text;
    popupTime.innerText = set;

    setTimeout(() => {
        setAlramNotification.classList.remove("active");
    }, 3000);

}

// Function for dismiss alarm
function dismissAlarmFunction() {
    // REMOVE VALUE
    set = ' ';
    inputHour.innerText = "00";
    inputMinute.innerText = "00";
    hourvalue = 0;
    minutevalue = 0;
    hour = undefined;
    minute = undefined;
    pm_am = undefined;
    inputText.value = "";

    // popUpWindow.style.transform = "translateX(400px) scale(1.1)";
    // popUpWindow.style.filter = "blur(5px)";

    popUpWindow.classList.remove("active");
    dimBackground.classList.remove("active");

    // if (isAlarmSet == true) {
    //     ringtone.pause();
    //     isAlarmSet = false;
    // }
    ringtone.pause();
}

// WHEN YOU CLICK SNOOZE BUTTON AFTER 10 SECOND RINTONE START TO PLAY AUTO
function snooze() {

    set = ' ';

    popUpWindow.classList.remove("active");
    dimBackground.classList.remove("active");

    // if (isAlarmSet == true) {
    //     ringtone.pause();
    //     isAlarmSet = true;
    // }
    ringtone.pause();

    setTimeout(() => {
        popUpWindow.classList.add("active");
        dimBackground.classList.add("active");

        playRingtone();
        // ringtone.play();
    }, 10000)

}


// Mouse Over effect on span Box
// Hour Box
increHour.addEventListener("mouseover", ()=> {
    inputHour.classList.add("show");
})
increHour.addEventListener("mouseout", ()=> {
    inputHour.classList.remove("show");
})
decreHour.addEventListener("mouseover", ()=> {
    inputHour.classList.add("show");
})
decreHour.addEventListener("mouseout", ()=> {
    inputHour.classList.remove("show");
})

// Minute Box
increMinute.addEventListener("mouseover", ()=> {
    inputMinute.classList.add("show");
})
increMinute.addEventListener("mouseout", ()=> {
    inputMinute.classList.remove("show");
})
decreMinute.addEventListener("mouseover", ()=> {
    inputMinute.classList.add("show");
})
decreMinute.addEventListener("mouseout", ()=> {
    inputMinute.classList.remove("show");
})

// AM/PM Box
upAMPM.addEventListener("mouseover", ()=> {
    inputAMPM.classList.add("show");
})
upAMPM.addEventListener("mouseout", ()=> {
    inputAMPM.classList.remove("show");
})
downAMPM.addEventListener("mouseover", ()=> {
    inputAMPM.classList.add("show");
})
downAMPM.addEventListener("mouseout", ()=> {
    inputAMPM.classList.remove("show");
})

