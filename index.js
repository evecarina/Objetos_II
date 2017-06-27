var assert= require('assert');
//ejercicio 1
function Ejercicios_objetos(){
  this.Suma_numeros=function (numInicial,numFinal){
    var sumaTotal=0;
    var objeto = {
      inicio:numInicial,
      fin:numFinal
    }
   // console.log(objeto.inicio);
    for(var i=objeto.inicio;i<=objeto.fin;i++){
         sumaTotal=sumaTotal+i;

  }
      return sumaTotal;
  }
}
// ejeercicio 2
function Desarrolladora (nom,edad,ocup,genero){
  this.nom=nom;
  this.edad=edad;
  this.ocup=ocup;
  this.genero=genero;
  this.mensaje=function(){

  if(this.edad>=17 && this.genero=='mujer'&& this.ocup=='web developer'){
    return ( "You're awesome");

  }else if(this.edad>=17 && this.genero=='mujer'&& this.ocup=='estudiante de laboratoria'){
     return ( "You're awesome");
  }else{
      return ( "Upsiii");
  }
  }
}

var ejercicio1=new Ejercicios_objetos();
var ejercicio2= new Desarrolladora();
//console.log(desarrolladora.mensaje());


// ejercicio 3
function ejercicio3(array)
{
	var texto=new Object();
	for(i in array){
		var j=parseInt(i)+1;
		texto["propiedad"+j]=array[i];
	}
	var propiedades=Object.keys(texto)
	var str = "";
	for(j in propiedades){
		str += propiedades[j]+"-->"+texto[propiedades[j]];
		if(j<propiedades.length-1)
			str+=";";
	}
	if(propiedades.length==0)
		return "El objeto está vacío";
	return str;

}

// ejercicio 4

function Paciente (nomb,apellido,edad,genero,ciudad,pais)
{
	this.nombre=nomb;
	this.apellido=apellido;
	this.edad=edad;
	this.genero=genero;
	this.ciudad=ciudad;
	this.pais=pais;
	this.ficha_datos=function(){
		var mensaje="";
		mensaje+="Nombre: "+this.nombre+" "+this.apellido+"\n"+"Edad: "+this.edad+"\n"+"País: "+this.pais;
		return mensaje;
	};
}

describe('Ejercicio 1', function(){
  it('Suma del numero_inicial + el numero_final', function(){
    assert.equal(55, ejercicio1.Suma_numeros(1,10));
  });
});

describe('Ejercicio 2', function(){
  var ejercicio2= new Desarrolladora ("Evelyn",22,"web developer","mujer");
  it('Descubre si eres una Super_coder', function(){
    assert.equal("You're awesome", ejercicio2.mensaje());
  });

  it('Descubre si eres una Super_coder', function(){
    var ejercicio2= new Desarrolladora("Evelyn",12,"estudiante","mujer");
    assert.equal("Upsiii", ejercicio2.mensaje());
  });
});

describe('Ejercicio 3', function(){
  it('Agregar numero del arreglo a un texto', function(){
 assert.equal("propiedad1-->1;propiedad2-->2;propiedad3-->3", ejercicio3([1,2,3]));
  });
});

describe("Ejercicio 4",function(){
		it("Debe imprimir datos del paciente",function()

    {
			var persona = new Paciente ("Evelyn","Guevara",12,"Femenino","Ica","Perú");
			assert.equal("Nombre: Evelyn Guevara\nEdad: 12\nPaís: Perú",persona.ficha_datos());
		});
	});
