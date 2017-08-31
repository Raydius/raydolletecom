/**
 * Created by rdollete on 4/1/16.
 */

var blogPostTemplate = require('components/blog-post.pug');
// var searchPostTemplate = require('components/search-post.pug');
// var blogPostSingleTemplate = require('components/single-post.pug');
var blogHeaderTemplate = require('components/blog-header.pug');


angular.module('phenoCom').directive('carouselComponent', function() {

    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            var animationSpeed = 1050;

            $(element).owlCarousel({
                items: 1,
                nav:true,
                pullDrag: true,
                navText: [
                    "<button class='icon-left-arrow'></button>",
                    "<button class='icon-right-arrow'></button>"
                ],
                loop: true,
                dots: true,
                mouseDrag: true,
                autoplay: false,
                autoplaySpeed: 1000,
                rewind: false,
                // autoWidth: true,
                touchDrag: true
            });

        }
    };

});

angular.module('phenoCom').directive('carouselComponentCenter', function() {

    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            var animationSpeed = 150;

            $(element).owlCarousel({
                items: 1.2,
                // itemElement: ''
                center: true,
                navText: [
                    "<button class='icon-left-arrow'></button>",
                    "<button class='icon-right-arrow'></button>"
                ],
                loop: true,
                dots: false,
                touchDrag: true,
            });
        }
    };

});


var videoComponentTemplate = require('components/video-component.pug');
var scrolltopTemplate = require('components/scrolltop.pug');

// embedded vimeo player
angular.module('phenoCom').directive('videoComponent', function() {
    return {
        scope: {
            thumb: '@', alt: '@', title: '@', vimeo: '@'
        },
        template: videoComponentTemplate,
        link: function (scope, element, attrs) {
            scope.vimeoUrl = 'https://player.vimeo.com/video/' + scope.vimeo;
        }
    };

});

// scroll directive used in footer
angular.module('phenoCom').directive('scrolltotop', function() {
    return {
      template: scrolltopTemplate,
      link: function (scope, element, attrs) {

            element.bind('click', function() {
                $('html, body').animate({
                        scrollTop: 0
                    }, 500, function(){
                });
            })
        }
    };
});

// scroll directive used on home page
angular.module('phenoCom').directive('scrolltop2', function() {
    return {
      link: function (scope, element, attrs) {
            var $windowHeight = $(window).height();
            var topSpace = 180;
            $( window ).resize(function() {
              $windowHeight = $(window).height();
            });
            element.bind('click', function() {
                $('html, body').animate({
                        scrollTop: $windowHeight - topSpace
                    }, 400, function(){
                });
            })
        }
    };
});

angular.module('phenoCom').directive('close', function() {
    return {
      link: function (scope, element, attrs) {
            var name = element.attr('childContainer');

            $('body').click(function(event){

                if($(event.target).hasClass('icon')) {

                    return;

                } else {

                    $(name).hide();

                }

            })
            $('.topcontent').click(function(event){

                if($(event.target).hasClass('icon')) {

                    return;

                } else {

                    $(name).hide();

                }

            })
        }
    };
});

angular.module('phenoCom').directive('showmore', function() {
    return {
        link: function (scope, element, attrs) {

            element.bind('click', function() {
                var name = $(this).attr('childContainer');

                // set a timeout so this happened after close event
                setTimeout(function(){
                    $(name).toggle();
                }, 1);
            })
        }
    };
});

// currently not in use: embedded scrollable website
angular.module('phenoCom').directive('scrollableComponent', function($window) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var $element = $(element);



            angular.element($window).bind("scroll", function() {

                var scroll = $(window).scrollTop();
                var offset = element.offset();
                var scrollParentWidth = element.width();
                var longImgHeight = element.find('.longImg').height();
                var scrollImg = -(scroll - element.offset().top + 70);


                $('#scrollingSite .image-component').css('height', longImgHeight);
                if ( offset.top - scroll < 80 && offset.top - scroll > -(longImgHeight - $(window).height()/2)) {

                    $('#scrollingSite .image-component').addClass('fixed').css('width', scrollParentWidth);
                    $('#scrollingSite .image-component img.longImg').css({transform: 'translateY(' + scrollImg +'px)'});

                } else {

                    $('#scrollingSite .image-component ').removeClass('fixed');
                    $('#scrollingSite .image-component img.longImg').css({transform: 'translateY(' + 0 +'px)'});

                }
            });
        }
    };

});


// use this directive to bring file data into controller scope
/*angular.module('phenoCom').directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            var model = $parse(attr.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){

                    // make file available in scope
                    modelSetter(scope, element[0].files[0]);

                    // update the H4 (pseudo-field)
                    var fileName = jQuery('#'+attr.id).val().split('\\').pop();
                    scope.data.labels[attr.id] = scope.data.fields[attr.id] + ' Attached: ' + fileName;

                    // fire off GA event tracker
                    ga('send', 'event', 'upload', 'attach', scope.data.ga[attr.id]);
                });

            });
        }
    };
}]);*/


// Individual blog post "preview" card on main blog index page
angular.module('phenoCom').directive('blogPost', [ '$location', function(location){

  return {
      scope: {
          preview: '@',
          title: '@',
          blogger: '@',
          thumbnail: '@',
          alt: '@',
          author: '@',
          slug: '@',
          position: '@'
      },
      template: blogPostTemplate,
      link: function (scope, element, attrs) {
          scope.postUrl = location.absUrl() + scope.slug + '/';
      }
  };

}]);


angular.module('phenoCom').directive('blogHeader', function(){

  return {
      template: blogHeaderTemplate,
      link: function (scope, element, attrs) {
          // add any variable transformation here...
      }
  };

});
