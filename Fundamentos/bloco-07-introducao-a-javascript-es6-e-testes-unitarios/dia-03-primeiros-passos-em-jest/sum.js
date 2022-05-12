function sum(a,b){
    if(a !== 'number' || b !== 'number'){
        throw new Error('Os paramentros devem ser numericos');
        // console.log('Os paramentros devem ser numericos');
    }

        return a + b;

    }
    module.exports = sum;
    