(function(){
'use strict';
angular
    .module('customPage')
    .factory('ConfigService', ConfigService)
    .factory('DataService', DataService)
    .factory('TableDataService', TableDataService);

ConfigService.$inject = ['$resource'];
function ConfigService($resource){
    return $resource('/api/custom_page/config/', {}, {get: {method: 'get', cancellable: true}});
}

DataService.$inject = ['$resource'];
function DataService($resource){
    return $resource('/api/custom_page/main/', {}, {
    get: {method: 'get', cancellable: true},
    post: {method: 'post'}});
}

TableDataService.$inject = ['$resource'];
function TableDataService($resource){
    return $resource('/api/custom_page/table/', {}, {
    get: {method: 'get', cancellable: true},
    post: {method: 'post'}});
}
})();