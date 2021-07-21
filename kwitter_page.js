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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          var message =document.getElementById("msg").value ;
          firebase.database().ref(room_name).push({
                name:user_name ,
             message:message,
             like:0
          });
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message= message_data['message'];
like= message_data['like'];
name_with_tag="<h4>"+ name + "<img class='user_tick' src = 'tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+ message +"</h4>";
like_with_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+ like +" onclick='updatelike(this.id)'>" ;
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row=name_with_tag+message_with_tag+like_with_tag+span_with_tag;
document.getElementById("output").innerHTML += row ;
//End code
      } });  }); }
getData();
function updatelike(message_id){
      console.log("like button is clicked - "+ message_id ) ;
button_id=message_id;
likes= document.getElementById(button_id).value;
updatelikes= Number(likes)+1 ;
firebase.database().ref(room_name).child(message_id).update({
      like: updatelikes 
}) ;
}
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location="index.html"
  }