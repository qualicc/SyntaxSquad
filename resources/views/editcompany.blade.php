@extends('template')

@section('content')
<form action="/company-edit" method="POST">
    @CSRF
    <div class="column mx-auto g-3 align-items-center">
        <div class="col-auto">
        <label for="inputcreatename" class="col-form-label">Podaj nową nazwe firmy: </label>
        </div>
        <div class="col-auto">
        <input type="hidden" name="id" value="{{$company['id']}}">
        <input name="name" type="text" id="inputcreatename" value="{{$company['name']}}" class="form-control" aria-labelledby="passwordHelpInline" required>
        </div>
        <div class="col-auto">
        <label for="inputcreatenip" class="col-form-label">Podaj nowy NIP firmy: </label>
        </div>
        <div class="col-auto">
        <input name="NIP" type="text" id="inputcreatenip" value="{{$company['nip']}}" class="form-control" maxlength="11" minlength="11" aria-labelledby="passwordHelpInline" required>
        </div>
        <button type="submit" class="mx-auto btn btn-primary">Wyślij</button>
    </div>
</form>
@endsection('content')