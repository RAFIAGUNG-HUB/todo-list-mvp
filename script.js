// AMBIL DATA LOCAL STORAGE

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];




// FORM TAMBAH TUGAS

const taskForm = document.getElementById("taskForm");


if(taskForm){


taskForm.addEventListener("submit", function(e){


e.preventDefault();



const subject =
document.getElementById("subject").value;


const description =
document.getElementById("description").value;


const deadline =
document.getElementById("deadline").value;



const status =
document.getElementById("status").value;



const task = {


id: Date.now(),

subject: subject,

description: description,

deadline: deadline,

status: status


};



tasks.push(task);



localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);



window.location.href="success.html";


});


}






// TAMPILKAN TABEL TUGAS


const taskTable =
document.getElementById("taskTable");



if(taskTable){



if(tasks.length === 0){


taskTable.innerHTML = `

<tr>

<td colspan="5">

Belum ada tugas

</td>

</tr>

`;


}

else{


taskTable.innerHTML="";



tasks.forEach((task,index)=>{



taskTable.innerHTML += `


<tr>


<td>${index+1}</td>



<td>${task.subject}</td>



<td>${task.deadline}</td>



<td>

<span class="status ${task.status == "Selesai" ? "done" : ""}">

${task.status}

</span>

</td>
