angular.module("FormHandeling").controller('formController', function ($scope, $http, $log, $timeout) {
  // Form submit handler.
  $scope.submit = function(form) {
    // Trigger validation flag.
    $scope.submitted = true;
    $scope.reponse = "reponse from request";
    // If form is invalid, return and let AngularJS show validation errors.
    if (form.$invalid) {
      return;
    }
    var dataObj = {
        'name' : $scope.name,
        'email' : $scope.email,
        'password' : $scope.password,
        'address' : $scope.address,
        'comments' : $scope.comments
    };

    $http({
      method  : 'POST',
      url     : 'savememberinfo',
      data    :  {
        'name' : $scope.name,
        'email' : $scope.email,
        'password' : $scope.password,
        'address' : $scope.address,
        'comments' : $scope.comments
      },  // pass in data as strings
      headers: {
        Accept: 'application/xml',
        'Content-Type': 'application/json'
      }
    })
    .success(function(data) {
      $scope.reponse = data; 
      $scope.name = null;
      $scope.email = null;
      $scope.password = null;
      $scope.address = null;
      $scope.comments = null;
      $scope.messages = 'Request has been process successfully....'+data;
      $scope.submitted = false;
      $log.info(data);



    })
    .error(function(data) {
      $scope.progress = data;
      $scope.messages = 'There was a network error. Try again later.';
      $log.error(data);
      $log.info(data);
    })
    .finally(function() {


    });


  };
});




angular.module("FormHandeling").controller("CompaniesCtrl", [ '$scope', '$http',
                                                         function($scope, $http) {

	$scope.messages = "";

	$scope.companies = [ {
		'name' : 'Tarun',
		'employees' : 9878788,
		'headoffice' : 'Bangalore'
	}, {
		'name' : 'Rahul',
		'employees' : 100000,
		'headoffice' : 'jaipur'
	} ];

	$scope.addcompinfo = function(form) {


		$scope.submitted1 = true;

		if (form.$invalid) {
			return;
		}

		$scope.companies.push({
			'name' : $scope.name,
			'employees' : $scope.employees,
			'headoffice' : $scope.headoffice
		});


		var dataObj = {
				name : $scope.name,
				employees : $scope.employees,
				headoffice : $scope.headoffice
		};
		var res = $http.post('submitcompany', dataObj);

		res.success(function(data, status, headers, config) {
			$scope.name = null;
			$scope.employees = null;
			$scope.headoffice = null;
			$scope.messages = 'Request has been processed successfully....';
		});
		res.error(function(data, status, headers, config) {
			alert("message: " + JSON.stringify({
				data : data
			}));
		});

		res.finally(function() {

			$timeout(function() {
				$scope.messages = null;
			}, 2000);
		});
		// Making the fields empty
		//
		$scope.name = '';
		$scope.employees = '';
		$scope.headoffice = '';
		$scope.messages = '';
	};


} ]);





