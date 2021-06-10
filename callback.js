function hello( name, myCallback ){
    setTimeout(function(){
        console.log(`Hello may name is ${name} `);
        myCallback(name);

    },1000)
}


function goodBye( name, otherCallback ){
    setTimeout(function(){
        console.log(`goodBye ${name} `);
        otherCallback()
    },1000)
}


console.log('Start procces ...')

hello('Juan',function(name){
    goodBye(name,function(){
        console.log('End procces ...')
    });
}
);