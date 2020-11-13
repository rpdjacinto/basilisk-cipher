class Card {
    constructor(rank, suit) {
        this.rank = rank
        this.suit = suit
    }

    toString() {
        return `${ranks[this.rank]}${suits[this.suit]}`
    }
}

const deck = [
    new Card(0,0),new Card(1,0),new Card(2,0),new Card(3,0),new Card(4,0),new Card(5,0),new Card(6,0),new Card(7,0),new Card(8,0),new Card(9,0),new Card(10,0),new Card(11,0),new Card(12,0),
    new Card(0,1),new Card(1,1),new Card(2,1),new Card(3,1),new Card(4,1),new Card(5,1),new Card(6,1),new Card(7,1),new Card(8,1),new Card(9,1),new Card(10,1),new Card(11,1),new Card(12,1),
    new Card(0,2),new Card(1,2),new Card(2,2),new Card(3,2),new Card(4,2),new Card(5,2),new Card(6,2),new Card(7,2),new Card(8,2),new Card(9,2),new Card(10,2),new Card(11,2),new Card(12,2),
    new Card(0,3),new Card(1,3),new Card(2,3),new Card(3,3),new Card(4,3),new Card(5,3),new Card(6,3),new Card(7,3),new Card(8,3),new Card(9,3),new Card(10,3),new Card(11,3),new Card(12,3)
]

const drawRandom = (arr, n) => {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("drawRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const generateLookupTable = (xMax, yMax) => {
    let lut = {
        values: []
    }
    for (let i = 0; i < xMax; i++) {
        lut.values.push([])
        for (let j = 0; j < yMax; j++) {
            lut.values[i].push(drawRandom(deck, 5))
        }
    }
    return lut
}

console.log(JSON.stringify(generateLookupTable(12, 28)))