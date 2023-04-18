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
        //console.log(currentDate); // "2022-06-17"
      if (currentDate <= info.dateStr) { // date val
        $( ".formdane" ).css( "display", "flex" );
        console.log(info.dateStr + "  " + currentDate);
        $( "#formdane" ).html(`
        <label for="name">Sala:</label>
        <select name="sala" id="inputGroupSelect01" onchange="changeRadio()" required>
            <option value="" selected>Wybierz...</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        <br>
        <label for="name">Maksymalna ilość osób / ustawienie sali:</label>
        <div id="options">
          <label><input type="radio" name="rozmiarbiby" value="Small" required><img src="ressources/img/klasaWhite.png" alt="ustawienie w krzałcie sali lekcyjnej"><div class="radioops"></div></label>
          <label><input type="radio" name="rozmiarbiby" value="Medium"><img src="ressources/img/teatrWhite.png" alt="ustawienie w krzałcie teatru"><div class="radioops"></div></label>
          <label><input type="radio" name="rozmiarbiby" value="Large"><img src="ressources/img/uWhite.png" alt="ustawienie w krzałcie podkowy"><div class="radioops"></div></label>
        </div>
        <br>
        <label for="email" >Nazwa firmy:</label>
        <input type="text" id="email" value="" name="companyName" required><br>
        <label for="email" >NIP:</label>
        <input type="number" min="10000000000" max="99999999999" id="email" value="" name="nip" required><br>
        <label for="email" >Email:</label>
        <input type="email" id="email" value="" name="email" required><br>
        <label for="phone">Telefon:</label>
        <input type="number" id="phone" min="100000000" max="999999999" value="" name="phone" required><br>
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
      `);          
        }


      },
      
    });
    calendar.render();
  });