

var firebaseConfig = {
      apiKey: "AIzaSyCg3-SBMHf3EhnMpGDVQ5vWyQRZGUO5rzw",
      authDomain: "kwiter-843ae.firebaseapp.com",
      databaseURL: "https://kwiter-843ae-default-rtdb.firebaseio.com",
      projectId: "kwiter-843ae",
      storageBucket: "kwiter-843ae.appspot.com",
      messagingSenderId: "613577736746",
      appId: "1:613577736746:web:318692d46c1a5cfc22b953",
      measurementId: "G-2GPEVXS4TP"
    };
    
    
      firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }