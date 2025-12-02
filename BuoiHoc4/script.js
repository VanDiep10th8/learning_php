
/*
// Truy xuất và thao tác với DOM trong JavaScript
//Truy xuất bằng ID
let title = document.getElementById("title");
title.style.color = "blue"; // Đổi màu chữ

// Truy xuất bằng TagName
let paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.fontSize = "20px"; // Thay đổi kích thước chữ đoạn đầu tiên

// Truy xuất bằng Class
let descriptions = document.getElementsByClassName("description");
descriptions[1].style.fontWeight = "bold"; // Làm đậm đoạn thứ hai

// Truy xuất bằng CSS Selector
let firstItem = document.querySelector("#list li");
firstItem.style.backgroundColor = "yellow"; // Đổi màu nền phần tử đầu tiên

let allItems = document.querySelectorAll("#list li");
allItems.forEach(item => {
    item.style.margin = "10px"; // Tăng khoảng cách giữa các mục
});

// Hàm thay đổi nội dung khi click button
function changeText() {
    title.textContent = "Nội dung đã thay đổi!";
    descriptions[0].classList.add("highlight"); // Thêm class CSS để đổi màu chữ
}
*/

/*
//phan tu anh thay the
        function replaceElement() {
            // Lấy phần tử ảnh cần thay thế
            let img = document.getElementById("image");

            // Tạo phần tử mới (đoạn văn)
            let newElement = document.createElement("p");
            newElement.textContent = "Hình ảnh đã được thay thế bằng đoạn văn!";
            newElement.style.fontSize = "18px";
            newElement.style.fontWeight = "bold";
            newElement.style.color = "red";

            // Lấy phần tử cha của ảnh
            let parent = img.parentNode;

            // Thay thế ảnh bằng đoạn văn
            parent.replaceChild(newElement, img);
        }


*/







