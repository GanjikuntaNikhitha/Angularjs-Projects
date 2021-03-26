//MOdule witj myLIst name and with empty array no dependencies where added.
var myApp = angular.module("HangmanApp", [])

myApp.controller("GameController", function ($scope) {
    var words=["Altassian","Remember","Mountain","Pokemon"];
	$scope.incorrectLettersChosen=[];
	$scope.correctLettersChosen=[];
    $scope.guesses=6;
	$scope.displayWord='';
    var selectedWord='';
	$scope.input = {
		letter: ''
	};
	var selectRandomWord = function() {
		var index = Math.round(Math.random()*words.length);
		return words[index];
	}
	var newGame = function() {
		$scope.incorrectLettersChosen = [];
		$scope.correctLettersChosen=[];
		$scope.guesses=6;
		$scope.displayWord="";
		selectedWord=selectRandomWord();
		var tempDisplayWord='';
		for(var i=0;i<selectedWord.length;i++) {
			tempDisplayWord+='*';
		}
		$scope.displayWord=tempDisplayWord;
		// Random word selection.
	}
	$scope.letterChosen = function() {
		// Check if $scope.input.letter is a single letter
		// and an alphabet and not an already chosen letter.
		// Check if its correct.

		var correct=false;
		for(var i=0;i<selectedWord.length;i++) {
			if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()) {
				$scope.displayWord=$scope.displayWord.slice(0,i)+
				$scope.input.letter.toUpperCase()+$scope.displayWord.slice(i+1);
				correct=true;
			}
		}
		if(correct) {
			$scope.correctLettersChosen.push($scope.input.letter.toUpperCase());
		} else {
			$scope.guesses--;
			$scope.incorrectLettersChosen.push($scope.input.letter.toUpperCase());
		}
		$scope.input.letter="";
		if($scope.guesses==0) {
			// You Lose
			$timeout(function() {
				newGame();
			},500);
		}
		if($scope.displayWord.indexOf("*")==-1) {
			// Show score
			$timeout(function() {
				newGame();
			},500);
		}
	}
	newGame();

})