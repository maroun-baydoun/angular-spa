(function() {
    angular.module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope) {
        $scope.input = "";
        $scope.message = "";
        $scope.color = "";

        $scope.checkIfTooMuch = function() {
            if (!$scope.input) {
                $scope.message = "Please enter data first";
                $scope.color = "red";
            } else {
                var items = $scope.input.split(",").filter(function(item) {
                        return item.trim();
                    }),
                    numberOfItems = items.length;

                if (numberOfItems <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }

                $scope.color = "green";
            }

        };
    }

})();
