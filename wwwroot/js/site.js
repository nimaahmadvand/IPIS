
function options(t, o, s, r) {
    return {
        series: [],
        noData: {
            text: ''
        },
        chart: {
            fontFamily: "inherit",
            type: "area",
            height: t,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !1
            },
            sparkline: {
                enabled: !0
            }
        },
        plotOptions: {},
        legend: {
            show: !1
        },
        dataLabels: {
            enabled: !1
        },
        fill: {
            type: "solid",
            opacity: .3
        },
        stroke: {
            curve: "smooth",
            show: !0,
            width: 3,
            colors: [s]
        },
        xaxis: {
            
            axisBorder: {
                show: !1
            },
            axisTicks: {
                show: !1
            },
            labels: {
                show: !1,
                style: {
                    colors: o,
                    fontSize: "12px",
                    direction: 'rtl'
                }
            },
            crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                    color: "#E4E6EF",
                    width: 1,
                    dashArray: 3
                }
            },
            tooltip: {
                enabled: !1,
                formatter: void 0,
                offsetY: 0,
                style: {
                    fontSize: "12px",
                    direction: 'rtl'
                }
            }
        },
        yaxis: {
            //min: 0,
            //max: 600,
            labels: {
                show: !1,
                style: {
                    colors: o,
                    fontSize: "12px",
                    direction: 'rtl'
                }
            }
        },
        states: {
            normal: {
                filter: {
                    type: "none",
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: "none",
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                    type: "none",
                    value: 0
                }
            }
        },
        tooltip: {
            style: {
                fontSize: "12px",
                direction: 'rtl'
            },
            y: {
                formatter: function (e) {
                    return e.toLocaleString() + " ریال"
                }
            }
        },
        colors: [s],
        markers: {
            colors: [s],
            strokeColor: [r],
            strokeWidth: 3
        }
    }
}
(function () {
    'use strict'
    var e = document.querySelectorAll(".statistics-widget-chart");
    [].slice.call(e).map((function (e) {
        var t = parseInt(KTUtil.css(e, "height"));
        if (e) {
            var a = e.getAttribute("data-kt-chart-color"),
                o = KTUtil.getCssVariableValue("--bs-gray-800"),
                s = KTUtil.getCssVariableValue("--bs-" + a),
                r = KTUtil.getCssVariableValue("--bs-light-" + a),
                chart_url = e.getAttribute("data-kt-chart-url"),
                Series_name = e.getAttribute("data-kt-chart-Series-name");

            var chart = new ApexCharts(e, options(t, o, s, r));
            chart.render();
            var url = chart_url;
            $.getJSON(url, function (response) {
                chart.updateSeries([{
                    name: Series_name,
                    data: response
                }])
            });
        }
    }))
})();








(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
var settings = {
    validClass: "is-valid",
    errorClass: "is-invalid"

};
$.validator.setDefaults(settings);
$.validator.unobtrusive.options = settings;


/*! Select2 */
!function () { if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define("select2/i18n/fa", [], function () { return { errorLoading: function () { return "امکان بارگذاری نتایج وجود ندارد." }, inputTooLong: function (n) { return "لطفاً " + (n.input.length - n.maximum) + " کاراکتر را حذف نمایید" }, inputTooShort: function (n) { return "لطفاً تعداد " + (n.minimum - n.input.length) + " کاراکتر یا بیشتر وارد نمایید" }, loadingMore: function () { return "در حال بارگذاری نتایج بیشتر..." }, maximumSelected: function (n) { return "شما تنها می‌توانید " + n.maximum + " آیتم را انتخاب نمایید" }, noResults: function () { return "هیچ نتیجه‌ای یافت نشد" }, searching: function () { return "در حال جستجو..." }, removeAllItems: function () { return "همه موارد را حذف کنید" } } }), n.define, n.require }();
$.fn.select2.defaults.set("language", "fa");



$(document).on('click', '.ajaxSubmit', function () {
    var _formId = $(this).attr('data-ajax-formId');
    if (_formId != null) {
        if (_formId != "") {
            $(_formId).submit();
        }
    }

});

var blockUI = null;

$(document).ready(function () {

    var target = document.querySelector('.FormAjax');
    if (target != null) {
        blockUI = new KTBlockUI(target);
    }
});


function FormBegin() {

    if (blockUI != null) {
        if (blockUI.isBlocked() === false) {
            blockUI.block();
        }
    }
}

function FormSuccess(result) {

    if (result.success == true) {
        var _title = "هورا 😇";
        var _rowID = result.rowID;
        if (_rowID != null) {
            _title += " | شناسه: " + _rowID;
        }
        Swal.fire({
            icon: 'success',
            title: _title,
            text: 'اطلاعات فرم با موفقیت ذخیره شد',
            focusConfirm: true,
            confirmButtonText: 'باشه',
            timer: 3000,
            timerProgressBar: true,
        }).then((result) => {

            var _url_back = $(this).attr('data-ajax-url-back');
            if (_url_back != null) {
                if (_url_back != "") {
                    location.href = _url_back;
                }
            }

        })
    } else {

        myNotification('Swal', 'وای 🙁', result.error, 'error');
    }



}

function FormFailure() {

    myNotification("Swal", "وای 🙁", "اطلاعات فرم ذخیره نشد", "error");
}


function FormComplete() {
    if (blockUI != null) {
        if (blockUI.isBlocked() === true) {
            blockUI.release();
        }
    }
}


function myNotification(Framework, Title, Description, Icon) {

    if (Framework == "Toastr") {
        toastr.options.rtl = true;
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-bottom-left",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        switch (Icon) {
            case "warning":
                toastr.warning(Description, Title);
                break;
            case "success":
                toastr.success(Description, Title);
                break;
            case "error":
                toastr.error(Description, Title);
                break;
            default:
                toastr.success(Description, Title);
        }
    }

    if (Framework == "Swal") {
        Swal.fire({
            icon: Icon,
            title: Title,
            text: Description,
            confirmButtonText: 'باشه',
            focusConfirm: true,

        });
    }

}

function SetMvcGridLang() {
    'use strict';
    var _dir = document.dir.toString();
    if (_dir == "rtl") {
        MvcGrid.lang = {
            default: {
                "equals": "برابر باشد",
                "not-equals": "برابر نباشد"
            },
            text: {
                "contains": "حاوی",
                "equals": "برابر باشد",
                "not-equals": "برابر نباشد",
                "starts-with": "شروع می شود با",
                "ends-with": "به پایان می رسد با"
            },
            number: {
                "equals": "برابر باشد",
                "not-equals": "برابر نباشد",
                "less-than": "کمتر از",
                "greater-than": "بزرگتر از",
                "less-than-or-equal": "کوچکتر یا مساوی",
                "greater-than-or-equal": "بزرگتر یا مساوی"
            },
            date: {
                "equals": "برابر باشد",
                "not-equals": "برابر نباشد",
                "earlier-than": "کوچکتر از",
                "later-than": "بزرگتر از",
                "earlier-than-or-equal": "کوچکتر یا مساوی",
                "later-than-or-equal": "بزرگتر یا مساوی"
            },
            guid: {
                "equals": "برابر باشد",
                "not-equals": "برابر نباشد"
            },
            filter: {
                "apply": "&#10003;",
                "remove": "&#10008;"
            },
            operator: {
                "select": "",
                "and": "و",
                "or": "یا"
            }

        }
    }
};

SetMvcGridLang();


$(document).on('click', '#LogoutSubmit', function () {
    document.getElementById("FormLogout").submit();
})

$(document).on('click', '.SweetAlert-Delete', function () {


    var _dir = document.dir.toString();

    var Text1 = "";
    var Text2 = "";
    var Text3 = "";
    var Text4 = "";
    var Text5 = "";
    var Text6 = "";
    var Text7 = "";
    var Text8 = "";
    var Text9 = "";

    if (_dir == "rtl") {
        Text1 = "آسوده خاطر هستی؟";
        Text2 = "دیگر نمی توانید این مورد را بازیابی کنید";
        Text3 = "بله، حذف شود";
        Text4 = "انصراف";
        Text5 = "حذف شد!";
        Text6 = "مورد شما حذف گردید";
        Text7 = "باشه";
        Text8 = "خطا";
        Text9 = "شما دسترسی به این منبع را ندارید";

    } else {
        Text1 = "Are you sure?";
        Text2 = "You won't be able to revert this!";
        Text3 = 'Yes, delete it!';
        Text4 = "Cancel"
        Text5 = "Deleted!"
        Text6 = "Your file has been deleted."
        Text7 = "Ok";
        Text8 = "Error";
        Text9 = "You do not have access to this resource.";
    }

    var t = $("input[name='__RequestVerificationToken']").val();
    var _url = $(this).attr('data-href');

    const { value: formValues } = Swal.fire({
        icon: 'success',
        title: Text1,
        text: Text2,
        focusConfirm: true,
        icon: 'warning',
        confirmButtonColor: '#e7515a',
        cancelButtonColor: '#3b3f5c',
        showLoaderOnConfirm: true,
        showCancelButton: true,
        confirmButtonText: Text3,
        cancelButtonText: Text4,
        preConfirm: (data) => {

            return $.ajax({
                type: 'POST',
                dataType: 'json',
                url: _url,
                success: function (data) {

                    if (data.success == true) {

                        Swal.fire({
                            icon: 'success',
                            title: Text5,
                            text: Text6,
                            focusConfirm: true,
                            confirmButtonText: Text7,
                        }).then((result) => {

                            document.querySelectorAll('.mvc-grid').
                                forEach(function (griditem) { new MvcGrid(griditem).reload(); });

                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: Text8,
                            text: data.error,
                            focusConfirm: true,
                            confirmButtonText: Text7,
                        });

                    }

                }
            }).fail(function (xhr) {

                Swal.fire(
                    {
                        title: Text8,
                        text: Text9,
                        icon: 'error',
                        confirmButtonText: Text7,
                        confirmButtonColor: '#3b3f5c',
                        focusConfirm: true,
                    }
                );
                console.log('error : ' + xhr.status + ' - ' + xhr.statusText + ' - ' + xhr.responseText);
            });

        }
    })

    if (formValues) {
        return formValues
    }

});



$(document).on('click', '.Modalclick', function () {


    var t = $("input[name='__RequestVerificationToken']").val();

    var _modalId = $(this).attr('data-modalId');
    var _modalContentId = $(this).attr('data-modalContentId');
    var _href = $(this).attr('data-href');

    $.ajax({
        url: _href,
        headers:
        {
            "RequestVerificationToken": t
        },
        success: function (result) {

            $('#' + _modalContentId).html(result);
            $("#" + _modalId).modal('show');


            $('#Modalform').submit(function (e) {

                var btn = document.querySelector("#btn_Save");

                if (btn != null) {
                    btn.setAttribute("data-kt-indicator", "on");
                }


                e.preventDefault();
                if (!$(this).valid()) {
                    if (btn != null) {
                        btn.removeAttribute("data-kt-indicator");
                    }
                    return false;

                }

                $.ajax({

                    url: this.action,
                    type: this.method,
                    data: $(this).serialize(),
                    enctype: 'multipart/form-data',
                    headers:
                    {
                        "RequestVerificationToken": t
                    },
                }).done(function (result) {
                    if (result.success) {
                        if (btn != null) {
                            btn.removeAttribute("data-kt-indicator");
                        }
                        $("#" + _modalId).modal('hide');

                        document.querySelectorAll('.mvc-grid').
                            forEach(function (griditem) { new MvcGrid(griditem).reload(); });


                    } else {

                        if (btn != null) {
                            btn.removeAttribute("data-kt-indicator");
                        }
                        myNotification('Swal', result.error, '', 'error');

                        $.each(result.error, function (key, val) {
                            var container = $('span[data-valmsg-for="' + key + '"]');
                            container.removeClass("field-validation-valid").addClass("field-validation-error");
                            container.html(val[val.length - 1].ErrorMessage);
                        });

                    }
                })
                    .fail(function (xhr, status, error) {
                        if (btn != null) {
                            btn.removeAttribute("data-kt-indicator");
                        }
                        myNotification('Swal', error, '', 'error');

                    });
            });
        }


    }).fail(function (xhr) {
        myNotification('Swal', 'شما دسترسی به این منبع را ندارید', '', 'error');
        console.log('error : ' + xhr.status + ' - ' + xhr.statusText + ' - ' + xhr.responseText);
    });


    return false;
});



$(document).on('click', '.GetDataFromAjax', function () {

    var _dataText = $(this).attr("data-text");
    var _dataHref = $(this).attr("data-href");
    var _dataHrefBack = $(this).attr("data-href-Back");

    var Text1 = "";
    var Text2 = "";
    var Text3 = "";
    var Text4 = "";
    var Text5 = "";
    var Text6 = "";
    var Text7 = "";
    var Text8 = "";
    var Text9 = "";

    Text1 = "آسوده خاطر هستی؟";
    Text2 = _dataText;
    Text3 = "بله، انجام شود";
    Text4 = "انصراف";
    Text5 = "انجام شد!";
    Text6 = "عملیات شما با موفقیت انجام شد";
    Text7 = "باشه";
    Text8 = "خطا";
    Text9 = "شما دسترسی به این منبع را ندارید";



    var t = $("input[name='__RequestVerificationToken']").val();


    const { value: formValues } = Swal.fire({
        icon: 'success',
        title: Text1,
        text: Text2,
        focusConfirm: true,
        icon: 'warning',
        confirmButtonColor: '#e7515a',
        cancelButtonColor: '#3b3f5c',
        showLoaderOnConfirm: true,
        showCancelButton: true,
        confirmButtonText: Text3,
        cancelButtonText: Text4,
        llowOutsideClick: () => !Swal.isLoading(),
        preConfirm: (data) => {

            return $.ajax({
                type: 'POST',
                dataType: 'json',
                url: _dataHref,
                success: function (data) {

                    if (data.success == true) {

                        Swal.fire({
                            icon: 'success',
                            title: Text5,
                            text: Text6,
                            focusConfirm: true,
                            confirmButtonText: Text7,
                        }).then((result) => {

                            if (_dataHrefBack != null) {

                                location.href = _dataHrefBack;
                            } else {
                                document.querySelectorAll('.mvc-grid').
                                    forEach(function (griditem) { new MvcGrid(griditem).reload(); });
                            }
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: Text8,
                            text: data.error,
                            focusConfirm: true,
                            confirmButtonText: Text7,
                        });

                    }

                }
            }).fail(function (xhr) {

                Swal.fire(
                    {
                        title: Text8,
                        text: Text9,
                        icon: 'error',
                        confirmButtonText: Text7,
                        confirmButtonColor: '#3b3f5c',
                    }
                );
                console.log('error : ' + xhr.status + ' - ' + xhr.statusText + ' - ' + xhr.responseText);
            });

        }
    })

    if (formValues) {
        return formValues
    }

});

$(document).on('click', '.SetColorScheme', function () {

    var date = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000); // +2 day from now
    var options = { expires: date };

    var status = KTCookie.get("IPIS_ColorScheme");

    if (status == null) {
        KTCookie.set("IPIS_ColorScheme", "dark-mode", options);
    }
    if (status == "dark-mode") {

        KTCookie.remove("IPIS_ColorScheme");
    }

    location.reload();

});
