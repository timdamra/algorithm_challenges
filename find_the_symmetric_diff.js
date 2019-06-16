// https://learn.freecodecamp.org/coding-interview-prep/algorithms/find-the-symmetric-difference/

function sym(...args) {
    let idx = args.length - 1
    let cache = {}
  
    while(idx > -1) {    
      let currArr = args[idx].filter((val, index, self) => {
        return self.indexOf(val) === index
      })
  
      for (let i = 0; i < currArr.length; i++) {      
        if (
          idx === args.length - 1
        )
        {
          cache[currArr[i]] = currArr[i]
        } else if (         
          cache[currArr[i]] === currArr[i]
          ) 
        {        
          delete cache[currArr[i]]
        } else if (
          !cache[currArr[i]] 
        ) {
          cache[currArr[i]] = currArr[i]
        }
      }
      idx--
    }
  
    let arr = Object.values(cache)
  
    return arr
  }
  
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);