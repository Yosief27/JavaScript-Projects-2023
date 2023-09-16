const dayEl=document.getElementById('days-c');
const hourEl=document.getElementById('hours-c');
const minuteEl=document.getElementById('minutes-c');
const secondEl=document.querySelector('#seconds-c');


const newYearsDate=new Date("1 Jan 2024");
const getDateDiff=()=>{

const currentDate=new Date();
const differenceDate=(newYearsDate-currentDate)/1000;
const date=Math.floor(differenceDate/3600/24);
const hours=Math.floor(differenceDate/3600)%24;
const minutes=Math.floor(differenceDate/60)%60;
const second=Math.floor(differenceDate)%60;
console.log(`Days-${date},Days-${hours},Days-${minutes},Days-${second}`);
console.log(secondEl);
secondEl.innerHTML=formatTime(second);
minuteEl.innerHTML=formatTime(minutes);
hourEl.innerHTML=formatTime(hours);
dayEl.innerHTML=date;

}
const formatTime=(time)=>{
    return time <10?(`0${time}`):time
}

//setInterval(()=>{getDateDiff()
//},1000);