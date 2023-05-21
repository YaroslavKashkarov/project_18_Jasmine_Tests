// Testing the ageClassification function #1

describe( 'Проверка и тестирование возраста и функции ageClassification:',
  function () {
    it( 'Проверка возраста с несуществующим возрастом, если возраст < 0, тогда результат = нулевой',
      function () {
        expect( ageClassification( -1 ) ).toBe( null );
        expect( ageClassification( -1325 ) ).toBe( null );
      } );

    it( 'Проверка возраста, если возраст от 0 до 24, тогда результат = детский возраст',
      function () {
        expect( ageClassification( 23 ) ).toBe( 'детский возраст' );
        expect( ageClassification( 22 ) ).toBe( 'детский возраст' );
      } );

    it( 'Проверка возраста, если возраст от 24 до 44, тогда результат = молодой возраст',
      function () {
        expect( ageClassification( 25 ) ).toBe( 'молодой возраст' );
        expect( ageClassification( 42 ) ).toBe( 'молодой возраст' );
      } );

    it( 'Проверка возраста, если возраст от 44 до 65, тогда результат = средний возраст',
      function () {
        expect( ageClassification( 45 ) ).toBe( 'средний возраст' );
        expect( ageClassification( 52 ) ).toBe( 'средний возраст' );
      } );

    it( 'Проверка возраста, если возраст от 65 до 75, тогда результат = пожилой возраст',
      function () {
        expect( ageClassification( 68 ) ).toBe( 'пожилой возраст' );
        expect( ageClassification( 70 ) ).toBe( 'пожилой возраст' );
      } );

    it( 'Проверка возраста, если возраст от 75 до 90, тогда результат = старческий возраст',
      function () {
        expect( ageClassification( 79 ) ).toBe( 'старческий возраст' );
        expect( ageClassification( 85 ) ).toBe( 'старческий возраст' );
      } );

    it( 'Проверка возраста, если возраст от 90 до 122, тогда результат = долгожители',
      function () {
        expect( ageClassification( 92 ) ).toBe( 'долгожители' );
        expect( ageClassification( 122 ) ).toBe( 'долгожители' );
      } );
  } );

