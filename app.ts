declare var $: any;
declare type JQueryEvent = any;
declare type JQueryHTMLElement = any;

$(document).ready(function () {

    $("#me").click((e: JQueryEvent) => {
        e.preventDefault();

        function myel(myclass: string = ""): JQueryHTMLElement | undefined {

            if ($("#inputme").val().trim() == '') {
                return;
            }
            else {
                let vall: string = <string>$("#inputme").val(),
                    newH3: JQueryHTMLElement = $('<h3> </h3>'),
                    newDiv: JQueryHTMLElement = $('<div class="line"> </div>'),
                    bigDiv: JQueryHTMLElement = $(`<div ${myclass} > </div>`);

                $(newH3).append(vall);
                $(newDiv).append(newH3);
                $(bigDiv).append(newDiv);
                return bigDiv;
            }
        }
        $("#messageyou").append(myel());
        $("#messageme").append(myel('class= "end"'));
        $("#inputme").val("");

        document.querySelector("#messageme")!.scrollTo(0, document.querySelector("#messageme")!.scrollHeight);
        document.querySelector("#messageyou")!.scrollTo(0, document.querySelector("#messageyou")!.scrollHeight);

    });

    $("#you").click((e: JQueryEvent) => {
        e.preventDefault();

        function myel(myclass: string = ""): JQueryHTMLElement | undefined {

            if ($("#inputyou").val().trim() == '') {
                return;
            }
            else {
                let vall = $("#inputyou").val(),
                    newH3: JQueryHTMLElement = $('<h3> </h3>'),
                    newDiv: JQueryHTMLElement = $('<div class="line"> </div>'),
                    bigDiv: JQueryHTMLElement = $(`<div ${myclass} > </div>`);

                $(newH3).append(vall);
                $(newDiv).append(newH3);
                $(bigDiv).append(newDiv);
                return bigDiv;
            }
        }
        $("#messageme").append(myel());
        $("#messageyou").append(myel('class= "end"'));
        $("#inputyou").val("");

        document.querySelector("#messageme")!.scrollTo(0, document.querySelector("#messageme")!.scrollHeight);
        document.querySelector("#messageyou")!.scrollTo(0, document.querySelector("#messageyou")!.scrollHeight);

    });



});

