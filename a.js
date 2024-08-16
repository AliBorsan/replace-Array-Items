
let vendors = ['hp', 'Samsung', 'Dell', 'apple' , 'hp', 'Huawei'];
let vlen = vendors.length;
console.log(vendors);
let customers = ['Sam', 'John', 'xi', 'Albert' , 'xi', 'jurt', 'xi'];
console.log(customers);
let clen = customers.length;
function replaceArrayItems(arr, item, val){
 
    let len = arr.length;
    for(let i = 0; i <= len; i++){
        if(arr[i] === item){
            arr[i] = val;

        }
    }
	  
  }

  replaceArrayItems(vendors, 'hp', 'Xiaomi');
    console.log(vendors);
    replaceArrayItems(customers, 'xi', 'Yin');
    console.log(customers);


    
       


