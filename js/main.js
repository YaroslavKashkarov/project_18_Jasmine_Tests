
// Testing the ageClassification function #1

function ageClassification( n ) {
  let age = n;
  return n > 0
    ? n > 24
      ? n > 44
        ? n > 65
          ? n > 75
            ? n > 90
              ? n > 122
                ? null
                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}

console.log( '-1 :', ageClassification( -1 ) );
console.log( '5 :', ageClassification( 5 ) );
console.log( '34 :', ageClassification( 34 ) );
console.log( '50 :', ageClassification( 50 ) );
console.log( '65.1 :', ageClassification( 65.1 ) );
console.log( '80 :', ageClassification( 80 ) );
console.log( '110 :', ageClassification( 110 ) );
console.log( '130 :', ageClassification( 130 ) );

// Testing the evenFn function #2

function evenFn( n ) {
  var arr = [];

  for ( var i = 1; i <= n; i++ ) if ( i % 2 === 0 ) arr.push( i );

  return arr;
}

console.log( evenFn( 10 ) );
console.log( evenFn( 15 ) );
console.log( evenFn( 20 ) );
