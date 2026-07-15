/*
=========================================
LuizaJuFit.com
Version: 1.0
Author: Carlos Avila & ChatGPT
=========================================
*/

const CONFIG = {

    eventDate: "2026-07-19T06:41:00-04:00"

};

document.addEventListener("DOMContentLoaded", () => {

    startCountdown();

});

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function pad(value){

    return String(value).padStart(2,"0");

}

function getRemainingTime(){

    const now = new Date().getTime();

    const target = new Date(CONFIG.eventDate).getTime();

    const difference = target - now;

    if(difference <= 0){

        return null;

    }

    return{

        days:Math.floor(difference/(1000*60*60*24)),

        hours:Math.floor((difference%(1000*60*60*24))/(1000*60*60)),

        minutes:Math.floor((difference%(1000*60*60))/(1000*60)),

        seconds:Math.floor((difference%(1000*60))/1000)

    };

}

function renderCountdown(time){

    if(!time){

        daysElement.textContent="00";
        hoursElement.textContent="00";
        minutesElement.textContent="00";
        secondsElement.textContent="00";

        return;

    }

    daysElement.textContent=pad(time.days);

    hoursElement.textContent=pad(time.hours);

    minutesElement.textContent=pad(time.minutes);

    secondsElement.textContent=pad(time.seconds);

}

function startCountdown(){

    renderCountdown(getRemainingTime());

    setInterval(()=>{

        renderCountdown(getRemainingTime());

    },1000);

}