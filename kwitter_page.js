//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBKVOW-MWn7CQLxUyMvE55u4cdWRLOzrjk",
      authDomain: "kwitter-b5316.firebaseapp.com",
      databaseURL: "https://kwitter-b5316-default-rtdb.firebaseio.com",
      projectId: "kwitter-b5316",
      storageBucket: "kwitter-b5316.appspot.com",
      messagingSenderId: "297412377172",
      appId: "1:297412377172:web:bff93ebdf46a15ffabcbc1"
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