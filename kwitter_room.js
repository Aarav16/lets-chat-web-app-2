var firebaseConfig = {
      apiKey: "AIzaSyAZmbC9xfzxqXosviiaLg_ui1qqaU3b4sA",
      authDomain: "lets-chat-9babe.firebaseapp.com",
      databaseURL: "https://lets-chat-9babe-default-rtdb.firebaseio.com",
      projectId: "lets-chat-9babe",
      storageBucket: "lets-chat-9babe.appspot.com",
      messagingSenderId: "461964004091",
      appId: "1:461964004091:web:4b5cfb3d88f46ba529fe5e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user-name") ;
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!!";
function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Make a room"
      });
      localStorage.setItem("room_name",room_name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name" + Room_names);
      row="<div class=roomname id="+Room_names+" onclick=Redirecttoroomname(this.id)>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function Redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
      window.location="index.html"
}