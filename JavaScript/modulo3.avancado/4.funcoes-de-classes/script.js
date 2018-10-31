function Animal(){
    this.raca = "PitBull";
    this.nome = "LuLu";
    this.idade = 20;
    this.peso = 10;

    this.fazerXixi = function() {
      console.log("xiiiiiiiiiiiiii.....");
    }
    this.comer = function(kg) {
      console.log("hummmmm...");
      this.peso = this.peso + (kg/2);
    }
}

var lulu = new Animal();
    lulu.raca = "Pitbull";
    lulu.nome = "LuLu"


var xuxu = new Animal();
    xuxu.raca = "Doberman";
    xuxu.nome = "XuXu";
