function daystoevent(eventDaydate){
    let presentDayDate=new Date();
    return daysremaining= Math.ceil((eventDaydate-presentDayDate)/(1000*60*60*24));
    // 1000=>(1sec=1000ms)
    // 60=>(1min=60sec)
    // 60=>(1hr=60min)
    // 24=>(iday=24hr)
}

let eventDaydate=new Date('2023-09-20');

console.log(daystoevent(eventDaydate));