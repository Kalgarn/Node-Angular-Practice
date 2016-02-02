var Customer = require('../models/customer');

module.exports = function(router){
    router.post('/customer', function(req,res){
        console.log(req.body);
        var customer = new Customer();
        customer.firstname = req.body.firstname;
        customer.lastname = req.body.lastname;
        customer.phone = req.body.phone;
        customer.address.street = req.body.street;
        customer.address.city = req.body.city;
        //customer.firstname ='tesst';
        
        customer.save(function(error, data){
            if(error){
                throw error;
                res.json(data);
            }
        });
      //  res.json(customer);
    });
}