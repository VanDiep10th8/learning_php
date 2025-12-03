        function xacminh() {
            let username = document.getElementById("username").value.trim();
            let password = document.getElementById("password").value.trim();
            
            let messageDiv = document.getElementById("message");

            messageDiv.innerHTML = "";
            messageDiv.className = "";

            if (username === "" || password === "") {
                messageDiv.innerHTML = "LỖI: Vui lòng nhập đầy đủ tên người dùng và mật khẩu.";
                messageDiv.classList.add("error"); 

            } else {
                messageDiv.innerHTML = "Xác minh thành công!";
                messageDiv.classList.add("success");
            }
        }