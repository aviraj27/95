
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAfJJY1isys-EnmNP103w5pS6wH61FJzwc",
      authDomain: "kwitter-96d2b.firebaseapp.com",
      databaseURL: "https://kwitter-96d2b-default-rtdb.firebaseio.com",
      projectId: "kwitter-96d2b",
      storageBucket: "kwitter-96d2b.appspot.com",
      messagingSenderId: "68879377910",
      appId: "1:68879377910:web:bf9add5fe1576812e413d7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addUser()
    {
         user_name= document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
  
          purpose: "adding user"
      });
    }


function getData()
 {
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick=redirectToRoomName(this.id) >#" +Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}





user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
    });
        localStorage.setItem("room_name" , room_name);

        window.location= "kwitter_page.html"
}