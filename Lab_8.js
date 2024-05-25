//1. Calculate the number of days between your birthdate and the current date
function daysSinceBirth(birthdate) {
    return moment().diff(moment(birthdate), "days");
  }
  
  // 2. Display the number of years, months,and days between your birthdate and current date
  function ageInYearsMonthsDays(birthdate) {
    let now = moment();
    let birth = moment(birthdate);
    let years = now.diff(birth, "years");
    birth.add(years, "years");
    let months = now.diff(birth, "months");
    birth.add(months, "months");
    let days = now.diff(birth, "days");
    return `${years} years, ${months} months, and ${days} days`;
  }
  //3. Given two dates, display the date closest to the current date
  function closestDate(date1, date2) {
    let now = moment();
    let diff1 = now.diff(moment(date1));
    let diff2 = now.diff(moment(date2));
    return diff1 < diff2 ? date1 : date2;
  }
  //4. Given two dates, display whether the first date is before or after the second date
  function compareDates(date1, date2) {
    if (moment(date1).isBefore(date2)) {
      return `${date1} is before ${date2}`;
    } else if (moment(date1).isAfter(date2)) {
      return `${date1} is after ${date2}`;
    } else {
      return `${date1} and ${date2} are the same`;
    }
  }
  // 5. Display the current time in London
  function currentTimeInLondon() {
    return moment().tz("Europe/London").format("HH:mm:ss");
  }
  
  document.getElementById("daysSinceBirth").innerText =
    daysSinceBirth("1999-4-10");
  document.getElementById("timeSinceBirth").innerText =
    ageInYearsMonthsDays("1999-04-10");
  document.getElementById("closestDate").innerText = closestDate(
    "2002-05-02",
    "2022-06-03"
  );
  document.getElementById("dateComparison").innerText = compareDates(
    "2002-05-02",
    "2022-06-03"
  );
  document.getElementById("timeInLondon").innerText = currentTimeInLondon();
  
  // Update the time in London every second
  setInterval(function () {
    document.getElementById("timeInLondon").innerText = currentTimeInLondon();
  }, 1000);