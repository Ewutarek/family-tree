/*-----------------------------Initialised Family members-----------------------------*/ 
const me = {name: 'Keratuwe', parents:[], generation: 1}
const cousin = {name: 'Ntsana', parents:[], generation: 1}
const mum = {name: 'Lebohang', parents: [], generation: 2 }
const aunt1 = {name:'Mohau', parents: [], generation: 2 }
const aunt2 = {name:'Mamello', parents: [], generation: 2  }
const grandma = {name: 'Ellen', generation: 3 }
const grandpa = {name: 'Ernest', generation: 3 }

/*-----------------------------Establish parents-------------------------------------*/ 
me.parents[0] = mum
cousin.parents[0] = aunt1

aunt2.parents[0] = grandma
aunt2.parents[1] = grandpa

aunt1.parents[0] = grandma
aunt1.parents[1] = grandpa

mum.parents[0] = grandma
mum.parents[1] = grandpa


/*--------------------------Export Module---------------------------------------------*/ 
module.exports = [me, cousin, mum, aunt1, aunt2,grandma,grandpa]