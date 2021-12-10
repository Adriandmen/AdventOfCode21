const fs = require("fs");

class Pilot {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    move(move) {
        let [dir, count] = move.split(/\s/);
        count = parseInt(count);

        switch (dir) {
            case "forward":
                this.x += count;
                break;
            case "down":
                this.y -= count;
                break;
            case "up":
                this.y += count;
                break;
            default:
                break;
        }
    }

    depth() {
        return Math.abs(this.x * this.y);
    }
}

function main() {
    let moves = fs.readFileSync("./input.txt")
                  .toString()
                  .trim()
                  .split("\n")
                  .map(_ => _.trim());
    let pilot = new Pilot();

    moves.forEach(m => pilot.move(m));

    console.log(pilot.depth());
}

main();
