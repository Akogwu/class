class Computer {
    constructor(ram,cpu,storage) {
        this.ram = ram;
        this.cpu = cpu;
        this.storage = storage;
    }

    runProgram(){
        console.log( "running: " + program)
    }
}


class Laptop extends Computer{
    constructor(battery,ram,cpu,storage) {
        super(ram,cpu,storage);
        this.battery = battery;
    }

    carryAround(){
        console.log ("carrying laptop:  cpu" + cpu +" ram: " + ram + " storage: " + storage + " battery: " + battery);
    }
}