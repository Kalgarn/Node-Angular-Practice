myApp.controller('customerApiController', ['$scope', 'Api', function ($scope, Api) {
    $scope.form = {};
    $scope.customers = [];
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    
    Api.Customer.query({}, function (data) {
        $scope.customers = data;
    });
    
    $scope.deleteAllc = function () {
        Api.Customer.delete({}, function (data) {
            $scope.customers = [];
        });
    };
    
    $scope.delete = function (index) {
        bootbox.confirm("Are you sure?", function (answer) {
            if (answer === true) {
                Api.Customer.delete({id: $scope.customers[index]._id}, function (data) {
                $scope.customers.splice(index, 1);
                    bootbox.alert("customer deleted")
            }
        });
        
        });
    }
    
    $scope.addToDatabase = function(){
        Api.Customer.save({
            $scope.customers.push(data);
        },
                         function(err){
            bootbox.alert('Error: ' + err);
        });
    }
}]);