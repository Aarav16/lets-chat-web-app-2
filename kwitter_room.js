var firebaseConfig = {
      apiKey: "AIzaSyBKVOW-MWn7CQLxUyMvE55u4cdWRLOzrjk",
      databaseURL:"https://kwitter-b5316-default-rtdb.firebaseio.com/",
      authDomain: "kwitter-b5316.firebaseapp.com",
      projectId: "kwitter-b5316",
      storageBucket: "kwitter-b5316.appspot.com",
      messagingSenderId: "297412377172",
      appId: "1:297412377172:web:bff93ebdf46a15ffabcbc1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
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