const person ={
    name : "Dear",
    age : 20,
    getInfo: function(){
        function getName(){
            console.log(this.name);
        }
        getName()
    }
    
}

person.getInfo();



const home =""
