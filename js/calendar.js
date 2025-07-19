let flagType = false;

function calender(e, type) {
  flagType = type;
  if ($(".c-main").length != 0) {
    $("#calenderMain").remove();
    return false;
  }

  date = new Date();
  currMonth = date.getMonth();
  currYear = date.getFullYear();
  days = [];
  monthArray = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  week = ["w1", "w2", "w3", "w4", "w5", "w6"];
  var cal = `<div class="c-main"> <div class="yearDiv"> <span onclick="setCalender(currMonth,currYear-=1)" class="left"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
</svg></span> <span class="year"></span> <span onclick="setCalender(currMonth,currYear+=1)" class="right"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg></span> </div> <div class="monthDiv"> <span onclick="setCalender(currMonth<1?currMonth=11:currMonth-=1,currYear)" class="left"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
</svg></span> <span class="month"></span> <span onclick="setCalender(currMonth>10?currMonth=0:currMonth+=1,currYear)" class="right"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg></span> </div> <div class="dateMain"> <table id="fillDate"> <tr class="weekT"> <td class="wDay" value="0">D</td> <td class="wDay" value="1">L</td> <td class="wDay" value="2">M</td> <td class="wDay" value="3">M</td> <td class="wDay" value="4">J</td> <td class="wDay" value="5">V</td> <td class="wDay" value="6">S</td> </tr> <tr class="w1"></tr> <tr class="w2"></tr> <tr class="w3"></tr> <tr class="w4"></tr> <tr class="w5"></tr> </table> </div> </div> </div>`;

  $("body").append('<div id="calenderMain"></div>');

  $("#calenderMain").append(cal);
  $(".c-main").fadeIn();

  setCalender(date.getMonth(), date.getFullYear(), e);
}

function setCalender(month, year, e) {
  let selectedDate = "";
  clearCalender();
  let days = [];
  let weekCount = 0;
  let currentDate = new Date(); // Obtener la fecha actual
  console.log(month, year);
  let d = new Date(year, month, 1);
  $(".c-main .month").html(monthArray[d.getMonth()]);
  $(".c-main .year").html(d.getFullYear());
  while (d.getMonth() === month) {
    days.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  for (let i = 0; i < days.length; i++) {
    if (days[i].getDay() <= 5) {
      let dateCell = $("<td>")
        .addClass("date")
        .attr("value", days[i].getDate())
        .text(days[i].getDate());

      if (days[i] < currentDate) {
        dateCell.addClass("disabled"); // Agregar clase disabled a fechas anteriores
      } else {
        dateCell.on("click", function () {
          selectedDate = "";
          selectedDate =
            currYear +
            "-" +
            (String(currMonth + 1).length > 1
              ? currMonth + 1
              : "0" + (currMonth + 1)) +
            "-" +
            (String($(this).attr("value")).length > 1
              ? $(this).attr("value")
              : "0" + $(this).attr("value"));

          $(".c-main").slideUp();
          $("#calenderMain").remove();
          $(e).val(selectedDate.toString());
          if(flagType === 'go'){
            info.flightInfo.flightDates[0] = selectedDate;
            updateLS();
            updateDOM();
          }else if(flagType === 'back'){
            info.flightInfo.flightDates[1] = selectedDate;
            updateLS();
            updateDOM();
          }else{
            console.log("ERROR: Unknown flag)");
          }
        });
      }

      $("." + week[weekCount]).append(dateCell);
    } else {
      let dateCell = $("<td>")
        .addClass("date")
        .attr("value", days[i].getDate())
        .text(days[i].getDate());

      if (days[i] < currentDate) {
        dateCell.addClass("disabled"); // Agregar clase disabled a fechas anteriores
      } else {
        dateCell.on("click", function () {
          selectedDate = "";
          selectedDate =
            currYear +
            "-" +
            (String(currMonth + 1).length > 1
              ? currMonth + 1
              : "0" + (currMonth + 1)) +
            "-" +
            (String($(this).attr("value")).length > 1
              ? $(this).attr("value")
              : "0" + $(this).attr("value"));
          console.log(selectedDate);
          $(".c-main").slideUp();
          $("#calenderMain").remove();
          $(e).val(selectedDate.toString());
          if(flagType === 'go'){
            info.flightInfo.flightDates[0] = selectedDate;
            updateLS();
            updateDOM();
          }else if(flagType === 'back'){
            info.flightInfo.flightDates[1] = selectedDate;
            updateLS();
            updateDOM();
          }else{
            console.log("ERROR: Unknown flag)");
          }
        });
      }

      $("." + week[weekCount]).append(dateCell);
      weekCount += 1;
    }
  }

  let tot;
  if ($(".w1").children().length !== 7) {
    tot = 7 - $(".w1").children().length;
    for (let j = 0; j < tot; j++) {
      console.log("test");
      $(".w1").prepend("<td>&nbsp</td>");
    }
  }

  // Deshabilitar fechas anteriores en la última semana si no está completa
  if ($("." + week[weekCount]).children().length < 7) {
    for (let k = 0; k < 7 - $("." + week[weekCount]).children().length; k++) {
      $("." + week[weekCount]).append("<td>&nbsp</td>");
    }
  }

  $(".date.disabled").on("click", function (event) {
    event.stopPropagation(); // Evitar que se active el evento click en fechas anteriores
  });
}




function clearCalender() {
  $(".w1,.w2,.w3,.w4,.w5").children().remove();
}

$("#calenderMain").click(function () {
  $("#calenderMain").remove();
});