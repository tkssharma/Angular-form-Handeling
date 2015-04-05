


angular.module('rideshare').factory("techService", function($http){

var _data = [];

var _getdata = function(){
    $http.get("/save.json")
        .then(function(results){
            //Success
            angular.copy(results.data, _data); 
            //alert(results);
        }, function(results){
            alert("get error");
        })
}

var _addNewdata = function(val1,val2,val3){
    _data.splice(0,0, val1, val2, val3);
    $http.get("/save.json") // here i want to add new datas 
}

return{
    data: _data,
    getdata: _getdata,
    addNewdata: _addNewdata
};


});

