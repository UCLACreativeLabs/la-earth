/* global angular */
angular.module('ua5App')
    .directive('schedule', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/schedule/schedule.html',
            link: function($scope, element, attrs) {
                $scope.timeslots = [
                    {
                        time: 8,
                        title: "Save Water",
                        details: "Turn off the faucet, and reduce water usage by adjusting your daily routine.",
                        map: false,
                        icon: "",
                        url: "http://savethedropla.com/"
                    },
                    {
                        time: 8,
                        title: "Save Water",
                        details: "Turn off the faucet, and reduce water usage by adjusting your daily routine.",
                        map: false,
                        icon: "",
                        url: "http://savethedropla.com/"
                    },
                    {
                        time: 8,
                        title: "Save Water",
                        details: "Turn off the faucet, and reduce water usage by adjusting your daily routine.",
                        map: false,
                        icon: "",
                        url: "http://savethedropla.com/"
                    },
                    {
                        time: 8,
                        title: "Save Water",
                        details: "Turn off the faucet, and reduce water usage by adjusting your daily routine.",
                        map: false,
                        icon: "",
                        url: "http://savethedropla.com/"
                    },
                    {
                        time: 8,
                        title: "Save Water",
                        details: "Turn off the faucet, and reduce water usage by adjusting your daily routine.",
                        map: false,
                        icon: "",
                        url: "http://savethedropla.com/"
                    },
                    {
                        time: 8,
                        title: "Save Water",
                        details: "Turn off the faucet, and reduce water usage by adjusting your daily routine.",
                        map: false,
                        icon: "",
                        url: "http://savethedropla.com/"
                    },
                    {
                        time: 8,
                        title: "Save Water",
                        details: "Turn off the faucet, and reduce water usage by adjusting your daily routine.",
                        map: false,
                        icon: "",
                        url: "http://savethedropla.com/"
                    },
                    {
                        time: 8,
                        title: "Save Water",
                        details: "Turn off the faucet, and reduce water usage by adjusting your daily routine.",
                        map: false,
                        icon: "",
                        url: "http://savethedropla.com/"
                    },
                    {
                        time: 8,
                        title: "Save Water",
                        details: "Turn off the faucet, and reduce water usage by adjusting your daily routine.",
                        map: false,
                        icon: "",
                        url: "http://savethedropla.com/"
                    }
                ];
            }
        };
    }])
;
