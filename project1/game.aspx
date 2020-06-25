<%@ Page Language="C#" AutoEventWireup="true" CodeFile="game.aspx.cs" Inherits="game" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <button id="backToHomePage" style="position:fixed; top:480px; left:10px"><a href="HomePage.aspx">go to homepage</a></button>
    <canvas id="canvas" style="background-color: #212121; border:2px solid black"> </canvas>
    <script src="scripts/game/button.js"></script>
    <script src="scripts/game/bullet.js"></script>
    <script src="scripts/game/Enemy.js"></script>
    <script src="scripts/game/player.js"></script>
    <script src="scripts/game/JavaScript.js"></script>
</body>
</html>
