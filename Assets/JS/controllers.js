myApp.controller("GreetingController", ['$scope', function($scope){
   $scope.greeting = 'Hello! Welcome to the most annoying to-do app in the world';

//defining the to-do object and the fields I'll need to create a new todo (this can get simplified into a list later if I need to drop a few fields)
function todo(name, time, date, details){
   this.name = name;
   this.time = time;
   this.date = date;
   this.details = details;
};


   }]);
