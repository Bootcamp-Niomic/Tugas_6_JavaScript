// ====== Tugas 6 JavaScript =====

function init() {
    for(var i=1; i<=20; i++) {
      if(i%2 === 0) {
        console.log("Bilangan Genap")
        continue;
  
      }
      console.log(i)
    }
    return init
  }
  
  init()