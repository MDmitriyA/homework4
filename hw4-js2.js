var ladysBag = {
  money: 5000,
  cosmetic: "pomade",
  cosmetic1: "carcass",
  cosmetic2: "powder",
  pen: "ballpoint"
}

ladysBag.putInBag = function (books){
  this.books =  String(books)
}

delete ladysBag.money


//


function sampleFunc () {
  console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}

function modificator ( func ) {
  var x =  func("test", "sample")
  console.log(x)
}

var testFunc = modificator( sampleFunc )

testFunc()

