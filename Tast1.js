var arrslotm =["slotm1","slotm2","slotm3"];
var amountmoney = 10000;

class Casino {
    constructor(amount_money, amount_slotm) {
        this.amount_money = amount_money;
        this.amount_slotm = amount_slotm;
    }

    addNewSlotM() {
        arrslotm.push("new_slotm");
        for (var i = 0; i < arrslotm.length; i++) {
            arrslotm[i] = new
            SlotMachine(amountmoney/arrslotm.length);
        }
        console.log("New slotmachine is added");
    }

    removeSlotM() {
        var value = prompt("Enter index slotmachine")
        arrslotm.splice(value, 1);
        for (var i=0; i < arrslotm.length; i++) {
            arrslotm[i].prime_summa = amountmoney/arrslotm.length;
        }
        console.log("Slotmachine is removed");
    }

    getGeneralMoney() {
        console.log("General amount of money in casino: " + amountmoney);
    }

    getGeneralSlotM() {
        console.log("General amount of slotmachines in casino:" + arrslotm.length);
    }
}
 class SlotMachine {
     constructor(prime_summa) {
         this.prime_summa = prime_summa;
         this.prime_summa_on_slotm = 0;
     }

     putMoney(amount) {
         this.prime_summa_on_slotm += amount;
     }

     takeMoney(amount) {
         this.prime_summa_on_slotm -= amount;
     }

     static getGeneralMoneySlotM() {
         var index_slotm = prompt("Input index slotmachine");
         console.log("Slotmachine index: " + index_slotm + "\nGeneral amount of money in slotmachine: " + arrslotm[index_slotm].prime_summa);
     }
 }
  var casino = new Casino(amountmoney, arrslotm.length);
 for(var i=0; i < arrslotm.length; i++) {
     arrslotm[i] = new SlotMachine(amountmoney/arrslotm.length);
     }
  var istrue = true;
 while(istrue) {
      var somevalue = prompt("Enter what do you want to do:\n-a Get general amount of money\n-b Get general amount of slotmachines\n-c Add new slotmachine\n-d Remove slotmachine\n-e Slotm options\n-0 Exit");
     switch (somevalue) {
         case "a":
             casino.getGeneralMoney();
             break;
         case "b":
             casino.getGeneralSlotM();
             break;
         case "c":
             casino.addNewSlotM();
             break;
         case "d":
             casino.removeSlotM();
             break;
         case "e":
             var somev = prompt("Enter what do you want to do:\n-a Get general amount of money\n-b Put money in the slotmachine\n-c Take money the slotmachine");
             switch (somev) {
                 case "a":
                     SlotMachine.getGeneralMoneySlotM();
                     break;
                 case "b":
                     var index_slotm = prompt("Input index slotmachine");
                     var amount_money = prompt("Input amount of money");
                     addmoneySM(parseInt(index_slotm), parseInt(amount_money));
                     break;
                 case "c":
                     var index_slotm = prompt("Input index slotmachine");
                     var amount_money = prompt("Input amount of money");
                     removemoneySM(parseInt(index_slotm), parseInt(amount_money));
                     break;
             }
             break;
         case "0":
             istrue = false;
             break;
     }
 }
 function  addmoneySM(index, amount_money) {
     for (var i=0; i < arrslotm.length; i++) {
         arrslotm[i].prime_summa_on_slotm = 0;
     }
     arrslotm[index].putMoney(amount_money);
     for (var i=0; i < arrslotm.length; i++) {
         amountmoney += arrslotm[i].prime_summa_on_slotm;
         arrslotm[i].prime_summa = amountmoney/arrslotm.length;
     }
     console.log("Slotmachine index: " + index + "\nYou put to slotmachine: " + amount_money);
 }
 function removemoneySM(index, amount_money) {
     for(var i=0; i < arrslotm.length; i++) {
         arrslotm[i].prime_summa_on_slotm =0;
     }
     arrslotm[index].takeMoney(amount_money);
     for(var i=0; i < arrslotm.length; i++) {
         amountmoney += arrslotm[i].prime_summa_on_slotm;
         arrslotm[i].prime_summa = amountmoney/arrslotm.length;
     }
     console.log("Slotmachine index: "+ index +" \nYou took from slotmachine: " + amount_money);
     }
