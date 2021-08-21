var machineOBJ =[];
class Casino {
    constructor(machines, initialMoney) {
        this.machines = machines;
        this.initialMoney = initialMoney;
        for (var i = 0; i < machines; i++) {
            machinesOBJ [i] = new SlotMachine(this.initialMoney / this.machines);
            alert((i + 1) + " machine money: " + this.initialMoney / this.machines)
        }
    }

    getMachines() {
        alert("Macines: " + '$ {this.machines}');
    }

    getMoney() {
        alert("Money: " + '${}this.initialMoney}');
    }

    addSlotMachine() {
        machinesOBJ.push(new SlotMachine(this.initialMoney / this.machines))
        this.initialMoney += this.initialMoney / this.machines;
        this.machines += 1;
        alert("Added");
    }

    deleteMachine(i) {
        if (i > 0 && i <= this.machines) {
            this.machines -= 1;
            var tempMoney = machinesOBJ[i - 1].getAllMoney() / this.machines;
            machinesOBJ.splice(i - 1, 1);
            alert("Machine amount = " + this.machines);
            for (var x = 0; x < this.machines; x++) {
                machinesOBJ[x].addMoney(tempMoney);
            }
            delete machinesOBJ[i - 1];
            alert("Delete");
        } else {
            alert("This machine doesn`t exists");
        }
    }
}

class SlotMachine {
    constructor(money) {
        this.money = parseInt(money);
    }
    getAllMoney () {
        alert("Machine money: "+ '${this.moey}');
        return this.money;
    }
    getMoney (gmoney) {
        if(gmoney<=this.money && gmoney >=0)
            this.money -= parseInt(gmoney);
        else
            alert ("Wrong money amount " );
    }
    addMoney(amoney) {
        this.money+=parseInt(amoney);
        alert("Added money:"+amoney);
    }
}

var newOBJ;
function start() {
    newOBJ = new Casino(2,1200);
}
function  deleteMachine(){
    var a =prompt("Which machine do you want to delete?",'1');
    newOBJ.deleteMachine(a);
}
function  addMachine(){
    newOBJ.addSlotMachine();
}
function getAllCasinoMoney () {
    newOBJ.getMoney();
}
function getMachinesAmount () {
    newOBJ.getMachines();
}
function  showMachine () {
    var a = prompt("Which  machine`s money do you want to know?", '1');
    machineOBJ[a-1].getAllMoney();
}
function addMoneyToTheMachine () {
    var a = prompt("What machine do you want to add money to?",'1');
    var m = prompt("How much do you want to add",'500');
    macineOBJ [a-1].addMachine(m);
}
function  getMoneyFromMachine () {
    var a = prompt ("Which machine`s money do you want to take money from",'1');
    var b =prompt("How much?",'600');
    machineOBJ[a-1].getMoney(b);
}
