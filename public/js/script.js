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
            listQ = ['Qui a construit les murs de la ville de Sfax ?', 'La première famille à vivre dans la ville arabe ?', 'Quand la ville antique a-t-elle été fondée ?', 'Quelles sont les portes principales de la ville antique ?', "Quelle est la population de l'ancienne ville de Sfax ? ", "Combien d'écoles y a - t - il dans l'ancienne Sfax"];
            listTA = ['Ali bin Salem Al-Bakri', 'La famille jallouli', '856-863', 'beb jebli - beb diouan', '2800', '3'];
            listF1A = ['Abi Ibrahim Ahmed', 'la famille ben ammar', '760-720', 'beb kasbah - beb jebli', '1500', '1'];
            listF2A = [' Ahmed al aghlabi', 'la famille affes', '800-820', 'beb charki - beb gharbi', '800', '6'];
            console.log('fr selected')
        } else {
            $('#Vbtn').html('تأكد')
            $('.Question .Q h1').html('السوأل')
            Mvide = 'اختر خانة'
            Mfaux = 'خطأ'
            Mvrai = 'أحسنت,صحيح'
            THX1 = 'نتيجتك هي'
            THX2 = 'شكرا لمشاركتك 😁😊'
            listQ = ['? من بنى أسوار مدينة صفاقس ?', 'من أول عائلة سكنت في المدينة العربي ?', 'متى تأسست المدينة العتيقة ?', 'ماهي الأبواب الرئيسية للمدينة العتيقة ? ', 'كم عدد سكان مدينة صفاقس العتيقة ?', 'كم عدد المدارس في صفاقس العتيقة'];
            listTA = ['علي بن سالم البكري', 'عائلة الجلولي', '856م-863م', '.باب الجبلي وباب الديوان', '2800', '3'];
            listF1A = [' احمد الاغلبي', 'عائلة بن عمار', '720م-760م', '.باب القصبة وباب الجبلي', '1500', '1'];
            listF2A = ['ابي ابراهيم احمد ', 'عائلة عفاس', '800م-820م', '.باب الشرقي وباب الغربي', '600', '6'];
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