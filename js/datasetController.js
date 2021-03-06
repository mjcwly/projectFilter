(function(){
  angular.module('dataPortalApp')
    .controller('DatasetController', DatasetController);

  DatasetController.$inject = ['$http','$state'];

  function DatasetController($http, $state){
    let self = this;

    this.foo = 'blue';
    this.sliderValue = 0;
    this.reverseSliderValue = 0;

    this.databases = [
      {
        name: 'first',
        cost: 20
      },
      {
        name: 'second',
        cost: 85
      },
      {
        name: 'third',
        cost: 55
      }
    ];

  }//end DatasetController
})();
