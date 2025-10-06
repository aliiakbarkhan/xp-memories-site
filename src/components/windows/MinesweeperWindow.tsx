import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type Cell = {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  neighborMines: number;
};

const MinesweeperWindow = () => {
  const ROWS = 9;
  const COLS = 9;
  const MINES = 10;

  const [grid, setGrid] = useState<Cell[][]>([]);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  const [flagCount, setFlagCount] = useState(MINES);

  const initializeGame = () => {
    const newGrid: Cell[][] = Array(ROWS)
      .fill(null)
      .map(() =>
        Array(COLS)
          .fill(null)
          .map(() => ({
            isMine: false,
            isRevealed: false,
            isFlagged: false,
            neighborMines: 0,
          }))
      );

    // Place mines randomly
    let minesPlaced = 0;
    while (minesPlaced < MINES) {
      const row = Math.floor(Math.random() * ROWS);
      const col = Math.floor(Math.random() * COLS);
      if (!newGrid[row][col].isMine) {
        newGrid[row][col].isMine = true;
        minesPlaced++;
      }
    }

    // Calculate neighbor mines
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (!newGrid[row][col].isMine) {
          let count = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const newRow = row + dr;
              const newCol = col + dc;
              if (
                newRow >= 0 &&
                newRow < ROWS &&
                newCol >= 0 &&
                newCol < COLS &&
                newGrid[newRow][newCol].isMine
              ) {
                count++;
              }
            }
          }
          newGrid[row][col].neighborMines = count;
        }
      }
    }

    setGrid(newGrid);
    setGameStatus("playing");
    setFlagCount(MINES);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const revealCell = (row: number, col: number) => {
    if (gameStatus !== "playing" || grid[row][col].isRevealed || grid[row][col].isFlagged) {
      return;
    }

    const newGrid = [...grid];
    newGrid[row][col].isRevealed = true;

    if (newGrid[row][col].isMine) {
      setGameStatus("lost");
      // Reveal all mines
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (newGrid[r][c].isMine) {
            newGrid[r][c].isRevealed = true;
          }
        }
      }
    } else if (newGrid[row][col].neighborMines === 0) {
      // Flood fill for empty cells
      const queue: [number, number][] = [[row, col]];
      while (queue.length > 0) {
        const [r, c] = queue.shift()!;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const newRow = r + dr;
            const newCol = c + dc;
            if (
              newRow >= 0 &&
              newRow < ROWS &&
              newCol >= 0 &&
              newCol < COLS &&
              !newGrid[newRow][newCol].isRevealed &&
              !newGrid[newRow][newCol].isFlagged
            ) {
              newGrid[newRow][newCol].isRevealed = true;
              if (newGrid[newRow][newCol].neighborMines === 0) {
                queue.push([newRow, newCol]);
              }
            }
          }
        }
      }
    }

    setGrid(newGrid);
    checkWin(newGrid);
  };

  const toggleFlag = (row: number, col: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (gameStatus !== "playing" || grid[row][col].isRevealed) {
      return;
    }

    const newGrid = [...grid];
    newGrid[row][col].isFlagged = !newGrid[row][col].isFlagged;
    setGrid(newGrid);
    setFlagCount(flagCount + (newGrid[row][col].isFlagged ? -1 : 1));
  };

  const checkWin = (currentGrid: Cell[][]) => {
    let allNonMinesRevealed = true;
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (!currentGrid[row][col].isMine && !currentGrid[row][col].isRevealed) {
          allNonMinesRevealed = false;
          break;
        }
      }
    }
    if (allNonMinesRevealed) {
      setGameStatus("won");
    }
  };

  const getCellColor = (num: number) => {
    const colors = ["", "blue", "green", "red", "purple", "maroon", "turquoise", "black", "gray"];
    return colors[num] || "black";
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between bg-[#C0C0C0] p-3 border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600">
        <div className="flex items-center gap-4">
          <div className="bg-black text-red-500 font-bold text-xl px-3 py-1 border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white">
            {flagCount.toString().padStart(3, "0")}
          </div>
        </div>
        <Button
          onClick={initializeGame}
          className="text-2xl px-4 py-2 bg-[#C0C0C0] hover:bg-[#D4D0C8] border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600"
        >
          {gameStatus === "lost" ? "😵" : gameStatus === "won" ? "😎" : "🙂"}
        </Button>
        <div className="text-sm font-bold">
          {gameStatus === "won" && "You Won! 🎉"}
          {gameStatus === "lost" && "Game Over! 💥"}
        </div>
      </div>

      <div className="inline-block bg-[#C0C0C0] p-3 border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, colIndex) => (
              <button
                key={colIndex}
                onClick={() => revealCell(rowIndex, colIndex)}
                onContextMenu={(e) => toggleFlag(rowIndex, colIndex, e)}
                className={`w-8 h-8 text-sm font-bold border ${
                  cell.isRevealed
                    ? "bg-[#C0C0C0] border-gray-400"
                    : "bg-[#C0C0C0] border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-[#D4D0C8]"
                }`}
                style={{
                  color: cell.isRevealed && !cell.isMine ? getCellColor(cell.neighborMines) : "black",
                }}
              >
                {cell.isFlagged && !cell.isRevealed
                  ? "🚩"
                  : cell.isRevealed
                  ? cell.isMine
                    ? "💣"
                    : cell.neighborMines > 0
                    ? cell.neighborMines
                    : ""
                  : ""}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-700">
        <p>Left click to reveal, right click to flag</p>
      </div>
    </div>
  );
};

export default MinesweeperWindow;
