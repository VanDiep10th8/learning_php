<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="GET/POST" action="URL">
        <input type = "submit" 
            name="submit" value = "???????"/> 
    </form>

    <form action="process.php" method="GET">
        <input type="text" name ="searh">
        <button type="submit">Tìm kiếm</button>
    </form>

    <?php 
     $conn = mysqli_connect("localhost", "root", "");
     if(!$conn) {
        die('Could not connect: ' . mysqli_connect_error());
     }
     echo "truy nhap thanh cong";

     mysqli_close($conn);
    ?>

</body>
</html>