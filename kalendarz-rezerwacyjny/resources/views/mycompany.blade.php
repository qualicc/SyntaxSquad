@extends('template')

@section('content')
<div class="d-flex justify-content-center flex-column">
  <div class="d-flex justify-content-center">
    <h2>Twoje id: {{Auth::id()}}</h2>
  </div>
  <div class="d-flex justify-content-center">
    <h2>ID towjej firmy: {{$comapny -> id}}</h2>
  </div>
  <div class="d-flex justify-content-center">
    <h2>Nazwa towjej firmy: {{$comapny -> name}}</h2>
  </div>
  <div class="d-flex justify-content-center">
    <h2>NIP towjej firmy: {{$comapny -> nip}}</h2>
  </div>
  <div class="d-flex justify-content-center">
    <a href="{{URL::to('company-edit')}}" type="button" class="btn btn-primary">Edytuj dane firmy</a>
    <a href="{{URL::to('company-leave')}}" type="button" class="btn btn-danger">Odejdź firmy</a>
  </div>
</div>
@endsection('content')