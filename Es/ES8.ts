// 1.async/await

async function testSync() {
    const response = await new Promise(resolve => {
      setTimeout(() => {
          resolve("async await test...");
        }, 1000);
    });
    console.log(response);
  }


async function init() {
    console.log('start')
    await testSync()
    console.log('End')
  }
init()

// 2.Object.values()

var obj = { foo: "bar", baz: 42 };
Object.keys(obj)
// ["foo", "baz"]


// 3.Object.entries()
var obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]


const obj1 = {a: 1, b: 2, c: 3}

for(let [key,value] of Object.entries(obj1))
{
    console.log(`key: ${key} value: ${value}`)
}
//key:a value:1
//key:b value:2
//key:c value:3