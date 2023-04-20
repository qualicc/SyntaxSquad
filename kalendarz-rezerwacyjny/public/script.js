document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'pl',
      initialView: 'dayGridMonth',
      selectable: true,
      selectHelper: true,
      editable: false,
      dateClick: function(info) {
        let currentDate = new Date().toJSON().slice(0, 10);
      if (currentDate <= info.dateStr) { // date val
        $( "#formdane" ).css( "display", "flex" );
        console.log(info.dateStr + "  " + currentDate);
        $( "#formdane" ).html(`
        <i id="closeForm" class="fa-solid fa-xmark fa-3x"></i>
        <form method="POST">
          <input type="date" id="date" name="date" style="display:none" value="`+info.dateStr+`" required>
          <label for="hours">Zakres godzin:</label>
          <div class="hour-display">
          OD: 
            <select name="hourstart" required>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
            </select><b> : </b>
            <select name="minutestart" required>
              <option value="00">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
          </div>
        
          <div class="hour-display">
          DO: 
            <select name="hourend" required>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
            </select><b> : </b>
            <select name="minuteend" required>
              <option value="00">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
          </div>
          <div class="hour-display">
            <input type="checkbox" name="regulamin" value="1" required>
            <label for="vehicle3"> Akceptuje <a style="color:white" href="regulamin.pdf">regulamin</a></label>
          </div>
          <br>
          <input type="submit" id="sub" name="sub" value="rezeruje">
          </form>
      `);          
        }


      },
      
    });
    calendar.render();
    $("#closeForm").click(
      function() {
        $("#formdane").css("display", "none")
      }
    )
  });