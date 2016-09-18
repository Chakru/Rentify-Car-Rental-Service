<html>
<body>
/*this is for regiS*/

<?php
    $db = pg_connect("host=localhost port=63342 dbname=Rerntify_Backend user=postgres password=abhishek30");
    $query = "INSERT INTO userbase VALUES ('$_POST[uname]','$_POST[uemail]','$_POST[upass]')";
    $result = pg_query($query);
    ?>
    <h1>HEllO</h1>
</body>
</html>
