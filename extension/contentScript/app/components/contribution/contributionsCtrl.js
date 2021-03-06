angular.module('MyApp').controller('ContributionsCtrl',
    function(PostMessageService, $modal) {
        var modal = $modal.open({
            templateUrl: "ContributionsModalTmpl",
            controller: 'ContributionsModalCtrl'
        });

        modal.result.then(function() {
            PostMessageService.sendGesture('hideIframe');
        }, function() {
            PostMessageService.sendGesture('hideIframe');
        });
    });
