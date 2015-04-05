
(function(){
var rideshare=angular.module("FormHandeling",["ngRoute"]);

rideshare.config(function($routeProvider){
	$routeProvider
	.when('/home',{
		controller: 'formController',
		templateUrl: 'src/partials/homePage1.html'
	})

  .when('/register',{
    controller: 'CompaniesCtrl',
    templateUrl: 'src/partials/homePage2.html'
  })



	.otherwise({redirectTo:'/'});

});

rideshare.directive("pageHeader", function() {
      return {
        restrict: 'E',
        templateUrl: "src/directives/page-header.html"
      };
    });

rideshare.directive("pageFooter", function() {
      return {
        restrict: 'E',
        templateUrl: "src/directives/page-footer.html"
      };
    });


  })();