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
function openQZ() {
    window.open('qcm.html', 'blank_')
}
//! ********************************************************************************************************* */
//! ********************************************************************************************************* */
//! **************************************      Q    C    M       ******************************************* */
//! ********************************************************************************************************* */
//! ********************************************************************************************************* */


function start() {
    r1 = document.getElementById('r1').checked;
    r2 = document.getElementById('r2').checked;
    if (r1 == true || r2 == true) {
        if (r1 == true) {
            $('#Vbtn').html('Verif')
            $('.Question .Q h1').html('Question')
            Mvide = "choisir une option !."
            Mfaux = 'Faux'
            Mvrai = 'Correct, Bravo !'
            THX1 = 'Votre score est '
            THX2 = 'Merci Pour Votre Participation 😁😊'
            listQ = ['Why you watch netflix or egybest', '1+1'];
            listTA = ['Be cause its free', '2'];
            listF1A = ['idk why', '4'];
            listF2A = ['Be i m nooob', '6'];
            console.log('fr selected')
        } else {
            $('#Vbtn').html('تأكد')
            $('.Question .Q h1').html('السوأل')
            Mvide = 'اختر خانة'
            Mfaux = 'خطأ'
            Mvrai = 'أحسنت,صحيح'
            THX1 = 'نتيجتك هي'
            THX2 = 'شكرا لمشاركتك 😁😊'
            listQ = ['يصيص', '1+1'];
            listTA = ['Bثحثنبث its free', '2'];
            listF1A = ['idkثبثy', '4'];
            listF2A = ['Be i m nooob', '6'];
            console.log('ar selected')

        }
        setTimeout(() => {
            $('.Begin').css({
                opacity: '0',
                display: 'none'
            })
            qStart();
        }, 2000)
        $('.Begin').css({
            animation: 'Start 2s ease'
        })
        /**** close the error msg */
        $('.erMSG #txt h1').html('');
        $('.erMSG').css({
            width: '0px',
            'transition-duration': '1s',
            display: 'none',

        })
        setTimeout(() => {
            $('.erMSG #txt h1').css({
                opacity: '0',
                'transition-duration': '.5s'
            })
        }, 500)


    } else {


        $('.erMSG #txt h1').html('choisir une option !');
        $('.erMSG #img img').attr('src', 'https://edi-dev.tn/cdn/sfaxmedina/cancel.svg');
        setTimeout(() => {
            $('.erMSG').removeClass('shake');
            $('.erMSG').addClass('shake-opacity');

        }, 50)
        $('.erMSG').css({
            width: '700px',
            'transition-duration': '1s',
            'background-color': 'rgb(104, 27, 27)',
            display: 'inline-flex',

        })
        setTimeout(() => {
            $('.erMSG #txt h1').css({
                opacity: '1',
                'transition-duration': '.5s'
            })
        }, 500)


    }
}
function qStart() {
    $('.Question').css({
        display: 'block',
    })
    setData();
}


LVL = 0;
Score = 0;

isfalse = false;
function setData() {
    /* reset data **/
    document.getElementById('A1').checked = false;
    document.getElementById('A2').checked = false;
    document.getElementById('A3').checked = false;
    isfalse = false;
    $('.erMSG #txt h1').html('');
    $('.erMSG').css({
        width: '0px',
        'transition-duration': '1s',
        display: 'none',

    })
    setTimeout(() => {
        $('.erMSG #txt h1').css({
            opacity: '0',
            'transition-duration': '.5s'
        })
    }, 500)
    if (listQ[LVL] == undefined) {
        finish();
    } else {

        $('#q').html(listQ[LVL])
        $('#AT1').html(listTA[LVL])
        $('#AT2').html(listF1A[LVL])
        $('#AT3').html(listF2A[LVL])
    }
}
function verif() {

    var r1 = document.getElementById('A1').checked;
    var r2 = document.getElementById('A2').checked;
    var r3 = document.getElementById('A3').checked;

    if (r1 == true || r2 == true || r3 == true) {
        $('#err2').html('');
        $('#err2').css({
            width: '0%',
            padding: '0%',
            height: '0%',

        })
        /*** get the user answer */
        if (r1 == true) {
            UA = document.getElementById('AT1').innerHTML;
        } else if (r2 == true) {
            UA = document.getElementById('AT2').innerHTML;
        } else if (r3 == true) {
            UA = document.getElementById('AT3').innerHTML;
        }

        if (UA == listTA[LVL]) {
            $('#merr').removeClass('shake');
            $('#merr').addClass('shake-slow');
            $('.erMSG #txt h1').html(Mvrai);
            $('.erMSG #img img').attr('src', 'https://edi-dev.tn/cdn/sfaxmedina/checked.svg');
            if (isfalse == false) { Score++; }

            $('.erMSG').css({
                width: '400px',
                'transition-duration': '1s',
                'background-color': 'rgb(77, 104, 27) ',
                display: 'inline-flex',
            })
            setTimeout(() => {
                $('.erMSG #txt h1').css({
                    opacity: '1',
                    'transition-duration': '.5s'
                })
            }, 500)
            LVL++;
            setTimeout(() => {
                setData();

            }, 3000)
        } else {
            $('.erMSG #txt h1').html(Mfaux);
            setTimeout(() => {
                $('.erMSG').removeClass('shake-opacity');
                $('.erMSG').addClass('shake');

            }, 50)
            isfalse = true;
            $('.erMSG #img img').attr('src', 'https://edi-dev.tn/cdn/sfaxmedina/cancel.svg');

            $('.erMSG').css({
                width: '400px',
                'transition-duration': '1s',
                'background-color': 'rgb(104, 27, 27)',
                display: 'inline-flex',
            })
            setTimeout(() => {
                $('.erMSG #txt h1').css({
                    opacity: '1',
                    'transition-duration': '.5s'
                })
            }, 500)
            setTimeout(() => {
                $('.erMSG #txt h1').html('');
                $('.erMSG').css({
                    width: '0px',
                    'transition-duration': '1s',
                    display: 'none',
                })
                setTimeout(() => {
                    $('.erMSG #txt h1').css({
                        opacity: '0',
                        'transition-duration': '.5s'
                    })
                }, 500)
            }, 2000)
        }
    } else {
        $('.erMSG #txt h1').html(Mvide);
        $('.erMSG #img img').attr('src', 'https://edi-dev.tn/cdn/sfaxmedina/cancel.svg');
        setTimeout(() => {
            $('.erMSG').removeClass('shake');
            $('.erMSG').addClass('shake-opacity');

        }, 50)
        $('.erMSG').css({
            width: '700px',
            'transition-duration': '1s',
            'background-color': 'rgb(104, 27, 27)',
            display: 'inline-flex'
        })
        setTimeout(() => {
            $('.erMSG #txt h1').css({
                opacity: '1',
                'transition-duration': '.5s'
            })
        }, 500)
    }

}

function finish() {
    $('.Question').css({
        opacity: '0',
        display: 'none',
        'transition-duration': '1s',
    })
    $('.Rsult').css({
        opacity: '1',
        'display': 'block ',
        'transition-duration': '1s',
    })
    $('.Rsult h1').html(THX1 + Score + '/6')
    $('.Rsult h2').html(THX2)
}