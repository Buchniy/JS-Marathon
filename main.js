const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(first, second) {

    if (searchLetterA(first) > searchLetterA(second)) {
        console.log(first);
    }else if(searchLetterA(first) === searchLetterA(second)){
        console.log(first + ', ' + second);
    } else {
        console.log(second);
    }
}

function searchLetterA(line) {
    let arr = line.split('');
    let a = null;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'а') {
            a += 1;
        }
    }
    return a;
}

getRow(firstRow, secondRow); // мама мыла раму