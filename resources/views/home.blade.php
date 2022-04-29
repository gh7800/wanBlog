<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel-home</title>

</head>
<body id="app">
<script type="text/javascript" src="../js/app.js"></script>
<link ref="stylesheet" type="text/css" href="../css/app.css">

<router-view></router-view>
</body>
</html>
