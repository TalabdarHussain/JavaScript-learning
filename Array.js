

// +++slice and splice+++

// const myarr=[0,1,2,3,4]
// console.log(myarr);
// const mynewarr=myarr.splice(1,3)
// console.log(mynewarr);
// console.log(myarr); original array will be changed using splice




// ++concat++

const marvel_heros=["thor","thenos","iron man"]
const bollywood_actors=["shah rukh","salman"]
const all_heros=marvel_heros.concat(bollywood_actors)
console.log(all_heros);



// // +++concat using spreed+++
// const marvel_heros=["thor","thenos","iron man"]
// const bollywood_actors=["shah rukh","salman"]
// const all_heros=[...marvel_heros,...bollywood_actors]
// console.log(all_heros);
// const allarr=[...all_heros]
// console.log(allarr);
// all_heros.push("1")

// let aray1=[1,2,3,4,...marvel_heros,1]
// // aray1.push(...marvel_heros,1)
// console.log(aray1);



//+++Array.from and Array.is+++

// +++interesting+++
// console.log(Array.isArray(marvel_heros[1]));
// const a_arr=(Array.from("talabdar"))
// console.log(a_arr[0]);


//+++Array.of+++

// let score1=100;
// let score2=200;
// let score3=300;
// let all_score=Array.of(score1,score2,score3)
// console.log(all_score);
