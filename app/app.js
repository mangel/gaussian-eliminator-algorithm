// Define the `phonecatApp` module
var gaussianEliminatorApp = angular.module('gaussianEliminatorApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
gaussianEliminatorApp.controller('AppController', function AppController($scope) {
  $scope.model = {
    params: {
      matrixMinSize: 2,
      matrixMaxSize: 20
    },
    matrixSize: 4,
    step: 0
  };

  $scope.resize = function(){
    $scope.model.matrix = $scope.getMatrix($scope.model.matrixSize, $scope.model.matrixSize + 1);
    $scope.model.resultVector = $scope.getMatrix($scope.model.matrixSize, 1);
  };

  $scope.compute = function(){
    var hasSolution = false;
    var n = $scope.model.matrixSize;
    var a = $scope.model.matrix;
    var x = $scope.model.resultVector;
    var mji = 0;

    //STEP 1
    for (var i = 0; i < n; i++) {
      //STEP 3
      for(var p = i; p < n; p++){
        if (p!=i && a[p][i].value != 0){
          if(a[p][i].value < a[i][i].value || a[i][i].value == 0){
            t = a[i];
            a[i] = a[p];
            a[p] = t;
          }
        }
      }
      //STEP 2
      if (a[i][i].value == 0){
        console.log("NO UNIQUE SOLUTION EXISTS");
        break;
      }

      //STEP 4
      for(var j = i+1; j < n;j++){
        //STEP 5
        mji = a[j][i].value/a[i][i].value;
        //STEP 6
        a[j] = $scope.rowArrayDifference(a[j], $scope.rowArrayScalar(a[i], mji));
      }
    }

    x[n-1].value = a[n-1][n].value / a[n-1][n-1].value;

    for (var i = n-1; i >= 0 ; i--) {
      x[i] = a[i][n] -
    }
  };

  $scope.computeStep = function(){
    $scope.model.step++;

    var hasSolution = false;
    var n = $scope.model.matrixSize;
    var a = $scope.model.matrix;
    var x = $scope.model.resultVector;
    var mji = 0;

    //STEP 1

      //STEP 3
      for(var p = i; p < n; p++){
        if (p!=i && a[p][i].value != 0){
          if(a[p][i].value < a[i][i].value || a[i][i].value == 0){
            t = a[i];
            a[i] = a[p];
            a[p] = t;
          }
        }
      }
      //STEP 2
      if (a[i][i].value == 0){
        console.log("NO UNIQUE SOLUTION EXISTS");
        return;
      }

      console.log("Iteracion " + i);
      console.log(a[n-1][n].value);
      //STEP 4
      for(var j = i+1; j < n;j++){
        //STEP 5
        mji = a[j][i].value/a[i][i].value;
        if(mji == -2){
          console.log("WTF");
        }
        //STEP 6
        a[j] = $scope.rowArrayDifference(a[j], $scope.rowArrayScalar(a[i], mji));
      }


  };

  $scope.getMatrix = function(rows, cols){
    var arr = new Array(rows);

    var values = 1;

    for (var i = 0; i < rows; i++) {
      arr[i] = new Array(cols);
      for (var j = 0; j < cols ; j++) {
        arr[i][j] = { value: values++ };
      }
    }

    return arr;
  };

  $scope.rowArrayDifference = function (a, b){
    resultVector = new Array(a.length);
    for (var i = 0; i < a.length; i++) {
      resultVector[i] = { value: a[i].value - b[i].value };
    }
    return resultVector;
  };

  $scope.rowArrayScalar = function (row, scalar){
    resultVector = new Array(row.length);
    for (var i = 0; i < row.length; i++) {
      resultVector[i] = { value: row[i].value * scalar};
    }
    return resultVector;
  };

  $scope.loadTest = function (){
    $scope.model.matrix = $scope.getMatrix(4, 4+1);
    m = $scope.model.matrix;

    i = 0;

    m[i][0].value = 1;
    m[i][1].value = -1;
    m[i][2].value = 2;
    m[i][3].value = -1;
    m[i][4].value = -8;

    i = 1;

    m[i][0].value = 2;
    m[i][1].value = -2;
    m[i][2].value = 3;
    m[i][3].value = -3;
    m[i][4].value = -20;

    i = 2;

    m[i][0].value = 1;
    m[i][1].value = 1;
    m[i][2].value = 1;
    m[i][3].value = 0;
    m[i][4].value = -2;

    i = 3;

    m[i][0].value = 1;
    m[i][1].value = -1;
    m[i][2].value = 4;
    m[i][3].value = 3;
    m[i][4].value = 4;

    $scope.model.matrix = m;
  };

  $scope.model.matrix = $scope.getMatrix($scope.model.matrixSize, $scope.model.matrixSize + 1);
  $scope.model.resultVector = $scope.getMatrix($scope.model.matrixSize, 1);
  //$scope.model.upperTriangularMatrix = $scope.getMatrix($scope.model.matrixSize, $scope.model.matrixSize + 1);

  console.log($scope);
});
