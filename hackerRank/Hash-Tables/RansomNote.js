

// Complete the hourglassSum function below.
// Complete the checkMagazine function below.
function checkMagazine( magazine, note) {

    magazine.forEach(( element ) => {
        let index = note.indexOf( element )
        if( index > -1){
            delete note[ index ];
        }
    });
    note = note.filter( n => n)
    if( note.length ){
        return 'YES';
    } else {
        return 'NO';
    }

}

function main(magazine, note) {
    let result = checkMagazine(magazine, note);;
    console.log(result);
    return result;
}

main([ 'two', 'times', 'three', 'is', 'not', 'four' ], [ 'two', 'times', 'two', 'is', 'four' ])
