$(document).ready(function () {
    var pomodori_status = "pause";
    var pomodori_count = 0;
    function set_bg_green() {
        $('body').attr('class','soft-green');
     
    }
    function set_bg_red() {
        $('body').attr('class','red');
     
    }
    $('.timer p').text(duree['focus'].doted_time);

function stop_pomodoro() {
    pomodori_status = "pause";

    $('#launcher').text('pause');
    $('#launcher').attr('class', 'btn pause');
}
function start_pomodoro(timer2) {
    var interval = setInterval(function pomodori() {

        if (pomodori_status == "pause") {
            
            clearInterval(interval);
        }
        if (pomodori_status == "running") {
            
            var timer = timer2.split(':');
            //by parsing integer, I avoid all extra string processing
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            if (minutes < 0) clearInterval(interval);
            seconds = (seconds < 0) ? 59 : seconds;
            var curent_time = (minutes * 60) + seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            //minutes = (minutes < 10) ?  minutes : minutes;
            var total_time = (duree["focus"].minutes_time * 60)
            var time_left = ((total_time - curent_time) / total_time) * 100;
            var percent_to_show = (Math.round(time_left));
            $('.timer p').text(minutes + ':' + seconds);
            timer2 = minutes + ':' + seconds;
            if (percent_to_show > 0 && percent_to_show < 100) {
                $('#pc span').text(percent_to_show + "%")
                $('#pc').attr('class', 'c100 p' + percent_to_show + ' big orange');
            }
            if (seconds == 0 && minutes == 0) {
                pomodori_count++;
                if (pomodori_count % 4 == 0) {
                    
                    pomodori_status = "long_break";
                    timer2 = duree["long_break"].doted_time;
                    $('h1').text("LONGUE PAUSE");
                    
                } else {
                    pomodori_status = "break";
                    timer2 = duree["break"].doted_time;
                    $('h1').text("COURTE PAUSE");
                }
                $('#launcher').hide();
                percent_to_show = 0;
                set_bg_green();
                $('#pc').attr('class', 'c100 p' + percent_to_show + ' big green')
                
            }
        }
        /*if (percent_to_show == 100) {
            pomodori_status = "break";
            timer2 = '5:00';
            percent_to_show = 0;
            
        }*/
        if (pomodori_status == "break") {
            var timer = timer2.split(':');
            //by parsing integer, I avoid all extra string processing
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            if (minutes < 0) clearInterval(interval);
            seconds = (seconds < 0) ? 59 : seconds;
            var curent_time = (minutes * 60) + seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            //minutes = (minutes < 10) ?  minutes : minutes;
            var total_time = duree['break'].minutes_time * 60
            var time_left = ((total_time - curent_time) / total_time) * 100;
            var percent_to_show = (Math.round(time_left));
            $('.timer p').text(minutes + ':' + seconds);
            $('#pc span').text(percent_to_show + "%")
            timer2 = minutes + ':' + seconds;
            if (percent_to_show > 0 && percent_to_show < 100) {
                $('#pc').attr('class', 'c100 p' + percent_to_show + ' big green');
            }
            if (seconds == 0 && minutes == 0) {
                pomodori_status = "running";
                timer2 = duree['focus'].doted_time;
                percent_to_show = 0;
                set_bg_red();
                $('#pc').attr('class', 'c100 p' + percent_to_show + ' big orange')
                $('#launcher').show();
                $('h1').text("POMODORI N°"+(pomodori_count+1));
            }
        }
        if (pomodori_status == "long_break") {
            var timer = timer2.split(':');
            //by parsing integer, I avoid all extra string processing
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            if (minutes < 0) clearInterval(interval);
            seconds = (seconds < 0) ? 59 : seconds;
            var curent_time = (minutes * 60) + seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            //minutes = (minutes < 10) ?  minutes : minutes;
            var total_time = (duree['long_break'].minutes_time * 60)
            var time_left = ((total_time - curent_time) / total_time) * 100;
            var percent_to_show = (Math.round(time_left));
            $('.timer p').text(minutes + ':' + seconds);
            $('#pc span').text(percent_to_show + "%")
            timer2 = minutes + ':' + seconds;
            if (percent_to_show > 0 && percent_to_show < 100) {
                $('#pc').attr('class', 'c100 p' + percent_to_show + ' big green');
            }
            if (seconds == 0 && minutes == 0) {
                pomodori_status = "running";
                timer2 = duree['focus'].doted_time;
                percent_to_show = 0;
                set_bg_red();
                $('#pc').attr('class', 'c100 p' + percent_to_show + ' big orange')
                $('#launcher').show();
                $('h1').text("PHASE ANTI-DISTRACTION");
            }
        }
        console.log(pomodori_status);

    }, 1000)
}; $("#launcher").click(function () {
    if (pomodori_status == "pause") {
        $('#launcher').text('pause');
        pomodori_status = "running";
        start_pomodoro(duree['focus'].doted_time);
        $('#launcher').attr('class', 'btn pause');

    } else {

        if (pomodori_status == "running") {
            pomodori_status = "pause";
            $('#launcher').attr('class', 'btn start');
            $('#launcher').text('restart');
            start_pomodoro(duree['focus'].doted_time);

        } else {


        }
    }
    console.log(pomodori_status);

    /* if( pomodori_status = "running"){
        $('#launcher').text('restart');
        stop_pomodoro();
    }*/

})

});