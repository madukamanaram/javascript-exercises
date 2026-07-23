 const removeFromArray = function(arr, ...args) {
    // let newArr = [];
    
    // for(let item1 of arr){
    //     let shouldNotRemove = true;

    //     for (let item2 of args){
    //         if(item1 === item2){
    //             shouldNotRemove = false;
    //         }
    //         break;
    //     }
        
    
    // if(shouldNotRemove){
    //     newArr.push(item1)

    // }
    // }
    // return newArr
    
    // ---------------------------------------------------------------
    
    
    
    let newArr = [];
    arr.forEach(element => {
        if(!args.includes(element)) newArr.push(element)
        });
        return newArr


}


// Do not edit below this line
module.exports = removeFromArray;


