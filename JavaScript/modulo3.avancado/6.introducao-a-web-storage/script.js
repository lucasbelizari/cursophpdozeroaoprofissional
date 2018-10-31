function Animal(){
    this.raca = "PitBull";
    this.nome = "LuLu";
    this.idade = 20;
    this.peso = 10;

    this.fazerXixi = function() {
      console.log("xiiiiiiiiiiiiii.....");
    }
    this.comer = function(kg) {
      for(var i=0;i<kg;i++){
           this.mastigar();
      }
      console.log("hummmmm...");
      this.peso = this.peso + (kg/2);
    }
    this.mastigar = function(i){
      console.log(i+" - Nhoc...");
    }
}

var lulu = new Animal();
    lulu.raca = "Pitbull";
    lulu.nome = "LuLu"
    lulu.comer(10);

var xuxu = new Animal();
    xuxu.raca = "Doberman";
    xuxu.nome = "XuXu";
