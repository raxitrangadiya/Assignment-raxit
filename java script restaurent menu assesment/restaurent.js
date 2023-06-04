        let booking_select = document.getElementById("bookingOption");

        booking_select.addEventListener("change", function () {   //event called//
            var options = booking_select.querySelectorAll("option");
            console.log('You selected: ', this.value);

            let date_exist = document.getElementsByClassName("date");
            let slot_exist = document.getElementsByClassName("slot");
            let time_exist = document.getElementsByClassName("time");


            let tr_date = document.createElement("tr");//date create element and properti assigned//
            tr_date.setAttribute('class', 'thisrequired');
            let td_label = document.createElement("td");
            let td_label_date = document.createElement("label");
            let text1 = document.createTextNode('Date');
            let td_date = document.createElement("td");
            td_date.setAttribute('id', 'date_td');
            let input_date = document.createElement("input");
            input_date.setAttribute('type', 'date');
            // input_date.setAttribute('classs', 'thisrequired');

            let tr_slot = document.createElement("tr");//slot create element and properti assigned//
                tr_slot.setAttribute('class', 'thisrequired');
                let td_label_s = document.createElement("td");
                let td_label_slot = document.createElement("label");
                let text2 = document.createTextNode('Slot');
                let td_slot = document.createElement("td");
                td_slot.setAttribute('id', 'slot_td');

            let tr_time = document.createElement("tr");//time create element and properti assigned//
            tr_time.setAttribute('class', 'thisrequired');
            let td_label_t = document.createElement("td");
            let td_label_time = document.createElement("label");
            let text3 = document.createTextNode('time');
            let td_time = document.createElement("td");
            td_time.setAttribute('id', 'time_td');
            let input_time = document.createElement("input");
            input_time.setAttribute('type', 'time');

            if ((booking_select.value === "a1")) { //a1 value
               if(time_exist.length !== 0){          //a3 value 1
                document.querySelector("tr.time").remove();
             }
             if(slot_exist.length === 0){//a2 value 0
           }else{
            document.querySelector("tr.slot").remove();
           }
                if(date_exist.length == 0){      //a1 value 0//
                    td_label_date.appendChild(text1);
                tr_date.appendChild(td_label);
                td_label.appendChild(td_label_date);
                document.querySelector("#butTon").before(tr_date);
                tr_date.appendChild(td_date);
                td_date.appendChild(input_date);
                }
            
            }
            else if ((booking_select.value === "a2")  && (slot_exist.length == 0)) {
                if(date_exist.length == 0){
                td_label_date.appendChild(text1);
                tr_date.appendChild(td_label);
                td_label.appendChild(td_label_date);
                document.querySelector("#butTon").before(tr_date);
                tr_date.appendChild(td_date);
                td_date.appendChild(input_date);
                }
                if(time_exist.length !== 0){
                    document.querySelector("tr.time").remove();
                } 
                td_label_slot.appendChild(text2);
                tr_slot.appendChild(td_label_s);
                td_label_s.appendChild(td_label_slot);
                document.querySelector("#butTon").before(tr_slot);
                tr_slot.appendChild(td_slot);
                let values = ["select", "breakfast", "lunch", "dinner"];
                let select_slot = document.createElement("select");
                select_slot.setAttribute('id', 'slot');
                select_slot.setAttribute('name', 'slot');
                td_slot.appendChild(select_slot);

                for (let val of values) {
                    let option_slot = document.createElement("option");
                    option_slot.value = val;
                    option_slot.text = val.charAt(0).toUpperCase() + val.slice(1);
                    select_slot.appendChild(option_slot);
                }

            }
            else if ((booking_select.value === "a3") && (time_exist.length==0)) {
                if((slot_exist.length !== 0)){
                    document.querySelector("tr.slot").remove();
                }
                if((date_exist.length == 0)){
                    td_label_date.appendChild(text1);
                tr_date.appendChild(td_label);
                td_label.appendChild(td_label_date);
                document.querySelector("#butTon").before(tr_date);
                tr_date.appendChild(td_date);
                td_date.appendChild(input_date);
                }
            tr_time.appendChild(td_label_t);
            td_label_t.appendChild(td_label_time);
            td_label_time.appendChild(text3);
            document.querySelector("#butTon").before(tr_time);
                tr_time.appendChild(td_time);
                td_time.appendChild(input_time);
            }
        });
//this fieleld is required ERROR 



        