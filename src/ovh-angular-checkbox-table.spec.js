'use strict';

describe('ovh-checkbox-table', function () {

    var $compile, $rootScope, $scope, $httpBackend, elem;

    beforeEach(angular.mock.module('ovh-checkbox-table'));

    beforeEach(angular.mock.inject(function (_$rootScope_, _$compile_, _$httpBackend_) {
        $scope = _$rootScope_.$new();
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;

        elem = $('<div>').prependTo('body');
        $scope.$digest();
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
        $scope.$destroy();
        elem.remove();
    });

    var templates = {
        'default': {
            element : '<div data-ovh-checkbox-table ovh-checkbox-table-ids-all="test1" ovh-checkbox-table-ids-page="test2" ovh-checkbox-table-ids-selected="test3"></div>',
            scope   : {}
        }
    };

    function compileDirective (template, locals) {
        template = templates[template];
        angular.extend($scope, angular.copy(template.scope) || angular.copy(templates['default'].scope), locals);
        var element = $(template.element).appendTo(elem);
        element = $compile(element)($scope);
        $scope.$digest();
        return jQuery(element[0]);
    }


    // ---


    describe('Initialization', function () {

        it('should load the default directive', angular.mock.inject(function () {

            compileDirective('default');

            expect(true).toBeTruthy();

        }));

    });

});
