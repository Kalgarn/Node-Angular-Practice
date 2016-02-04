myApp.controller('customerApiController', ['$scope', 'Api', function($scope, Api){
    $scope.form = {};
    $scope.customers = [];
    
    Api.Customer.query({}, function(data){
        $scope.customers = data;
    });
    
    $scope.delete = function(index){
        Api.Customer.delete({id: $scope.customers[index]._id}, function(data){
            $scope.customers.splice(index, 1);
        })
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