// Testing the evenFn function #2

describe( 'Тестируем функцию evenFn:',
  function () {
    it( 'В данной фунции проверяем наличие чисел в массиве и возвращаем массив с чётными числами',
      function () {
        expect( evenFn( 10 ) ).toEqual( [ 2, 4, 6, 8, 10 ] );
      } );
  } );