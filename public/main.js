
var app = angular.module( 'app', [] );

// app.module( 'carousel-directive', [] )
    app.directive( 'carousel', [ '$compile',  function( $compile ) {

        return {
            restrict: 'E',
            link( $scope, $element, $attrs, $controller ) {

                var myElement = $compile( '<ul id="test"><li>New Test</li></ul>' )($scope);
            
                $element.replaceWith( myElement );

                // was able to get this working with raw elementById
                let hammertime = new Hammer( $element[0] ); // welp, this seems to have solved it

                console.log( angular.element($element.children()[0]) );

                // console.log( hammertime );


                hammertime.on( 'tap', function( ev ) {

                    alert( ev );
                });
            }
        }
    }]);


    // app.controller( 'ferrari', [ '$scope', '$element', function( $scope, $element ) {

    //     this.$onInit = function() {

    //         var image = new Image();

    //         image.src = 'mountain.jpg';

    //         console.log( image.src );

    //         console.log( '-ferrari has been initialized' );
    //     }
    // }]);