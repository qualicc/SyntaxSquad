@extends('template')

@section('content')
    <div class="d-flex justify-content-center flex-column">
        <div class="d-flex justify-content-center">
            <h2>Lista pracowników i aplikacji do firmy</h2>
        </div>


        <div class="d-flex justify-content-center">
            <h3>Lista pracowników</h3>
        </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">nazwa</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                @foreach($firma as $one)
                    <tr>
                        <th scope="row">{{$i}}</th>
                        <td>{{$one['id']}}</td>
                        <td>{{$one['name']}}</td>
                        <td>
                            <a href="delempl/{{$one['company']}}/{{$one['user']}}" type="button" class="btn btn-danger">Usuń</a>
                        </td>
                    </tr>
                    {{$i++}}
                @endforeach
            </tbody>
        </table>

        <div class="d-flex justify-content-center">
            <h3>Lista aplikacji</h3>
        </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">nazwa</th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                @foreach($aplikacje as $one)
                    <tr>
                        <th scope="row">{{$i}}</th>
                        <td>{{$one['id']}}</td>
                        <td>{{$one['name']}}</td>
                        <td>
                            <a href="acceptapp/{{$one['companyID']}}/{{$one['userID']}}" type="button" class="btn btn-success">Zaakceptuj</a>
                        </td>
                        <td>
                            <a href="delapp/{{$one['companyID']}}/{{$one['userID']}}" type="button" class="btn btn-danger">Usuń</a>
                        </td>
                    </tr>
                    {{$i++}}
                @endforeach
            </tbody>
        </table>
    </div>
@endsection('content')