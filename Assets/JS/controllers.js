myApp.controller("GreetingController", ['$scope', function($scope){
   $scope.greeting = 'Hello! Welcome to the most annoying to-do app in the world';


// this might have to go into a new controller, because I like the two way data binding on the new appointment thing. I also realize that this means going to two pages. Or maybe not...maybe just two sections on one page.



$scope.todos = [{
   name: 'dance party',
   time: 'all the time',//try to find a filter for this!
   date: 'today, yesterday, tomorrow',
   details: 'just dance',
}, {
   name: 'woot woot',
   time: 330,
   date: 'now n forever',
   details: 'plz plz'
}] //end of todo's array

   this.removeTodo = function($index){
      $scope.todos.slice($index, 1);
   }

}]); //end of Greeting Controller

myApp.controller('AddTodo', ['$scope', function($scope){

   this.todo = {};

   this.addTask = function(todo) {
      $scope.todos.push(this.todo);
      this.todo = {};
   };




}]);
