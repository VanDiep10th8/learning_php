<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>In ra màn hình dãy số từ 1 đến 100</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .number-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
    </style>
</head>
<body>
    <h2>Dãy số từ 1 đến 100</h2>
    <div class="countNumber">
        <?php
        for ($i = 1; $i <= 100; $i++) {
            if ($i % 2 == 0) {
                echo "<span style='color: red; font-weight: bold;'>$i</span>";
            } else {
                echo "<span style='color: green; font-weight: bold; font-style: italic;'> $i </span>";
            }
            echo " ";
        }
        ?>
    </div>
</body>
</html>