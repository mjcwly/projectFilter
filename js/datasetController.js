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
          name: 'cost of living index',
          reliedOnBy: [],
          totalCost: 20,
          unitCost: 20,
          updatedAt: Date('1-1-2016')
        },
        {
          name: 'transit master data',
          reliedOnBy: ['train ridership'],
          totalCost: 10,
          unitCost: 10,
          updatedAt: Date('1-1-2017')
        },
        {
          name: 'train ridership',
          reliedOnBy: [],
          totalCost: 65,
          unitCost: 55,
          updatedAt: Date('1-1-2017')
        },
        {
          name: 'dataset foo',
          reliedOnBy: [],
          totalCost: 30,
          unitCost: 30,
          updatedAt: Date('6-15-2016')
        }
      ];
    }//end getDatasets

  }//end DatasetController
})();
