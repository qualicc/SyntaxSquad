<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @if(isset($title))
        <title>{{$title}}</title>
    @else
        <title>Kalendarz</title>
    @endif
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="{{URL::to('')}}">INDEX</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="{{URL::to('')}}">Home</a>
                    </li>

                </ul>
                
                
                <div class="d-flex ">
                    @auth
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="{{URL::to('company')}}">Zarządzaj danymi firmy</a>
                        </li>
                        @if (Route::has('register'))
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="{{URL::to('reservation')}}">Zarządzaj rezerwacjami</a>
                        </li>
                        @endif
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="{{URL::to('logout')}}">Wyloguj</a>
                        </li>
                    </ul>
                    @else
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="{{ route('login') }}">Login</a>
                        </li>
                        @if (Route::has('register'))
                        <li class="nav-item">
                        <a href="{{ route('register') }}" aria-current="page" class="nav-link active">Register</a>
                        </li>
                        @endif
                    </ul>
                    @endauth
                </div>
            </div>
        </div>
    </nav>
    @if(isset($mainId))
    <main id="{{$mainId}}">
    @else
    <main>
    @endif
    @yield('content')

    </main>
    <footer>
        SyntaxSquad 2023
    </footer>
    <script src="https://kit.fontawesome.com/0d339e049d.js" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.5/index.global.min.js'></script>
    <script src="{{URL::asset('script.js')}}"></script>
</body>
</html>