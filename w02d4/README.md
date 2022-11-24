# W02D04 - Promises

### To Do

- [ ] Illustrate the "callback waterfall" (callback hell) problem
- [ ] Introduction to Promises
- [ ] Error handling with Promises (vs callbacks)
- [ ] Parallelizing async things (Promise.all, Promise.race)
- [ ] Creating our own Promises

higherFn1((err, data1) => {
if(!data1) return
callback1((err, data2) => {
callback2((data3) => {
callback3((data4) => {

            })
        })
    })

})
