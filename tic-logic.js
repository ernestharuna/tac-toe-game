window.onload = function () {
   // user authentication
   let user_1 = prompt("Player 1, please input your name!");
   let user_2 = prompt("Player 2, please input your name!");
   if (user_1 == '') {
      user_1 = 'Player 1';
   }
   if (user_2 == '') {
      user_2 = 'Player 2';
   }
   document.getElementById('p1').innerHTML = user_1;
   document.getElementById('p2').innerHTML = user_2;

   // first row
   // let box_a1 = [document.getElementById('a1'), false];
   let box_a1 = { box: document.getElementById('a1'), clicked: false };
   // let box_a2 = [document.getElementById('a2'), false];
   let box_a2 = { box: document.getElementById('a2'), clicked: false };
   // let box_a3 = [document.getElementById('a3'), false];
   let box_a3 = { box: document.getElementById('a3'), clicked: false };

   // second row
   // let box_b1 = [document.getElementById('b1'), false];
   let box_b1 = { box: document.getElementById('b1'), clicked: false };
   // let box_b2 = [document.getElementById('b2'), false];
   let box_b2 = { box: document.getElementById('b2'), clicked: false };
   // let box_b3 = [document.getElementById('b3'), false];
   let box_b3 = { box: document.getElementById('b3'), clicked: false };

   // third row
   // let box_c1 = [document.getElementById('c1'), false];
   let box_c1 = { box: document.getElementById('c1'), clicked: false };
   // let box_c2 = [document.getElementById('c2'), false];
   let box_c2 = { box: document.getElementById('c2'), clicked: false };
   // let box_c3 = [document.getElementById('c3'), false];
   let box_c3 = { box: document.getElementById('c3'), clicked: false };

   // switch turns and X, O
   let myTic; // value of X or O
   let UserMode = true; // true for X, false for O...
   var xyz = [];
   function toggleUser(params) {
      UserMode = !UserMode;
      if (UserMode == true) {
         myTic = 'X';
      } else {
         myTic = 'O';
      }
      if (params.clicked == false) {
         params.clicked = true;
      }

      params.player = myTic;    
      params.box.innerHTML = myTic; // inputes either X or O in box
      xyz.push(params.player)
      auxFunction(params)
      checker();

      function auxFunction(params) {
         console.log(params.clicked) // true or false
         console.log(params.player) // X or O
         console.log(xyz) // array
         if(xyz.length == 9){
            alert('GAME OVER');
            checker();
         }
      }
   }

   function checker(){
      if(box_a1.player && box_a2.player && box_a3.player == "X"){
         alert(`${box_a1.player} has WON!`)
      } else if (box_a1.player && box_a2.player && box_a3.player == "O") {
         
      } 
   }
   // Onclick function for each botton
   box_a1.box.addEventListener('click', function toggle() {
     toggleUser(box_a1);
      box_a1.box.removeEventListener('click', toggle)
   });

   box_a2.box.addEventListener('click', function toggle() {
      toggleUser(box_a2);
      box_a2.box.removeEventListener('click', toggle);
   });

   box_a3.box.addEventListener('click', function toggle() {
      toggleUser(box_a3);
      box_a3.box.removeEventListener('click', toggle);
   });

   box_b1.box.addEventListener('click', function toggle() {
      toggleUser(box_b1);
      box_b1.box.removeEventListener('click', toggle);
   });

   box_b2.box.addEventListener('click', function toggle() {
      toggleUser(box_b2);
      box_b2.box.removeEventListener('click', toggle);
   });

   box_b3.box.addEventListener('click', function toggle() {
      toggleUser(box_b3);
      box_b3.box.removeEventListener('click', toggle);
   });

   box_c1.box.addEventListener('click', function toggle() {
      toggleUser(box_c1);
      box_c1.box.removeEventListener('click', toggle);
   });

   box_c2.box.addEventListener('click', function toggle() {
      toggleUser(box_c2);
      box_c2.box.removeEventListener('click', toggle);
   });

   box_c3.box.addEventListener('click', function toggle() {
      toggleUser(box_c3);
      box_c3.box.removeEventListener('click', toggle);
   });
}


window.onunload = function () {
   let leave = confirm("Do you wanna play more?!");
   if (leave == true) {
      alert("Great!")
   } else {
      alert("Thanks for playing");
   }
}