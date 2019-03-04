function Tab() {

  return {
    scope: {
      label: '@'
    },
    require: '^tabs',
    transclude: true,
    // controller: () => {
    //   this.tabs = []
    //   this.addTab = tab => {
    //     this.tabs.push(tab)
    //   }
    // },
    // controllerAs: 'tabs',
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    link: (scope, elem, attrs, ctrl) => {
      scope.tab = {
        label: scope.label,
        selected: false
      }
      ctrl.addTab(scope.tab)
    }
  }

}

angular
  .module('app')
  .directive('tab', Tab)
