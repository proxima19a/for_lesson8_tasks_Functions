console.log('getNameDecl',getNameDecl('Tom'));

function getNameDecl(name){
  return `Имя равно ${name}`;
}

const getNameExpres=function(name){
  return `Имя равно ${name}`;
}

const getNameArrow=(name) => `Имя равно ${name}`;

console.log('getNameExpres',getNameExpres('Jerry'));
console.log('getNameArrow',getNameArrow('Hanna'));