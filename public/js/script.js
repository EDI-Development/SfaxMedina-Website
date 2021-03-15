$(document).ready(() => {
    //! ****** HBM *******/
    $('#hbm').click(() => {
        $('#hbm-nav').css({
            visibility: 'visible',
            animation: 'openHBM 0.4s forwards'
        })
    });
    $('#close').click(() => {
        $('#hbm-nav').css({
            animation: 'closeHBM 0.1s forwards'
        })
    });
    $('.go').click(() => {
        $('#hbm-nav').css({
            animation: 'closeHBM 0.1s forwards'
        })
    });
});