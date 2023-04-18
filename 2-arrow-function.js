// const square = function (x) {
//     return x * x;
// }

const { userInfo } = require("os");

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(4))

const event = {
    name: 'Birsdaay party',
    guestList: ['Alex', 'Vita'],
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()