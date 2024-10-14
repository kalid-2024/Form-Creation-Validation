
document.addEventListener('DOMContentLoaded', fetchUserData);

const fetchUserData = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = '';
        const userList  = document.creatElement("ul");
        users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.append(li);
        });
        dataContainer.append(userList);
    }
    catch(error){
        dataContainer.innerHTML = "";
        dataContainer.innerText = "Failed to load user data.";
    }
}