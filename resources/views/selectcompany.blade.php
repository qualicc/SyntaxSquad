@extends('template')

@section('content')
<div class="d-flex justify-content-center flex-column">
  <div class="d-flex justify-content-center">
    <h2>Twoje id to: {{Auth::id()}}</h2>
  </div>
  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
    <label id="createbutton" class="btn btn-outline-primary" for="btnradio1">Stwórz firme</label>

    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
    <label id="questbutton" class="btn btn-outline-primary" for="btnradio2">Wyślij zaproszenie do firmy</label>
  </div>
  <div>
    <div id="create">
      <form action="/company-create" method="POST">
        @CSRF
        <div class="column mx-auto g-3 align-items-center">
          <div class="col-auto">
            <label for="inputcreatename" class="col-form-label">Podaj nazwe firmy: </label>
          </div>
          <div class="col-auto">
            <input name="name" type="text" id="inputcreatename" class="form-control" aria-labelledby="passwordHelpInline" required>
          </div>
          <div class="col-auto">
            <label for="inputcreatenip" class="col-form-label">Podaj NIP firmy: </label>
          </div>
          <div class="col-auto">
            <input name="NIP" type="text" id="inputcreatenip" class="form-control" maxlength="11" minlength="11" aria-labelledby="passwordHelpInline" required>
          </div>
            <button type="submit" class="mx-auto btn btn-primary">Wyślij</button>
        </div>
      </form>
    </div>
    <div id="application">
      <form action="/company-request" method="POST">
        @CSRF
        <div class="column mx-auto g-3 align-items-center">
          <div class="col-auto">
            <label for="inputrequest" class="col-form-label">Podaj ID firmy: </label>
          </div>
          <div class="col-auto">
            <input name="serchcomapny" type="text" id="inputrequest" class="form-control" aria-labelledby="passwordHelpInline" required> 
          </div>
            <button type="submit" class="mx-auto btn btn-primary">Wyślij</button>
        </div>
      </form>
    </div>
  </div>
</div>
@endsection('content')