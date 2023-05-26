@extends('template')

@section('content')
<div class="d-flex justify-content-center flex-column">
    <div class="d-flex justify-content-center">
        <h2>ID firmy: {{$companyId}}</h2>
    </div>

    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">id</th>
            <th scope="col">nazwa</th>
            <th scope="col">dzień</th>
            <th scope="col">godzina startu</th>
            <th scope="col">godzina zakończenia</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            @foreach($list as $one)
                <tr>
                    <th scope="row">{{$i}}</th>
                    <td>{{$one['id']}}</td>
                    <td>{{$one['name']}}</td>
                    <td>{{$one['date']}}</td>
                    <td>{{$one['start']}}</td>
                    <td>{{$one['end']}}</td>
                    <td>
                        <a href="delbook/{{$one['id']}}" type="button" class="btn btn-danger">Usuń</a>
                    </td>
                </tr>
                {{$i++}}
            @endforeach
        </tbody>
    </table>
 
</div>
@endsection('content')