function soma (){
    const vl1 = 50;
    const vl2 = 40;
    const result = vl2+vl1;
    console.log(result);
}
//soma();//

function subtracao (){
    let sub1 = 1010;
    let sub2 = 10;
    const result2 = sub1-sub2;
    console.log(result2);
}
//subtracao();//

function somaComParametro(a,b){
    const soma = a+b
    console.log(soma)
}
//somaComParametro(15,20);//

function subtracaoComParametro(y,x){
    const subtracao = y-x
    console.log(subtracao)
}
//subtracaoComParametro(300,600);//

// Regra de  sinal de +//
//numero + numero = soma//
// letra + letra = contatenação / junção//
// numero + letra = contatenação / junção//

function somaComRetorno (a,b,i){
    const somatoria = a+b+i;
    return somatoria;
}
//console.log(somaComRetorno(40,60,25));//

function subComRetorno(w,z,a){
    const subtracao = a-z-w;
    return subtracao;
}
console.log(subComRetorno(2000,1000,90))