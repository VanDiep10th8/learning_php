<!DOCTYPE html>
<html>
    <body>
    <h1>Tài liệu học Lập Trình Web</h1>
    <?php
    echo "<hr>";
    ?>
    <p>Tài liệu học HTML</p>
    <p>Tài liệu học CSS</p>
    <?php
        echo "<h2>Tài liệu học JavaScript</h2>";
        echo "<h3>Tài liệu học MySQL</h3>";
        echo "<h4>Tài liệu học PHP</h4>";
    ?>
    <hr>
    <?php
        $text = "Từ cơ bản" . " ". "đến nâng cao";
        echo $text;
    ?>


    <hr>
    <?php
    function showValues() {
        $a = 5;
        echo  "số a = " .$a;
    }
    showValues();
    //echo $a; 
    ?>

    </body>
</html>