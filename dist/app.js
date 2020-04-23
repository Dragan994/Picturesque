            var alarm = document.getElementById('alarm');
            var pojamOut = document.getElementById('pojamOut');
            var birajPojam = document.getElementById('birajPojam');
            var pocniVreme = document.getElementById('pocniVreme');
            var vreme = document.getElementById('vreme');
            var timeDiv = document.getElementById('timeDiv');
            var pojmovi = ['NORMALNO', 'ZATVORENE OČI', 'DVA POJMA', 'BEZ DIZANJA', 'LEVA RUKA', 'NORMALNO']
            var minut = 60;
            var off = 1;
            var timer;

            function pokaziPojam(){
                off = 0;
                var nasumBr = Math.floor(Math.random() * pojmovi.length);
                birajPojam.classList.add('hideMe');
                pojamOut.classList.remove('hideMe');
                pojamOut.innerHTML = pojmovi[nasumBr];
            }

            function dajVreme(){
                if(off == 0){
                minut = 60;
                timer = setInterval(secPass, 1000);                
                vreme.innerHTML = minut
                pocniVreme.classList.add('hideMe');
                vreme.classList.remove('hideMe');
                timeDiv.classList.add('animated');
                } else {
                    alarm.play();
                    alert("Izaberi pojam!")
                }
            }
            function resetAll(){
                off = 1;
                birajPojam.classList.remove('hideMe');
                pojamOut.classList.add('hideMe');
                vreme.classList.add('hideMe');
                pocniVreme.classList.remove('hideMe');
                timeDiv.classList.remove('animated');
                clearInterval(timer);
                alarm.play();
            }
            function secPass(){
                vreme.innerHTML = minut;
                console.log(minut);
                if(minut <= 0){
                    console.log('asda')
                    resetAll()
                }else{
                    minut--;
                }
            }