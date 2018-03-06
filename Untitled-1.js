let island = [[0, 1, 0, 0],
[1, 1, 1, 0],
[0, 1, 0, 0],
[1, 1, 0, 0]]




/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    var perimeterCount = 0;
    var iLength = grid.length
    var xLength = grid[0].length

    for (var i = 0; i < iLength; i++) {
        for (var x = 0; x < xLength; x++) {
            if (grid[i][x] === 1) {
                perimeterCount += 1
                sub(i, x)
                break;
            }
        }
    }
    function sub(x, y) {
        // check for validness and for water
        if ((x >= iLength || y >= xLength || x < 0 || y < 0) || grid[x][y] === 0) {
            return
        }

        if (grid[x][y] === -1) {
            // if the new land is connected with old land subtract 1 side
            perimeterCount -= 1
            return
        } else if (grid[x][y] === 1) {
            // if connected add 3 sides
            perimeterCount += 3
            // visited
            grid[x][y] = -1

            // left
            sub(x, y - 1)

            //right
            sub(x, y + 1)

            //bottom
            sub(x - 1, y)

            //top
            sub(x + 1, y)
        }

    }
    return perimeterCount
};


console.log(islandPerimeter(island));