function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

//---------------------------------------
const group = [
    "LÒ VĂN ĐIỆP",
    "PHẠM HỮU CẢNH",
    "TRẦN TRUNG NGUYÊN",
    "ĐẶNG VĂN MINH"
];


for (let i = 0; i < 5; i++) {
    let title = document.createElement('h1');
    title.textContent = `Thành viên thứ ${i + 1}: ${group[i]}`;
    title.style.color = 'blue';
    title.style.textAlign = 'center';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.fontSize = '24px';
    document.body.appendChild(title);
}


for (let i = 1; i < 5; i++) {
    console.log(`${i}. ${group[i - 1]}`);
}
//click nút
document.getElementById("myBtn").onclick = function() {
    alert("Bạn đã nhấn vào nút!");
}


//di chuột vào nút
document.getElementById("myButton").onmouseover = function() {
    alert("Sự kiện đã được kích hoạt khi di chuột vào nút!");
}



//câu lệnh điều kiện    

let score = 85;

if (score >= 90) {  
    console.log("xếp loại A");
}   
else if (score >= 75) {  
    console.log("xếp loại B");
}
else  {  
    console.log("xếp loại C");
}

//câu lệnh switch case
let day = 3;

switch (day) {
    case 1:
        console.log("Thứ Hai");
        break;
    case 2:
        console.log("Thứ Ba");
        break;
    case 3:
        console.log("Thứ Tư");
        break;
    case 4:
        console.log("Thứ Năm");
        break;  
    case 5:
        console.log("Thứ Sáu");
        break;
    case 6:
        console.log("Thứ Bảy");
        break;
    case 7:
        console.log("Chủ Nhật");
        break;
    default:
        console.log("Ngày không hợp lệ");
}


///for in
let person = {
    name: "Lò Văn Điệp",
    age: 23,
    city: "Hà Nội"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//while
let i =1;
while (i <= 5) {
    console.log("Số: " + i);
    i++;
}

//do while
let j = 1;
do {
    console.log("Số: " + j);
    j++;
} while (j <= 5);

//break
for (let k = 1; k <= 10; k++) {
    if (k === 6) {  
        break;
    }
    console.log(k);
}

//continue
for(let i=1; i<=10; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}

//sự kiện di chuột
document.getElementById("hoverBtn").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});


//sự kiện form
document.getElementById("myForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    if (name === "") {
        alert("Vui lòng nhập họ tên!");
        event.preventDefault();
    }
});      

//sự kiện bàn phím
document.getElementById("inputBox").addEventListener("keydown", function(event) {
    console.log("Phím vừa nhấn: " + event.key);
});
