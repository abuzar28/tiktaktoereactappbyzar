import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Square from './Component/Square'
import { Pattern } from './Component/Pattren';


function App() {
  const [board, setboard] = useState(["","","","","","","","",""]);
  const [player,setplayer]=useState("o");
  const [s,sets]=useState(0);
  const [o,seto]=useState(false);
  const [result,setResult]=useState({winner: "none" ,state: "none"})
  var x=0;

  useEffect(()=>{
    checkWin();
    checktie();

    if(player=="x"){
      setplayer("O");
    }
    else
    setplayer("x");
  },[board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
    if(result.state == "tied")
    {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
    
  }, [result]);

  function chooseSquare(avalue){
    setboard(board.map((val,index)=>{
      if(index==avalue && board[avalue]=="")
         return player;

         return val;
    }))


    }
    const checkWin = () => {
     
      Pattern.forEach((currPattern) => {
        const firstPlayer = board[currPattern[0]];
        if (firstPlayer == "") return;
        let foundWinningPattern = true;
        currPattern.forEach((idx) => {
          if (board[idx] != firstPlayer) {
            foundWinningPattern = false;
          }
        });
  
        if (foundWinningPattern) {
          setResult({ winner: player, state: "Won" });
        }
      });

    };

    function checktie(){
           seto(true);
         
           board.forEach((i)=>{
                if(i=="")
                 seto(false);
              } )
     
              if(o){
                alert("game tied");
                restartGame();
              }
              

            };
    
    const restartGame = () => {
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setPlayer("O");
    };

  return (
    <div className='App'>
      <div className='board'>
        <div className='row'>
          <Square val={board[0]} chooseSquare={()=>{
            chooseSquare(0);
          }}/>
          <Square val={board[1]} chooseSquare={()=>{
            chooseSquare(1);
          }} />
          <Square val={board[2]} chooseSquare={()=>{
            chooseSquare(2);
          }}/>
          
        </div>
        <div className='row'>
          <Square val={board[3]} chooseSquare={()=>{
            chooseSquare(3);
          }}/>
          <Square val={board[4]} chooseSquare={()=>{
            chooseSquare(4);
          }}/>
          <Square val={board[5]} chooseSquare={()=>{
            chooseSquare(5);
          }}/>
        </div>
        <div className='row'>
          <Square val={board[6]} chooseSquare={()=>{
            chooseSquare(6);
          }}/>
          <Square val={board[7]} chooseSquare={()=>{
            chooseSquare(7);
          }}/>
          <Square val={board[8]} chooseSquare={()=>{
            chooseSquare(8);
          }}/>
        </div>
      </div>
    </div>
  )
}

export default App
