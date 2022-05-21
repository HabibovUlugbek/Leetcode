function dayOfTheWeek(day: number, month: number, year: number): string {
    
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    let newDate = new Date(year + '-' + month + '-' + day);
    
    return days[newDate.getDay()];

};