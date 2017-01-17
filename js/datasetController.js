(function(){
  angular.module('dataPortalApp')
    .controller('DatasetController', DatasetController);

  function DatasetController(){
    let self = this;

    this.foo = 'blue';
    this.sliderValue = 0;

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
        cost: 15
      }
    ];

  }//end DatasetController
})();
