
let vendors = ['hp', 'Samsung', 'Dell', 'apple' , 'hp', 'Huawei'];
console.log(vendors);
//Array(6) ['hp', 'Samsung', 'Dell', 'apple' , 'hp', 'Huawei']
let customers = ['Sam', 'John', 'xi', 'Albert' , 'xi', 'jurt', 'xi'];
console.log(customers);
//Array(6) ['Sam', 'John', 'xi', 'Albert' , 'xi', 'jurt', 'xi']


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
//Array(6) [ "Xiaomi", "Samsung", "Dell", "apple", "Xiaomi", "Huawei" ]

replaceArrayItems(customers, 'xi', 'Yin');
console.log(customers);
//Array(7) [ "Sam", "John", "Yin", "Albert", "Yin", "jurt", "Yin" ]


    
       


