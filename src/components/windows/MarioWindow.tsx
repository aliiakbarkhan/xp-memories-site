import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const MarioWindow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameLoopRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Game state
    let mario = {
      x: 50,
      y: 200,
      width: 30,
      height: 30,
      velocityY: 0,
      jumping: false,
    };

    let obstacles: { x: number; y: number; width: number; height: number }[] = [];
    let coins: { x: number; y: number; collected: boolean }[] = [];
    let gameSpeed = 3;
    let localScore = 0;
    let isGameOver = false;

    const gravity = 0.6;
    const jumpPower = -12;
    const ground = 230;

    // Controls
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === " " || e.key === "ArrowUp") && !mario.jumping) {
        mario.velocityY = jumpPower;
        mario.jumping = true;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Draw Mario
    const drawMario = () => {
      ctx.fillStyle = "#E52521";
      ctx.fillRect(mario.x, mario.y, mario.width, mario.height);
      
      // Hat
      ctx.fillStyle = "#E52521";
      ctx.fillRect(mario.x + 5, mario.y - 10, 20, 10);
      
      // Face
      ctx.fillStyle = "#FFD700";
      ctx.fillRect(mario.x + 8, mario.y + 8, 14, 14);
      
      // Overalls
      ctx.fillStyle = "#0000FF";
      ctx.fillRect(mario.x + 10, mario.y + 18, 10, 12);
    };

    // Generate obstacles
    const generateObstacle = () => {
      obstacles.push({
        x: canvas.width,
        y: ground,
        width: 30,
        height: 40,
      });
    };

    // Generate coins
    const generateCoin = () => {
      coins.push({
        x: canvas.width,
        y: 150 + Math.random() * 50,
        collected: false,
      });
    };

    // Initial setup
    generateObstacle();
    generateCoin();

    let frameCount = 0;

    // Game loop
    const gameLoop = () => {
      if (isGameOver) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = "#8B4513";
      ctx.fillRect(0, ground + 40, canvas.width, 20);

      // Draw sky
      ctx.fillStyle = "#87CEEB";
      ctx.fillRect(0, 0, canvas.width, ground + 40);

      // Update Mario
      mario.velocityY += gravity;
      mario.y += mario.velocityY;

      if (mario.y >= ground) {
        mario.y = ground;
        mario.velocityY = 0;
        mario.jumping = false;
      }

      drawMario();

      // Update and draw obstacles
      obstacles = obstacles.filter((obs) => {
        obs.x -= gameSpeed;

        // Draw obstacle (pipe)
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        ctx.fillStyle = "#008000";
        ctx.fillRect(obs.x, obs.y, obs.width, 10);

        // Collision detection
        if (
          mario.x < obs.x + obs.width &&
          mario.x + mario.width > obs.x &&
          mario.y + mario.height > obs.y
        ) {
          isGameOver = true;
          setGameOver(true);
        }

        return obs.x > -obs.width;
      });

      // Update and draw coins
      coins = coins.filter((coin) => {
        if (!coin.collected) {
          coin.x -= gameSpeed;

          // Draw coin
          ctx.fillStyle = "#FFD700";
          ctx.beginPath();
          ctx.arc(coin.x, coin.y, 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "#FFA500";
          ctx.lineWidth = 2;
          ctx.stroke();

          // Coin collection
          if (
            mario.x < coin.x + 10 &&
            mario.x + mario.width > coin.x - 10 &&
            mario.y < coin.y + 10 &&
            mario.y + mario.height > coin.y - 10
          ) {
            coin.collected = true;
            localScore += 10;
            setScore(localScore);
          }
        }

        return coin.x > -20 && !coin.collected;
      });

      // Generate new obstacles and coins
      frameCount++;
      if (frameCount % 120 === 0) {
        generateObstacle();
      }
      if (frameCount % 80 === 0) {
        generateCoin();
      }

      // Increase difficulty
      if (frameCount % 300 === 0) {
        gameSpeed += 0.5;
      }

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameOver]);

  const resetGame = () => {
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="p-4 space-y-3">
      <div className="bg-[#0054E3] text-white p-3 rounded flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">🍄 Super Mario Run</h2>
          <p className="text-sm">Press SPACE or ↑ to jump!</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">🪙 {score}</p>
          <p className="text-xs">Score</p>
        </div>
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={600}
          height={300}
          className="border-4 border-gray-600 rounded bg-[#87CEEB] w-full max-w-[600px]"
        />
        {gameOver && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded">
            <div className="bg-white p-6 rounded-lg text-center space-y-4">
              <h3 className="text-2xl font-bold text-red-600">Game Over!</h3>
              <p className="text-lg">Final Score: {score}</p>
              <Button onClick={resetGame} className="bg-[#0054E3] hover:bg-[#0046C7]">
                Play Again
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-yellow-100 border-2 border-yellow-600 p-3 rounded">
        <p className="text-xs text-gray-700">
          <b>🎮 Controls:</b> Press SPACE or UP ARROW to jump over pipes and collect coins!
        </p>
      </div>
    </div>
  );
};

export default MarioWindow;
