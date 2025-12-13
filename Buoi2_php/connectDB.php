<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>kết nối csdl sinh viên</title>

    <style>
        h2 {
            color: #a80e1bff; 
            font-family: Arial, sans-serif;
            margin-bottom: 20px;
            text-align: center; 
        }
        table {
            border-collapse: collapse; 
            width: 60%; 
            margin: 0 auto; 
            border: 1px solid #ddd;
        }
        th {
            background-color: #bee0f3ff; 
            color: orangered; 
            padding: 10px;
            text-align: center;
            border: 1px solid #ddd;
        }

        td {
            padding: 10px;
            border: 1px solid #ddd; 
            font-family: Arial, sans-serif;
        }
    </style>

</head>
<body>
    <h2>Danh sách sinh viên</h2>
    <?php 
    $conn = mysqli_connect("localhost", "root", "", "testdb");

    // Kiểm tra kết nối
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }

    //tạo câu truy vấn
    $sql = "Select id, HoTen, NgaySinh, GioiTinh from sinhvien";
    //thực thi câu lệnh truy vấn 
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) >0) 
    {
        echo "<table border ='1' cellpadding='10' cellspacing='0'>";
        echo "<tr>
                <th>ID</th>
                <th>Họ Tên</th>
                <th>Ngày Sinh</th>
                <th>Giới Tính</th>
             </tr>";

        while($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>" .$row["id"] ."</td>";
            echo "<td>" .$row["HoTen"] ."</td>";
            echo "<td>" .$row["NgaySinh"] ."</td>";
            echo "<td>" .$row["GioiTinh"] ."</td>";
            echo "</tr>";
        }
       echo  "</table>";
    }
    else {
        echo " Không có record nào !";
    }
    //ngắt kế nối
    mysqli_close($conn);
    
    ?>
</body>
</html>