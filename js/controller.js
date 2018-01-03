
 app.controller('myCtrl', function($scope){

 //Size range starts



  $scope.b13 = function(){
  	return $scope.roof_area/10;
  }  

  $scope.getLocationValue = function(){
  	return $scope.selectedLocation;
  }

  $scope.getGeneratorValue = function(){
  	return $scope.selectedGenerator;
  }

  $scope.b14 = function(){
  	return (($scope.power_consumption*12)/($scope.getLocationValue())* 0.5);
  }

  $scope.b4 = function(){
  	return  $scope.load;
  }

  $scope.location = function(){
  	return $scope.location.value;
  }

  $scope.sizeRange = function(){
  	$scope.Math = window.Math;

  	return $scope.Math.min($scope.b13(),$scope.b14(),$scope.b4());
  }

  	$scope.generator = [
  	{name : "Yes", value : "1"},
  	{name : "No", value : "0"},
  ];


//location selection
		
    $scope.location = [
    {name : "Nairobi", value : "1450", selected:true},
    {name : "Mombasa", value : "1450"},
    {name : "Nyeri", value : "1600"},
    {name : "Nakuru", value : "1600"},
    {name : "Kisumu", value : "1600"},
];  //location selection ends


// Size range ends

// Units Generated starts
$scope.unitsGenerated = function(){

	return $scope.sizeRange() * $scope.getLocationValue();
}

// units generated ends










// tarrif

$scope.tarrif = function(){
	return $scope.bill / $scope.power_consumption;
}
// Lifetime savings ends


// annuity

$scope.annuity = function(){
	return $scope.unitsGenerated()*($scope.tarrif()-1+(14*0.08*$scope.selectedGenerator))/1000 ;
}
// annuity ends

// capex starts


$scope.capex = function(){

	if ( $scope.sizeRange()<10 ) {

		var cap = 1600;
		return cap*$scope.sizeRange()/10;
	}else if($scope.sizeRange()>10 && $scope.sizeRange()<50){
		var cap = 1600;
		return cap*$scope.sizeRange()/10;
	}else if($scope.sizeRange()>50 && $scope.sizeRange()<150){
		var cap = 1450;
		return cap*$scope.sizeRange()/10;
	}else if($scope.sizeRange()>150 && $scope.sizeRange()<250){
		var cap = 1400;
		return cap*$scope.sizeRange()/10;
	}else if($scope.sizeRange()>250 && $scope.sizeRange()<500){
		var cap = 1300;
		return cap*$scope.sizeRange()/10;
	}else if($scope.sizeRange()>500 && $scope.sizeRange()<1000){
		var cap = 1200;
		return cap*$scope.sizeRange()/10;
	}else{
		var cap = 1100;
		return cap*$scope.sizeRange()/10;
	}

	
}
// capex ends

// PV starts || // Lifetime savings starts

$scope.pv = function(){
	$scope.Math = window.Math;
	// return ((-$scope.annuity())/(10.8347059433883722041830251));
  // return $scope.annuity() / 0.1 * (1 - Math.pow(1 + 0.1, -25))-$scope.capex();
	return ($scope.annuity()  * 25 )-$scope.capex();


}
// PV ends





}); //controller ends
