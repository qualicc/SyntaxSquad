<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @if(isset($title))
        <title>{{$title}}</title>
    @else
        <title>Kalendarz</title>
    @endif
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</head>
<body>
    <div class="d-flex justify-content-center flex-column text">
        <h1 class="text-center mb-5 mt-5">Organizer firmowy</h1>
        <div class="d-flex justify-content-evenly mt-5">
            <a href="/calendar" type="button" class="btn btn-outline-primary">Kalendarz</a>
            @guest
            <a href="/login" type="button" class="btn btn-outline-primary">Zaloguj</a>
            <a href="/register" type="button" class="btn btn-outline-primary">Rejestracja</a>
            @endguest
            @auth
            <a href="/logout" type="button" class="btn btn-outline-primary">Wyloguj</a>
            @endauth
        </div>        
    </div>

</body>
</html>