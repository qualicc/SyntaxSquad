// document.addEventListener('DOMContentLoaded', function() {
    
  
//       var rezerwacja = [];
  
//       for (var key in rezerwacje) {
//           var note = jsonData[key];
//           var title = "nazwa: " + note.name + " start: " + note.start + "  koniec: " + note.end;
//           var event = {
//               title: title,
//               start: note.date + ' ' + note.start,
//               end: note.date + ' ' + note.end
//           };
//           rezerwacja.push(event);
//       }
  
//       console.log(rezerwacja);
  


//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       locale: 'pl',
//       initialView: 'dayGridMonth',
//       selectable: true,
//       selectHelper: true,
//       editable: false,
//       events: rezerwacja,
//       dateClick: function(info) {
//         let currentDate = new Date().toJSON().slice(0, 10);
//       if (currentDate <= info.dateStr) { // date val
//         $( "#formularz" ).css( "display", "flex" );
//         console.log(info.dateStr + "  " + currentDate);
//         $( "#formdane" ).html(`
//         <form method="POST" action="/addEvent">
//           <input type="hidden" name="_token" value="`+csrfToken+`">
//           <input type="date" id="date" name="date" style="display:none" value="`+info.dateStr+`" required>
//           <label for="hours">Zakres godzin:</label>
//           Nazwa 
//           <input type="text" name="eventname" required>
//           <div class="hour-display">
//           OD: 
//             <select name="hourstart" required>
//               <option value="09">09</option>
//               <option value="10">10</option>
//               <option value="11">11</option>
//               <option value="12">12</option>
//               <option value="13">13</option>
//               <option value="14">14</option>
//               <option value="15">15</option>
//               <option value="16">16</option>
//               <option value="17">17</option>
//               <option value="18">18</option>
//             </select><b> : </b>
//             <select name="minutestart" required>
//               <option value="00">00</option>
//               <option value="15">15</option>
//               <option value="30">30</option>
//               <option value="45">45</option>
//             </select>
//           </div>
        
//           <div class="hour-display">
//           DO: 
//             <select name="hourend" required>
//               <option value="09">09</option>
//               <option value="10">10</option>
//               <option value="11">11</option>
//               <option value="12">12</option>
//               <option value="13">13</option>
//               <option value="14">14</option>
//               <option value="15">15</option>
//               <option value="16">16</option>
//               <option value="17">17</option>
//               <option value="18">18</option>
//             </select><b> : </b>
//             <select name="minuteend" required>
//               <option value="00">00</option>
//               <option value="15">15</option>
//               <option value="30">30</option>
//               <option value="45">45</option>
//             </select>
//           </div>
//           <div class="hour-display">
//             <input type="checkbox" name="regulamin" value="1" required>
//             <label for="vehicle3"> Akceptuje <a style="color:white" href="regulamin.pdf">regulamin</a></label>
//           </div>
//           <br>
//           <input type="submit" id="sub" name="sub" value="rezeruje">
//           </form>
//       `);          
//         }


//       },
      
//     });
//     calendar.render();
//     $("#closeForm").click(
//       function() {
//         $("#formularz").css("display", "none")
//       }
//     )

//   });
  $("#createbutton").click(
    function() {
      console.log("click")
      $("#create").css("display", "block");
      $("#application").css("display", "none")
    }
  )
  $("#questbutton").click(
    function() {
      console.log("click")
      $("#create").css("display", "none");
      $("#application").css("display", "block")
    }
  )

  