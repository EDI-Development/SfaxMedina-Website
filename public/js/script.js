$(document).ready(() => {
    //! ****** HBM *******/
    $('#hbm').click(() => {
        $('#hbm-nav').css({
            visibility: 'visible',
            animation: 'openHBM 2s forwards'
        })
    });
    $('#close').click(() => {
        $('#hbm-nav').css({
            animation: 'closeHBM 1s forwards'
        })
    });
    $('.go').click(() => {
        $('#hbm-nav').css({
            animation: 'closeHBM 1s forwards'
        })
    });
});