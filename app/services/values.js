//can't be accessed in config
angular.module('customersApp').value('appSettings', {
    title: 'Customers Application',
    version: '1.0'
});

//can be accessed in config
// angular.module('customersApp').constant('appSettings', {
//     title: 'Customers Application',
//     version: '1.0'
// });