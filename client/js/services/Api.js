myApp.factory('Api', ['$ressource', function($ressource){
    return {
        Customer: $ressource('/api/customer/:id', {id: '@id'});
    }
}])