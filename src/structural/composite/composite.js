// composition
function EquipmentComposition(name) {
    this.equipaments = [];
    this.name = name;
}

EquipmentComposition.prototype.add = function(Equipament) {
    this.equipaments.push(Equipament);
};

EquipmentComposition.prototype.getPrice = function() {
    return this.equipaments.map(function(Equipament){
        return Equipament.getPrice();
    }).reduce(function(a, b) {
        return  a + b;
    });
};

function Equipment() {}

Equipment.prototype.getPrice = function() {
    return this.price;
};

// -- leafs
function FloppyDisk() {
    this.name = "Floppy Disk";
    this.price = 70;
}
FloppyDisk.prototype = Object.create(Equipment.prototype);

function HardDrive() {
    this.name = "Hard Drive";
    this.price = 250;
}
HardDrive.prototype = Object.create(Equipment.prototype);

function Memory() {
    this.name = "8gb memomry";
    this.price = 280;
}
Memory.prototype = Object.create(Equipment.prototype);

module.exports = [EquipmentComposition, FloppyDisk, HardDrive, Memory];
