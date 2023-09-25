const resetBtn=document.getElementById('reset')
const gimeboard = document.querySelector(".gameboard");
const array = new Array(400).fill('');

 



for (let i = 0; i < 400; i++) {
    // Create a new div element
    const div = document.createElement("div");
  
    // Set the class attribute to "item"
    div.className = "item";
  
    // Set the ID attribute with a value ranging from 0 to 399
    div.id = i;
  
    // Append the div to the container
    gimeboard.appendChild(div);
  }
  const cells=document.querySelectorAll(".item")
  let score_x=document.getElementById("score_x")
  let score_y=document.getElementById("score_y")
  let gamer_x=document.getElementById("namex")
  let gamer_o=document.getElementById("nameo")
  gamer_x.innerText=localStorage.getItem("namex")
  gamer_o.innerText=localStorage.getItem("nameo")


//    let confettiSettings = { target: 'my-canvas' };
//   let confetti = new ConfettiGenerator(confettiSettings);
//      confetti.render(); 








let player1={
    // symbol: '<i class="fas fa-times"></i>',
    symbol: 'x',
    played: [],
   // score: 0
    score: JSON.parse(localStorage.getItem('scorex'))
}
let player2={
    // symbol: '<i class="far fa-circle"></i>',
    symbol: 'o',
    played:[],
   // score:0
    score:  JSON.parse(localStorage.getItem('scoreo'))

}
score_x.innerHTML=player1.score
score_y.innerHTML=player2.score
let playerturn=true;
let usedCells=[];

// const winCombos=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],

//     [0,3,6],
//     [1,4,7],
//     [2,5,8],

//     [0,4,8],
//     [2,4,6]
// ];

for(let i=0;i<400;i++)
{
    cells[i].addEventListener('click',()=>{
        if(isEmpty(i))
        {
            if(playerturn)
            {
                 addSymbol(player1,i)
                 cells[i].className="item bgone"
                 checkWinner(player1,i)
                 localStorage.setItem('scorex',player1.score)
                //   score_x.innerHTML=localStorage.getItem('scorex') 
                 console.log( 'p1'+player1.played)
                 playerturn=false 

                 

            }
            else
            {
                addSymbol(player2,i)
                cells[i].className="item bgtwo"
                checkWinner2(player2,i)
                localStorage.setItem('scoreo',player2.score)
                // player2.score= JSON.parse(localStorage.getItem('scoreo'))

                // score_y.innerHTML=localStorage.getItem('scoreo')


                console.log( 'p2'+player2.played)
                playerturn=true
            }

        }
        else
        alert('this cell is already choosen !')
  
})
   
}


function addSymbol(player,i)
{
    cells[i].innerHTML=player.symbol
    console.log(i)
    player.played.push(i)
    usedCells.push(i)
    array[i]=player.symbol
}





const lastCaseRow=[];
const firstCaseRow=[];

for(let j=19;j<400;j+=20)
{
    lastCaseRow.push(j)
}
for(let j=0;j<400;j+=20)
{
    firstCaseRow.push(j)
}
console.log(lastCaseRow)
console.log(firstCaseRow)





function checkWinner(player,i)
{
    //let isValueInArray = firstCaseRow.includes(i || i-1 || i-2|| i-3 || i -4);
    let isValueInArray=false;
    let isValueInArray2 = false;
    for (let j = i; j > i - 4; j--) {
        if (firstCaseRow.includes(j)) {
            isValueInArray2 = true;
            break;
        }
    }

    for (let j = i; j < i + 4; j++) {
        if (lastCaseRow.includes(j)) {
            isValueInArray = true;
            break;
        }
    }


        if(i+4<400 && !isValueInArray) 
        {

            console.log('i can enter + ')

            if(cells[i+1].innerHTML==='x' && cells[i+2].innerHTML==='x' && cells[i+3].innerHTML==='x' && cells[i+4].innerHTML==='x') 
            {
                alert(' THE WINNER IS X ')
                incScore(player)

                clear()

            }
          

        }
        if(i-4>=0 && !isValueInArray2)
        {
            console.log('i can enter - ')
            if(cells[i-1].innerHTML==='x' && cells[i-2].innerHTML==='x' && cells[i-3].innerHTML==='x' && cells[i-4].innerHTML==='x' ) 
            {
                alert(' THE WINNER IS X ')
                incScore(player)

                clear()
            }
           

        }
    
        if(i+80<400)
        {
            if(cells[i+20].innerHTML==='x' && cells[i+40].innerHTML==='x' && cells[i+60].innerHTML==='x' && cells[i+80].innerHTML==='x' )
            {
                alert(' THE WINNER IS X ')
                incScore(player)

                clear()
            }
            

        }
        if(i-80>=0)
        {
            if(cells[i-20].innerHTML==='x' && cells[i-40].innerHTML==='x' && cells[i-60].innerHTML==='x' && cells[i-80].innerHTML==='x')
            {
                alert(' THE WINNER IS X ')
        
                incScore(player)

                clear()
            }
            

        }
         if(i+84<400)
         {
            if(cells[i+20+1].innerHTML==='x' && cells[i+40+2].innerHTML==='x' && cells[i+60+3].innerHTML==='x' && cells[i+80+4].innerHTML==='x')
            {
                alert(' THE WINNER IS X ')
                incScore(player)

                clear()
            }
           

         }
         if(i-84>=0)
         {
            if(cells[i-21].innerHTML==='x' && cells[i-42].innerHTML==='x' && cells[i-63].innerHTML==='x' && cells[i-84].innerHTML==='x')
            {
                alert(' THE WINNER IS X  -21')
                incScore(player)

                clear()
            }
           

         }
         if(i+76<400)
         {
            if(cells[i+19].innerHTML==='x' && cells[i+38].innerHTML==='x' && cells[i+57].innerHTML==='x' && cells[i+76].innerHTML==='x')
            {
                alert(' THE WINNER IS X ')
                incScore(player)

                clear()
            }
          

         }
         if(i-76>=0)
         {
            if(cells[i-19].innerHTML==='x' && cells[i-38].innerHTML==='x' && cells[i-57].innerHTML==='x' && cells[i-76].innerHTML==='x')
            {
                alert(' THE WINNER IS X -19 ')
                incScore(player)

                clear()
            }
            

         }











         if(cells[i].innerHTML==='x')
         {
            //==================right and left area =============================
              if(i+3<400 && i-3>=0)
              {
                 if(cells[i+1].innerHTML==='x' && cells[i+2].innerHTML==='x' && cells[i-1].innerHTML==='x' && cells[i-2].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X exp right-left new')
                    incScore(player)
                    clear()



                 }
                 if(cells[i+1].innerHTML==='x' && cells[i-1].innerHTML==='x' && cells[i-2].innerHTML==='x' &&  cells[i-3].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X exp right-left new ')
                    incScore(player)

                    clear()


                    
                 }
                 if(cells[i+1].innerHTML==='x' && cells[i+2].innerHTML==='x' && cells[i+3].innerHTML==='x' && cells[i-1].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X exp right-left new ')
                    incScore(player)

                    clear()


                 }
             }
           
            if(i+1<400 && i-3>=0)
            {
               if(cells[i+1].innerHTML==='x' && cells[i-1].innerHTML==='x' && cells[i-2].innerHTML==='x' &&  cells[i-3].innerHTML==='x')
               {
                alert(' THE WINNER IS X exp right-left new ')
                incScore(player)

                clear()
               }
              

            }
            if(i+3<400 && i-1>=0)
            {
               if(cells[i+1].innerHTML==='x' && cells[i+2].innerHTML==='x' && cells[i+3].innerHTML==='x' &&  cells[i-1].innerHTML==='x')
               {
                alert(' THE WINNER IS X exp right-left new ')
                
                incScore(player)

                clear()
               }
              

            }
            if(i+2<400 && i-2>=0)
            {
               if(cells[i+1].innerHTML==='x' && cells[i+2].innerHTML==='x' && cells[i-1].innerHTML==='x' &&  cells[i-2].innerHTML==='x')
               {
                alert(' THE WINNER IS X exp right-left new ')

                incScore(player)
                
                clear()
               }
              

            }
     //================== End right and left area =============================

     //================ Top and buttom area =============================

             if(i+60<400 && i-60>=0)
             {
                 if(cells[i+20].innerHTML==='x' && cells[i+40].innerHTML==='x' && cells[i-20].innerHTML==='x' && cells[i-40].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X  exp top-bottom')
           
                    incScore(player)

                    clear()


                 }
                 if(cells[i+20].innerHTML==='x' && cells[i-20].innerHTML==='x' && cells[i-40].innerHTML==='x' && cells[i-60].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X   exp top-bottom')
                
                    incScore(player)

                    clear()


                 }
                 if(cells[i+20].innerHTML==='x' && cells[i+40].innerHTML==='x' && cells[i+60].innerHTML==='x' && cells[i-20].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X  exp top-bottom')
                    incScore(player)

                    clear()


                 }
             }

             if(i+20<400 && i-60>=0)
             {
                if(cells[i+20].innerHTML==='x' && cells[i-20].innerHTML==='x' && cells[i-40].innerHTML==='x' &&  cells[i-60].innerHTML==='x')
                {
                    alert(' THE WINNER IS X ')
               
                    incScore(player)

                    clear()
                }
        

             }
             if(i+60<400 && i-20>=0)
             {
                if(cells[i+20].innerHTML==='x' && cells[i+40].innerHTML==='x' && cells[i+60].innerHTML==='x' &&  cells[i-20].innerHTML==='x')
                {
                    alert(' THE WINNER IS X  ')
                    incScore(player)

                    clear()
                }
        

             }
             if(i+40<400 && i-40>=0)
             {
                if(cells[i+20].innerHTML==='x' && cells[i+40].innerHTML==='x' && cells[i-20].innerHTML==='x' &&  cells[i-40].innerHTML==='x')
                {
                    alert(' THE WINNER IS X  ')
                    incScore(player)
                    clear()
                }
          

             }

     //================ End  Top and buttom area =============================


     //================ area diagonal top left bottom right  =============================

 
              if(i+63<400 && i-63>=0)
             {
                 if(cells[i-21].innerHTML==='x' && cells[i+21].innerHTML==='x' && cells[i+42].innerHTML==='x' && cells[i+63].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X exp diagonal left-top_buttom-right yess')
                    incScore(player)

                    clear()


                 }
                 if(cells[i-21].innerHTML==='x' && cells[i-42].innerHTML==='x' && cells[i-63].innerHTML==='x' && cells[i+21].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X exp diagonal left-top_buttom-right yess')
                    incScore(player)

                    clear()


                 }
                 if(cells[i-21].innerHTML==='x' && cells[i-42].innerHTML==='x' && cells[i+21].innerHTML==='x' && cells[i+42].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X exp diagonal left-top_buttom-right yess')
                    incScore(player)

                    clear()


                 }
             }
             if(i+21<400 && i-63>=0)
             {
                if(cells[i+21].innerHTML==='x' && cells[i-21].innerHTML==='x' && cells[i-42].innerHTML==='x' &&  cells[i-63].innerHTML==='x')
                {
                    alert(' THE WINNER IS X ')
                    incScore(player)

                    clear()
                }
      

             }
             if(i+63<400 && i-21>=0)
             {
                if(cells[i+21].innerHTML==='x' && cells[i+42].innerHTML==='x' && cells[i+63].innerHTML==='x' &&  cells[i-21].innerHTML==='x')
                {
                    alert(' THE WINNER IS X  ')
                    incScore(player)

                    clear()
                }
        

             }
             if(i+42<400 && i-42>=0)
             {
                if(cells[i+21].innerHTML==='x' && cells[i+42].innerHTML==='x' && cells[i-21].innerHTML==='x' &&  cells[i-42].innerHTML==='x')
                {
                    alert(' THE WINNER IS X  ')
                    incScore(player)

                    clear()
                }
          

             }

             
         //================ End of area diagonal top left bottom right  =============================

          //================  area diagonal top right bottom left  =============================

             if(i+57<400 && i-57>=0)
             {
                 if(cells[i-19].innerHTML==='x' && cells[i-38].innerHTML==='x' && cells[i+19].innerHTML==='x' && cells[i+38].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X exp diagonal right-top_buttom-left no ')
                    incScore(player)

                    clear()


                 }
                 if(cells[i-19].innerHTML==='x' && cells[i+19].innerHTML==='x' && cells[i+38].innerHTML==='x' && cells[i+57].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X exp diagonal right-top_buttom-left no')
                    incScore(player)

                    clear()


                 }
                 if(cells[i-19].innerHTML==='x' && cells[i-38].innerHTML==='x' && cells[i-57].innerHTML==='x' && cells[i+19].innerHTML==='x')
                 {
                    alert(' THE WINNER IS X exp diagonal right-top_buttom-left no ')

                    incScore(player)
                
                    clear()


                 }
             }

             if(i+19<400 && i-57>=0)
             {
                if(cells[i+19].innerHTML==='x' && cells[i-19].innerHTML==='x' && cells[i-38].innerHTML==='x' &&  cells[i-57].innerHTML==='x')
                {
                    alert(' THE WINNER IS X ')
                    incScore(player)

                    clear()


                }
             }
             if(i+57<400 && i-19>=0)
             {
                if(cells[i+19].innerHTML==='x' && cells[i+38].innerHTML==='x' && cells[i+57].innerHTML==='x' &&  cells[i-19].innerHTML==='x')
                {
                    alert(' THE WINNER IS X  ')
                    incScore(player)
                    clear()
                }
                
            

             }
             if(i+38<400 && i-38>=0)
             {
                if(cells[i+19].innerHTML==='x' && cells[i+38].innerHTML==='x' && cells[i-19].innerHTML==='x' &&  cells[i-38].innerHTML==='x')
                {
                    alert(' THE WINNER IS X ')
                    incScore(player)
                    clear()
                }
                
                
             }
   //================ End   area diagonal top right bottom left  =============================

      
         } 
 
   
}



function checkWinner2(player2,i)
{
    //let isValueInArray = firstCaseRow.includes(i || i-1 || i-2|| i-3 || i -4);
    let isValueInArray=false;
    let isValueInArray2 = false;
    for (let j = i; j > i - 4; j--) {
        if (firstCaseRow.includes(j)) {
            isValueInArray2 = true;
            break;
        }
    }

    for (let j = i; j < i + 4; j++) {
        if (lastCaseRow.includes(j)) {
            isValueInArray = true;
            break;
        }
    }


        if(i+4<400 && !isValueInArray) 
        {

            console.log('i can enter + ')

            if(cells[i+1].innerHTML==='o' && cells[i+2].innerHTML==='o' && cells[i+3].innerHTML==='o' && cells[i+4].innerHTML==='o') 
            {
                alert(' THE WINNER IS O ')
                incScore(player2)

                clear()

            }
          

        }
        if(i-4>=0 && !isValueInArray2)
        {
            console.log('i can enter - ')
            if(cells[i-1].innerHTML==='o' && cells[i-2].innerHTML==='o' && cells[i-3].innerHTML==='o' && cells[i-4].innerHTML==='o' ) 
            {
                alert(' THE WINNER IS O ')
                incScore(player2)

                clear()
            }
           

        }
    
        if(i+80<400)
        {
            if(cells[i+20].innerHTML==='o' && cells[i+40].innerHTML==='o' && cells[i+60].innerHTML==='o' && cells[i+80].innerHTML==='o' )
            {
                alert(' THE WINNER IS O ')
                incScore(player2)

                clear()
            }
            

        }
        if(i-80>=0)
        {
            if(cells[i-20].innerHTML==='o' && cells[i-40].innerHTML==='o' && cells[i-60].innerHTML==='o' && cells[i-80].innerHTML==='o')
            {
                alert(' THE WINNER IS O ')
                incScore(player2)

                clear()
            }
            

        }
         if(i+84<400)
         {
            if(cells[i+20+1].innerHTML==='o' && cells[i+40+2].innerHTML==='o' && cells[i+60+3].innerHTML==='o' && cells[i+80+4].innerHTML==='o')
            {
                alert(' THE WINNER IS O ')
                incScore(player2)

                clear()
            }
           

         }
         if(i-84>=0)
         {
            if(cells[i-21].innerHTML==='o' && cells[i-42].innerHTML==='o' && cells[i-63].innerHTML==='o' && cells[i-84].innerHTML==='o')
            {
                alert(' THE WINNER IS O  -21')
                incScore(player2)

                clear()
            }
           

         }
         if(i+76<400)
         {
            if(cells[i+19].innerHTML==='o' && cells[i+38].innerHTML==='o' && cells[i+57].innerHTML==='o' && cells[i+76].innerHTML==='o')
            {
                alert(' THE WINNER IS O ')
                incScore(player2)

                clear()
            }
          

         }
         if(i-76>=0)
         {
            if(cells[i-19].innerHTML==='o' && cells[i-38].innerHTML==='o' && cells[i-57].innerHTML==='o' && cells[i-76].innerHTML==='o')
            {
                alert(' THE WINNER IS O -19 ')
                incScore(player2)

                clear()
            }
            

         }











         if(cells[i].innerHTML==='o')
         {
            //==================right and left area =============================
              if(i+3<400 && i-3>=0)
              {
                 if(cells[i+1].innerHTML==='o' && cells[i+2].innerHTML==='o' && cells[i-1].innerHTML==='o' && cells[i-2].innerHTML==='o')
                 {
                    alert(' THE WINNER IS O exp right-left new')
                    incScore(player2)

                    clear()



                 }
                 if(cells[i+1].innerHTML==='o' && cells[i-1].innerHTML==='o' && cells[i-2].innerHTML==='o' &&  cells[i-3].innerHTML==='o')
                 {
                    alert(' THE WINNER IS O exp right-left new ')
                    incScore(player2)

                    clear()


                    
                 }
                 if(cells[i+1].innerHTML==='o' && cells[i+2].innerHTML==='o' && cells[i+3].innerHTML==='o' && cells[i-1].innerHTML==='o')
                 {
                    alert(' THE WINNER IS O exp right-left new ')
                    incScore(player2)

                    clear()


                 }
             }
           
            if(i+1<400 && i-3>=0)
            {
               if(cells[i+1].innerHTML==='o' && cells[i-1].innerHTML==='o' && cells[i-2].innerHTML==='o' &&  cells[i-3].innerHTML==='o')
               {
                alert(' THE WINNER IS O exp right-left new ')
                incScore(player2)

                clear()
               }
              

            }
            if(i+3<400 && i-1>=0)
            {
               if(cells[i+1].innerHTML==='o' && cells[i+2].innerHTML==='o' && cells[i+3].innerHTML==='o' &&  cells[i-1].innerHTML==='o')
               {
                alert(' THE WINNER IS O exp right-left new ')
                incScore(player2)

                clear()
               }
              

            }
            if(i+2<400 && i-2>=0)
            {
               if(cells[i+1].innerHTML==='o' && cells[i+2].innerHTML==='o' && cells[i-1].innerHTML==='o' &&  cells[i-2].innerHTML==='o')
               {
                alert(' THE WINNER IS O exp right-left new ')
                incScore(player2)

                clear()
               }
              

            }
     //================== End right and left area =============================

     //================ Top and buttom area =============================

             if(i+60<400 && i-60>=0)
             {
                 if(cells[i+20].innerHTML==='o' && cells[i+40].innerHTML==='o' && cells[i-20].innerHTML==='o' && cells[i-40].innerHTML==='o')
                 {
                    alert(' THE WINNER IS O  exp top-bottom')
                    incScore(player2)

                    clear()


                 }
                 if(cells[i+20].innerHTML==='o' && cells[i-20].innerHTML==='o' && cells[i-40].innerHTML==='o' && cells[i-60].innerHTML==='o')
                 {
                    alert(' THE WINNER IS O   exp top-bottom')
                    incScore(player2)

                    clear()


                 }
                 if(cells[i+20].innerHTML==='o' && cells[i+40].innerHTML==='o' && cells[i+60].innerHTML==='o' && cells[i-20].innerHTML==='o')
                 {
                    alert(' THE WINNER IS O  exp top-bottom')
                    incScore(player2)

                    clear()


                 }
             }

             if(i+20<400 && i-60>=0)
             {
                if(cells[i+20].innerHTML==='o' && cells[i-20].innerHTML==='o' && cells[i-40].innerHTML==='o' &&  cells[i-60].innerHTML==='o')
                {
                    alert(' THE WINNER IS O ')
                    incScore(player2)

                    clear()
                }
        

             }
             if(i+60<400 && i-20>=0)
             {
                if(cells[i+20].innerHTML==='o' && cells[i+40].innerHTML==='o' && cells[i+60].innerHTML==='o' &&  cells[i-20].innerHTML==='o')
                {
                    alert(' THE WINNER IS O ')
                    incScore(player2)

                    clear()
                }
        

             }
             if(i+40<400 && i-40>=0)
             {
                if(cells[i+20].innerHTML==='o' && cells[i+40].innerHTML==='o' && cells[i-20].innerHTML==='o' &&  cells[i-40].innerHTML==='o')
                {
                    alert(' THE WINNER IS O  ')
                    incScore(player2)

                    clear()
                }
          

             }

     //================ End  Top and buttom area =============================


     //================ area diagonal top left bottom right  =============================

 
              if(i+63<400 && i-63>=0)
             {
                 if(cells[i-21].innerHTML==='o' && cells[i+21].innerHTML==='o' && cells[i+42].innerHTML==='o' && cells[i+63].innerHTML==='o')
                 {
                    alert(' THE WINNER IS O exp diagonal left-top_buttom-right yess')
                    incScore(player2)

                    clear()


                 }
                 if(cells[i-21].innerHTML==='o' && cells[i-42].innerHTML==='o' && cells[i-63].innerHTML==='o' && cells[i+21].innerHTML==='o')
                 {
                    alert(' THE WINNER IS O exp diagonal left-top_buttom-right yess')
                    incScore(player2)

                    clear()


                 }
                 if(cells[i-21].innerHTML==='o' && cells[i-42].innerHTML==='o' && cells[i+21].innerHTML==='o' && cells[i+42].innerHTML==='o')
                 {
                    alert(' THE WINNER IS O exp diagonal left-top_buttom-right yess')
                    incScore(player2)

                    clear()


                 }
             }
             if(i+21<400 && i-63>=0)
             {
                if(cells[i+21].innerHTML==='o' && cells[i-21].innerHTML==='o' && cells[i-42].innerHTML==='o' &&  cells[i-63].innerHTML==='o')
                {
                    alert(' THE WINNER IS O ')
                    incScore(player2)

                    clear()
                }
      

             }
             if(i+63<400 && i-21>=0)
             {
                if(cells[i+21].innerHTML==='o' && cells[i+42].innerHTML==='o' && cells[i+63].innerHTML==='o' &&  cells[i-21].innerHTML==='o')
                {
                    alert(' THE WINNER IS O  ')
                    incScore(player2)

                    clear()
                }
        

             }
             if(i+42<400 && i-42>=0)
             {
                if(cells[i+21].innerHTML==='o' && cells[i+42].innerHTML==='o' && cells[i-21].innerHTML==='o' &&  cells[i-42].innerHTML==='o')
                {
                    alert(' THE WINNER IS O  ')
                    incScore(player2)

                    clear()
                }
          

             }

             
         //================ End of area diagonal top left bottom right  =============================

          //================  area diagonal top right bottom left  =============================

             if(i+57<400 && i-57>=0)
             {
                 if(cells[i-19].innerHTML==='o' && cells[i-38].innerHTML==='o' && cells[i+19].innerHTML==='o' && cells[i+38].innerHTML==='o')
                 {
                    alert(' THE WINNER IS P exp diagonal right-top_buttom-left no ')
                    incScore(player2)

                    clear()


                 }
                 if(cells[i-19].innerHTML==='o' && cells[i+19].innerHTML==='o' && cells[i+38].innerHTML==='o' && cells[i+57].innerHTML==='o')
                 {
                    alert(' THE WINNER IS O exp diagonal right-top_buttom-left no')
                    incScore(player2)

                    clear()


                 }
                 if(cells[i-19].innerHTML==='o' && cells[i-38].innerHTML==='o' && cells[i-57].innerHTML==='o' && cells[i+19].innerHTML==='o')
                 {
                    alert(' THE WINNER IS O exp diagonal right-top_buttom-left no ')
                    incScore(player2)

                    clear()


                 }
             }

             if(i+19<400 && i-57>=0)
             {
                if(cells[i+19].innerHTML==='o' && cells[i-19].innerHTML==='o' && cells[i-38].innerHTML==='o' &&  cells[i-57].innerHTML==='o')
                {
                    alert(' THE WINNER IS O ')
                    incScore(player2)

                    clear()


                }
             }
             if(i+57<400 && i-19>=0)
             {
                if(cells[i+19].innerHTML==='o' && cells[i+38].innerHTML==='o' && cells[i+57].innerHTML==='o' &&  cells[i-19].innerHTML==='o')
                {
                    alert(' THE WINNER IS O  ')
                    incScore(player2)

                    clear()
                }
                
            

             }
             if(i+38<400 && i-38>=0)
             {
                if(cells[i+19].innerHTML==='o' && cells[i+38].innerHTML==='o' && cells[i-19].innerHTML==='o' &&  cells[i-38].innerHTML==='o')
                {
                    alert(' THE WINNER IS O ')
                    incScore(player2)

                    clear()
                }
                
                
             }
   //================ End   area diagonal top right bottom left  =============================

      
         } 
 
   
}


// function checkWinner2(player,i)
// {
//     //let isValueInArray = firstCaseRow.includes(i || i-1 || i-2|| i-3 || i -4);
//     let isValueInArray=false;
//     let isValueInArray2 = false;
//     for (let j = i; j > i - 4; j--) {
//         if (firstCaseRow.includes(j)) {
//             isValueInArray2 = true;
//             break;
//         }
//     }

//     for (let j = i; j < i + 4; j++) {
//         if (lastCaseRow.includes(j)) {
//             isValueInArray = true;
//             break;
//         }
//     }


//         if(i+4<400 && !isValueInArray) 
//         {

//             console.log('i can enter + ')

//             if(cells[i+1].innerHTML==='o' && cells[i+2].innerHTML==='o' && cells[i+3].innerHTML==='o' && cells[i+4].innerHTML==='o') 
//             alert(' THE WINNER IS O ')
//         }
//         if(i-4>=0 && !isValueInArray2)
//         {
//             console.log('i can enter - ')
//             if(cells[i-1].innerHTML==='o' && cells[i-2].innerHTML==='o' && cells[i-3].innerHTML==='o' && cells[i-4].innerHTML==='o' ) 
//             alert(' THE WINNER IS O ')
//         }
//         if(cells[i].innerHTML==='o' && i+21<399 && i+19<399 )
//         {
//             if(cells[i+1].innerHTML==='o' && cells[i+2].innerHTML==='o' && cells[i-1].innerHTML==='o' && cells[i-2].innerHTML==='o')
//             alert(' THE WINNER IS O ')
//             if(cells[i+20].innerHTML==='o' && cells[i+40].innerHTML==='o' && cells[i-20].innerHTML==='o' && cells[i-40].innerHTML==='o')
//             alert(' THE WINNER IS O ')
//             if(cells[i+21].innerHTML==='o' && cells[i+42].innerHTML==='o' && cells[i-21].innerHTML==='o' && cells[i-42].innerHTML==='o')
//             alert(' THE WINNER IS O ')
//             if(cells[i+19].innerHTML==='o' && cells[i+38].innerHTML==='o' && cells[i-19].innerHTML==='o' && cells[i-38].innerHTML==='o')
//             alert(' THE WINNER IS O ')
//         } 
//         if(i+80<400)
//         {
//             if(cells[i+20].innerHTML==='o' && cells[i+40].innerHTML==='o' && cells[i+60].innerHTML==='o' && cells[i+80].innerHTML==='o' )
//             alert(' THE WINNER IS O ')
//         }
//         if(i-80>=0)
//         {
//             if(cells[i-20].innerHTML==='o' && cells[i-40].innerHTML==='o' && cells[i-60].innerHTML==='o' && cells[i-80].innerHTML==='o')
//             alert(' THE WINNER IS O ')
//         }
//          if(i+84<400)
//          {
//             if(cells[i+20+1].innerHTML==='o' && cells[i+40+2].innerHTML==='o' && cells[i+60+3].innerHTML==='o' && cells[i+80+4].innerHTML==='o')
//             alert(' THE WINNER IS O ')
//          }
//          if(i-84>=0)
//          {
//             if(cells[i-20-1].innerHTML==='o' && cells[i-40-2].innerHTML==='o' && cells[i-60-3].innerHTML==='o' && cells[i-80-4].innerHTML==='o')
//             alert(' THE WINNER IS O ')
//          }
//          if(i+76<400)
//          {
//             if(cells[i+19].innerHTML==='o' && cells[i+38].innerHTML==='o' && cells[i+57].innerHTML==='o' && cells[i+76].innerHTML==='o')
//             alert(' THE WINNER IS O ')
//          }
//          if(i-76>=0)
//          {
//             if(cells[i-19].innerHTML==='o' && cells[i-38].innerHTML==='o' && cells[i-57].innerHTML==='o' && cells[i-76].innerHTML==='o')
//             alert(' THE WINNER IS O ')
//          }
   
// }



function isEmpty(i)
{
    return usedCells.includes(i) ? false : true
}

function clear()
{
    cells.forEach(cell=>{
        cell.innerHTML=''
        cell.className='item'

    })
    usedCells=[];
    player1.played=[];
    player2.played=[];
    for(let i=0;i<400;i++)
    array[i]=''

}

function incScore(player)
{
    player.score+=1;
    // score_x.innerHTML=player.score
    // score_y.innerHTML=player.score
    score_x.innerHTML=player1.score
    score_y.innerHTML=player2.score

  



}

resetBtn.addEventListener("click",clear)






