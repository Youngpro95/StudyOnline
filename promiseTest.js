// const a = (c = "네이버") =>{
//   return new Promise ((resolve, reject)=>{
//     setTimeout(() => {
//       resolve(`${c}로부터 받은 사랑`)
//     }, 3*1000);
//   })
// }
// a().then(ret =>{
//   console.log(ret)
//   return a(`카카오`)
// }).then(ret =>{
//   console.log(ret)
// })

const { reject } = require("lodash")

const a = () =>{
  return new Promise ((resolve,reject)=>{
    const delay = Math.random()*100
    setTimeout(() => {
      console.log(1);
      resolve(1)
    }, delay);
  })
}
const b = () =>{
  return new Promise ((resolve,reject)=>{
    const delay = Math.random()*100
    setTimeout(() => {
      console.log(2);
      resolve(2)
    }, 3000);
  })
}
const c = () =>{
  return new Promise ((resolve,reject)=>{
    const delay = Math.random()*100
    setTimeout(() => {
      console.log(3);
      resolve(3)
    }, 5000);
  })
}

const main = async()=>{
  await a()
  await b()
  await c()
}

// a().then(ret=> b()).then(ret =>c());
a().then(b).then(c)