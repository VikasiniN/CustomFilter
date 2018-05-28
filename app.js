var test=angular.module("testApp",[]);
test.filter("testFilter",function(){
    return function(input){
return input.slice(0,3).toUpperCase();
    }
});
test.controller("myCtr",function($scope){ //connecting model and controller
    $scope.data=[
        {
         firstname:"bindhu",
         lastname:"nithi",
         number:62,
         age:23 ,
         company:"jspiders",
         dob:new Date('09-02-1995'),
         salary:20000,
         
        },
        {
            firstname:"vikasini",
            lastname:"NITHI",
            number:60,
            age:24 ,
            company:"jsp",
            dob:new Date('06-10-1994'),
            salary:40000,
           },
           {
            firstname:"bubloo",
            lastname:"BAE",
            number:90,
            age:24 ,
            company:"intel",
            dob:new Date('09-10-1994'),
            salary:90000,
           }

    ];
    
});