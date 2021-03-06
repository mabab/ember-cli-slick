import Component from '@ember/component';
import layout from '../templates/components/slick-slider';
import {scheduleOnce} from '@ember/runloop';
import {on} from '@ember/object/evented';
import jQuery from 'jquery';

export default Component.extend({
    layout: layout,
    accessibility: true,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    asNavFor: null,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    centerMode: false,
    centerPadding: '50px',
    cssEase: 'ease',
    dots: false,
    draggable: true,
    fade: false,
    focusOnSelect: false,
    easing: 'linear',
    edgeFriction: 0.15,
    infinite: true,
    initialSlide: 0,
    lazyLoad: 'ondemand',
    mobileFirst: false,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    respondTo: 'window',
    responsive: [],
    rows: 1,
    slide: '',
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCss: true,
    variableWidth: false,
    vertical: false,
    verticalSwiping: false,
    rtl: false,

    _initializeSlick: on('didInsertElement', function () {
        let _this = this;

        scheduleOnce('actions', jQuery(this.get('element')), function () {
            if (_this.slickInit){
                _this.slickInit(this[0]);
            }
        });

        let carousel = jQuery(this.get('element')).slick({
            accessibility: this.get('accessibility'),
            adaptiveHeight: this.get('adaptiveHeight'),
            autoplay: this.get('autoplay'),
            autoplaySpeed: this.get('autoplaySpeed'),
            arrows: this.get('arrows'),
            asNavFor: this.get('asNavFor'),
            appendArrows: this.get('appendArrows'),
            appendDots: this.get('appendDots'),
            prevArrow: this.get('prevArrow'),
            nextArrow: this.get('nextArrow'),
            centerMode: this.get('centerMode'),
            centerPadding: this.get('centerPadding'),
            cssEase: this.get('cssEase'),
            customPaging: this.get('customPaging'),
            dots: this.get('dots'),
            draggable: this.get('draggable'),
            fade: this.get('fade'),
            focusOnSelect: this.get('focusOnSelect'),
            easing: this.get('easing'),
            edgeFriction: this.get('edgeFriction'),
            infinite: this.get('infinite'),
            initialSlide: this.get('initialSlide'),
            lazyLoad: this.get('lazyLoad'),
            mobileFirst: this.get('mobileFirst'),
            pauseOnHover: this.get('pauseOnHover'),
            pauseOnDotsHover: this.get('pauseOnDotsHover'),
            respondTo: this.get('respondTo'),
            responsive: this.get('responsive'),
            rows: this.get('rows'),
            slide: this.get('slide'),
            slidesPerRow: this.get('slidesPerRow'),
            slidesToShow: this.get('slidesToShow'),
            slidesToScroll: this.get('slidesToScroll'),
            speed: this.get('speed'),
            swipe: this.get('swipe'),
            swipeToSlide: this.get('swipeToSlide'),
            touchMove: this.get('touchMove'),
            touchThreshold: this.get('touchThreshold'),
            useCss: this.get('useCss'),
            variableWidth: this.get('variableWidth'),
            vertical: this.get('vertical'),
            verticalSwiping: this.get('verticalSwiping'),
            rtl: this.get('rtl')
        })
            .on('afterChange', function ($event, slick, currentSlide) {
                if (_this.afterChange){
                    _this.afterChange(slick, currentSlide);
                }
            })
            .on('beforeChange', function ($event, slick, currentSlide, nextSlide) {
                if (_this.beforeChange){
                    _this.beforeChange(slick, currentSlide, nextSlide);
                }
            })
            .on('edge', function ($event, slick, direction) {
                if (_this.edge){
                    _this.edge(slick, direction);
                }
            })
            .on('reInit', function ($event, slick) {
                if (_this.reInit){
                    _this.reInit(slick);
                }
            })
            .on('setPosition', function ($event, slick) {
                if (_this.setPosition){
                    _this.setPosition(slick);
                }
            })
            .on('swipe', function ($event, slick, direction) {
                if (_this.swiped){
                    _this.swiped(slick, direction);
                }
            });

        this.set('carousel', carousel);
        return carousel;
    }),

    _destroySlick: on('willDestroyElement', function () {
        this.get('carousel')
            .off('afterChange')
            .off('beforeChange')
            .off('edge')
            .off('reInit')
            .off('setPosition')
            .off('swipe');
    })
});
