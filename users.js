const userBtn=document.getElementById("userBtn");
const usersContainer=document.getElementById("usersContainer");
let firstname="First Name:"
let lastname="Last Name:"
let email="Email:";
let br="<br>"
userBtn.onclick=async()=>{
    const response= await fetch("https://reqres.in/api/users?page=1");
    const userData=await response.json();
    const users=userData.data;
    users.forEach((user)=>{
     usersContainer.innerHTML+=`<div class="user">
                                <div id="details">
                                <div>${firstname} ${user.first_name} </div>
                                <div>${lastname} ${user.last_name}</div>
                                <div>${email}${br}${user.email}</div>
                                </div>
                                <img src='${user.avatar}' alt='image'/>
                                </div>
     `
    })
}
