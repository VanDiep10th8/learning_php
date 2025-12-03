document.getElementById("dangky").addEventListener("submit", function(event) {
    event.preventDefault();
    let ho = document.getElementById("ho-dem").value.trim();
    let ten = document.getElementById("ten").value.trim();
    let dienthoai = document.getElementById("sdt").value.trim();
    let email = document.getElementById("email").value.trim();

    let tinh = document.getElementById("tinh");
    let tinhText = tinh.options[tinh.selectedIndex].text;
    
    let thanhpho = document.getElementById("tp");
    let thanhphoText = thanhpho.options[thanhpho.selectedIndex].text;


    if (ho === "" || ten === "" || email === "" || dienthoai === "" || 
        tinh.value === "" || thanhpho.value === "") {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
    } else {
        // Hiển thị thông tin trong console
        console.log("Họ đệm:", ho);
        console.log("Tên:", ten);
        console.log("Email:", email);
        console.log("Số điện thoại:", dienthoai);
        console.log("Tỉnh:", tinhText);
        console.log("Thành phố:", thanhphoText);
    }
});