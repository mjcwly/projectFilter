(function(){
  angular.module('dataPortalApp')
    .controller('DatasetController', DatasetController);

  DatasetController.$inject = ['$http','$state'];

  function DatasetController($http, $state){
    let vm = this;

    //attributes
    vm.allDatasets = [];
    vm.forwardSliderValue = 0;
    vm.reverseSliderValue = 0;



    //methods

    //run on load
    getDatasets();

    //begin callback declarations

    function getDatasets() {
      vm.allDatasets = [
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
    }//end getDatasets

  }//end DatasetController
})();
