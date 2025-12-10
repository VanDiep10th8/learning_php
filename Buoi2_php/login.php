<?php
    session_start();

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $_SESSION['username'] = $_POST['Username'];
        header("Location: welcome.php");
       // var_dump($_SESSION["username"]);
        exit();
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            justify-content: center;
        }
        h3 {
            color: red;
        }

        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin: 8px 0 16px 0;
            display: inline-block;
            border: 1px solid #1d0505ff;
            border-radius: 4px;
            box-sizing: border-box;
        }

        button {
            background-color: greenyellow;
            color: orangered;
            padding: 10px 15px;
            margin-top: 15px;
            border: none;
            border-radius: 4px;
            cursor:  pointer;
            width: 60%;
            font-size: 15px;
            display: block;
            margin: 0 auto;            
        }

    </style>
</head>

<body>
     <h3>Đăng nhập</h3>       
        <form method="post"  action="" >
            <lable ><b>Nhập tên của bạn</b></lable>
            <input type="text" name="Username" require>
            <button type="submit">Đăng nhập</button>
        </form>
</body>
</html>