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
    <link rel="stylesheet" href="{{URL::asset('style.css')}}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>
<body>
    <header>
        <div class="d-grid gap-2 d-md-block">
            <a href="{{URL::to('')}}" class="btn btn-primary" type="button">Index</a>
             <a href="" class="btn btn-primary" type="button">Button</a> 
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            @auth
                <a class="btn btn-primary me-md-2" href="{{route('zarzadzanie')}}">Zarządzaj danymi firmy</a>
                <a class="btn btn-primary" href="{{route('zarzadzanie')}}">Zarządzaj rezerwacjami</a>

            @else
                <a href="{{ route('login') }}" class="btn btn-primary me-md-2">Log in</a>
                @if (Route::has('register'))
                    <a href="{{ route('register') }}" class="btn btn-primary">Register</a>
                @endif
            
            @endauth
        </div>
    </header>
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