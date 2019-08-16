(function(){
'use strict';
angular
    .module('customPage')
    .controller('CustomPageController', CustomPageController)
    .controller('TableCustomPageController', TableCustomPageController);

CustomPageController.$inject = [
    '$scope',
    '$location',
    '$window',
    '$resource',
    'debounce',
    'DataService',
    'ConfigService'
];

function CustomPageController (
    $scope,
    $location,
    $window,
    $resource,
    debounce,
    DataService,
    ConfigService
) {
    $scope.queryParams = {};
    $scope.urlParams = {};
    $scope.viewData = [];
    $scope.filters = [];
    $scope.tKey='';
    $scope.tValue='';
    $scope.formMessage='';

    $scope.clickedAddRow = function () {
        if($scope.tKey!=''&&$scope.tValue!=''){
            $scope.AddRow($scope.tKey,$scope.tValue);
            $scope.formMessage="Data Added";
        }
        else {
            $scope.formMessage="Incorrect Data";
        }
    };

    $scope.AddRow = function(key, value){
        DataService.post({key:key, value: value}, function(resp){
        $scope.updatePage();}, function(error){});
    }

    $scope.getConfig = function(){
        ConfigService.get($scope.queryParams, function(data) {
            $scope['config'] = data;
        });
    };

    $scope.getPage = function(update) {
        DataService.get($scope.queryParams, function(data) {
            $scope.data = [];
            $scope.viewData = angular.copy($scope.data);
            $scope.parseData(data['data']);
            $scope.viewData = angular.copy($scope.data);

            console.log($scope.viewData)
        },function (error) {
                console.error(error);
        });
        //$scope.getConfig();
    }

    $scope.updatePage = debounce($scope.getPage, 500);

    $scope.parseData = function(data) {
         angular.forEach(data, function(plane,planeName) {
            console.log(plane)
            console.log(planeName)
            $scope.data.push(plane);
         });
    };

    $scope.run = function() {
        //angular.element($window).bind('resize', $scope.calculateHeaderMargin);
        $scope.updatePage();
    };

    //params -> $location.search()
    $scope.applySearch = function(params) {
        angular.forEach(params, function(value, key) {
            /*if (key === 'by') {
                $scope.queryParams[key] = value;
                $scope.urlParams[key] = value;
            }*/
        });
    };

    $scope.run();
}

TableCustomPageController.$inject = [
    '$scope',
    '$location',
    '$window',
    '$resource',
    'debounce',
    'TableDataService',
    'ConfigService',
    '$controller'
];
function TableCustomPageController(
    $scope,
    $location,
    $window,
    $resource,
    debounce,
    TableDataService,
    ConfigService,
    $controller
) {
    angular.extend($scope, $controller('CustomPageController', {
        $scope: $scope,
        $location: $location,
        $window: $window,
        DataService: TableDataService,
    }));
}
})();