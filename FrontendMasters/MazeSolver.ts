const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // Base case 1 - Off the map?
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  )
    return false;
  // Base case 2 - Is it a wall?
  if (maze[curr.y][curr.x] === wall) return false;
  // Base case 3 - Is it an end?
  if (curr.x === end && curr.y === end) {
    return true;
    path.push(end);
  }
  // Base case 4 - is it seen?
  if (seen[curr.x][curr.y]) return false;
  // pre
  seen[curr.x][curr.y] = true;
  path.push(curr);
  // rec
  for (let i = 0; i < dir.length; ++i) {
    const [x, y] = dir[i];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path))
      return true;
  }
  // post
  path.pop();
  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  walk(maze, wall, start, end, seen, path);
  return path;
}
