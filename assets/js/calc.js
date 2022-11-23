'use strict'
const $calcTtotal = document.querySelector('.calc-total');

let calcTtotalCounter = 0, calcTotalStart, calcTotalEnd, calcTotalEndMove, calcTotalDelta = 0;

let $calcRanges = document.querySelectorAll('[type=range]');
const $calcGraph = document.getElementById('calc-graph');


for (let e of $calcRanges) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}


$calcRanges.forEach(el => {
    setRangValToInput(el);
    setYearsRange(el);

    el.addEventListener('input', () => {
        setRangValToInput(el);
        setYearsRange(el);

        calcChange()
    })
});


document.querySelectorAll('.calc-set_input input').forEach(el => {
    el.addEventListener('change', function() {
        let val = el.value;
        let range = el.closest('.calc-set').querySelector('[type=range]')

        if (val < range.min) {
            val = range.min;
        }

        else if (val > range.max) {
            val = range.max;
        }

        range.style.setProperty('--value', val)
        range.value = val

        calcChange()
    })
});


document.getElementsByName('calc-set-procent').forEach(element => {
    element.addEventListener('change', function() {
        calcChange()
    })
});


document.addEventListener('click', function(e) {
    if (e.target.closest('#calc-prematurely-btn')) {
        $calcTtotal.classList.add('calc-total--prematurely')

        document.querySelector('.prematurely-payment').classList.remove('d-none')

        addNewPrematurely()
    }

    if (e.target.closest('.prematurely-payment__another')) {
        let prematurely = e.target.closest('.prematurely-payment')
        let prematurelyNext = prematurely.cloneNode(true)

        prematurely.after(prematurelyNext)

        addNewPrematurely()
    }

    if (e.target.closest('.prematurely-payment__remove')) {
        let prematurely = e.target.closest('.prematurely-payment')

        if (document.querySelectorAll('.prematurely-payment').length == 1) {
            prematurely.classList.add('d-none')
            $calcTtotal.classList.remove('calc-total--prematurely')
        }

        else {
            prematurely.remove()
        }

        calcChange()
    }


    if (e.target.closest('.prematurely-payment__period label')) {
        setTimeout(() => {
            calcChange()
        }, 1);
    }
})


document.querySelectorAll('.prematurely-payment__sum select.select-styled').forEach(el => {
    addPeriodChange(el)
});

$('[name=calc-radio]').change(function () {
    if ($(this).val() === 'payment') {
        $('#calc-cost-realty-container').hide();
        $('#calc-monthly-payment-container').show();
    } else {
        $('#calc-monthly-payment-container').hide();
        $('#calc-cost-realty-container').show();
    }
});
$('[name=calc-rate]').change(function () {
    calcChange();
});
$('.calc-range').on('input change', function () {
    calcChange();
});
$('#slider-range_calc-price').slider({'change': function () {
    calcChange();
}});
$('#slider-range_calc-period').slider({'change': function () {
    calcChange();
}});
calcChange();


function calcChange() {
    calcPayments()
    graphBuild()
    //prematurelyProfit()
    //prematurelyTimeProfit()
}


function prematurelyProfit() {
    let  repaymentPercentList = document.querySelectorAll('#calc-graph tr + tr td:nth-child(4)')
    let repaymentPercentSum = 0

    for (let index = 0; index < repaymentPercentList.length; index++) {
        repaymentPercentSum += +repaymentPercentList[index].innerText;
    }

    document.querySelectorAll('.calc-total__item:not(#calc-time) mark').forEach(element => {
        element.innerText = roundNumber(+document.getElementById('calc-percents').innerText - repaymentPercentSum)
    });
}


function prematurelyTimeProfit() {
    const calcTime = document.querySelector('#calc-time');

    if (document.querySelector('.prematurely-payment__sum [data-value="time"]')) {
        let profitMonthsTotal = +document.querySelector('#calc-repayment .calc-set_input input').value * 12 - +document.querySelector('#calc-graph tr:last-child td:first-child').innerText;
        let profitYears = Math.floor(profitMonthsTotal/12);
        let profitMonths = profitMonthsTotal - profitYears * 12;

        calcTime.classList.remove('d-none')

        if (profitYears > 0) {
            document.getElementById('calc-time__years').innerText = profitYears
            document.getElementById('calc-time__years-ending').innerText = setYears(profitYears)
        }

        if (profitMonths > 0) {
            document.getElementById('calc-time__months').innerText = profitMonths
            document.getElementById('calc-time__months-ending').innerText = setMonths(profitMonths)
        }
    }

    else {
        calcTime.classList.add('d-none')
    }
}

function prepareSum(str) {
    str = str.replace(/\s/g, '');
    return parseFloat(str);
}
function calcPayments() {
    let credit, monthlyPercent, percents, total;
    let costRealty = prepareSum(document.querySelector('#calc-cost-realty').value);
    let initialPayment = prepareSum(document.querySelector('#calc-price').value);
    let percentRate = prepareSum(document.querySelector('input[name="calc-rate"]:checked').value);
    let monthlyPayment = prepareSum(document.querySelector('#calc-monthly-payment').value);
    let repayment = prepareSum(document.querySelector('#calc-period').value);

    let type = $('[name=calc-radio]:checked').val();

    monthlyPercent = percentRate / 1200;

    console.log(costRealty, monthlyPayment)

    if (type === 'payment') {
        //costRealty = monthlyPayment / (monthlyPercent / (1 - Math.pow((1 + monthlyPercent), -(repayment * 12)))) + initialPayment

        //document.querySelector('#cost-realty span').innerText = roundNumber(costRealty)
    }

    credit = costRealty - initialPayment;

    if (type !== 'payment') {
        monthlyPayment = credit * (monthlyPercent / (1 - (Math.pow((1 + monthlyPercent), -(repayment * 12)))));

        $('#calc-monthly-payment').val(new Intl.NumberFormat('ru-RU').format(roundNumber(monthlyPayment)));
    }

    percents = monthlyPayment * repayment * 12 - credit
    total = credit + percents

    document.querySelector('#monthly-payment span').innerText = new Intl.NumberFormat('ru-RU').format(roundNumber(monthlyPayment))
    document.querySelector('#calc-credit').innerText = new Intl.NumberFormat('ru-RU').format(roundNumber(credit))
    document.querySelector('#percent-monthly').innerText = percentRate
    document.querySelector('#calc-percents').innerText = new Intl.NumberFormat('ru-RU').format(roundNumber(percents))
    document.querySelector('#calc-total').innerText = new Intl.NumberFormat('ru-RU').format(roundNumber(total))
    document.querySelector('#calc-income').innerText = new Intl.NumberFormat('ru-RU').format(roundNumber(monthlyPayment * 1.667))
}


function graphBuild() {
    let tableRows = $('.payment-schedule__content').html('');
    let graphCredit = prepareSum(document.getElementById('calc-credit').innerText);
    let graphPercentMonthly = prepareSum(document.getElementById('percent-monthly').innerText) / 1200;
    let graphMonthlyPayment = prepareSum(document.querySelector('#monthly-payment span').innerText);
    let graphRepayment = prepareSum(document.querySelector('#calc-period').value);
    if (document.querySelector('.calc--payment')) {
        graphMonthlyPayment = prepareSum(document.querySelector('#calc-monthly-payment .calc-set_input input').value);
    }

    let paymentNumber = 1;
    let paymentDate = new Date();
    let repaymentPersents = graphCredit * graphPercentMonthly;
    let repaymentCredit = graphMonthlyPayment - repaymentPersents;
    let debt = graphCredit - repaymentCredit;
    let payment = repaymentPersents + repaymentCredit;

    let prematurelyCalculate = 0;
    let prematurelyOnce = 0;
    let prematurelyPayments = toArrayPrematurelyPayments();

    if (paymentDate.getDate() != 1) {
        paymentDate.setMonth((paymentDate.getMonth() + 1), 1)
    }

    while(debt >= 0) {
        prematurelyPayments.forEach(el => {
            if (dateToFirstOfMonth(paymentDate) == el.date)  {
                prematurelyCalculate += el.cost

                if (el.period == 'once') {
                    prematurelyOnce += el.cost
                }

                if(el.decrease == 'payment') {
                    graphMonthlyPayment = (debt - prematurelyCalculate) * (graphPercentMonthly / (1 - (Math.pow((1 + graphPercentMonthly), -(graphRepayment * 12 - paymentNumber)))));
                }
            }
        });

        $(tableRows).append(`
        <div class="payment-schedule__row">
            <div class="payment-schedule__item">${paymentNumber}</div>
            <div class="payment-schedule__item">${dateToFirstOfMonth(paymentDate)}</div>
            <div class="payment-schedule__item">${roundNumber(debt, 1) - prematurelyCalculate} ₽</div>
            <div class="payment-schedule__item">${roundNumber(repaymentPersents, 1)} ₽</div>
            <div class="payment-schedule__item">${roundNumber(repaymentCredit, 1) + prematurelyCalculate} ₽</div>
            <div class="payment-schedule__item">${roundNumber(payment, 1) + prematurelyCalculate} ₽</div>
        </div>
        `);
        paymentNumber++
        paymentDate.setMonth(paymentDate.getMonth() + 1)
        repaymentPersents = debt * graphPercentMonthly;
        repaymentCredit = graphMonthlyPayment - repaymentPersents;
        payment = repaymentPersents + repaymentCredit;
        debt = debt - repaymentCredit - prematurelyCalculate;

        prematurelyCalculate = prematurelyCalculate - prematurelyOnce
        prematurelyOnce = 0
    }
}


function toArrayPrematurelyPayments() {
    let prematurelyList = []

    let arrayPrematurelyPayments = document.querySelectorAll('.prematurely-payment:not(.d-none)')

    arrayPrematurelyPayments.forEach(el => {
        let datapickerValue =  el.querySelector('.date-select input').dataset.date;

        prematurelyList.push(
            {
                date: datapickerValue ? dateToFirstOfMonth(new Date(datapickerValue)) : setEmptyDate(),
                period: el.querySelector('.prematurely-payment__period .active').dataset.value,
                decrease: el.querySelector('.prematurely-payment__sum .item').dataset.value,
                cost: +el.querySelector('.prematurely-payment__sum  .number').value.replace(/\s/g, '')
            }
        )
    });

    function setEmptyDate() {
        return dateToFirstOfMonth(new Date())
    }

    return prematurelyList
}


function dateToFirstOfMonth(date) {
    if (date.getDate() != 1) {
        date.setMonth((date.getMonth() + 1), 1)
    }

    return date.toLocaleDateString();
}


function setYears(val) {
    let ending;

    if (val > 4 && val < 21) {
        ending = 'Р»РµС‚'
    }

    else if (val % 10 == 1) {
        ending = 'РіРѕРґ'
    }

    else if (val % 10 > 1 && val % 10 < 5) {
        ending = 'РіРѕРґР°'
    }

    else {
        ending = 'Р»РµС‚'
    }

    return ending
}

function setMonths(val) {
    let ending;

    if (val == 1) {
        ending = 'РјРµСЃСЏС†'
    }

    else if (val > 1 && val < 5) {
        ending = 'РјРµСЃСЏС†Р°'
    }

    else {
        ending = 'РјРµСЃСЏС†РµРІ'
    }

    return ending
}


function setYearsRange(el) {
    if (el.closest('.calc-set--years')) {
        el.closest('.calc-set--years').querySelector('.calc-set_input p').innerText = setYears(+el.value)
    }
}


function setRangValToInput(el) {
    el.closest('.calc-set').querySelector('.calc-set_input input').value = el.value
}


function roundNumber(number, character = 1) {
    return Math.round(number * character) / character
}


function addDatePicker() {
    const datePickerInputs = document.querySelectorAll('.date-select input')

    datePickerInputs.forEach(instance => {
        instance.id = ''
        instance.classList.remove('hasDatepicker')

        const datepicker = new Datepicker(instance, {
            language: 'ru',
            prevArrow: '<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L8 7L1 0.999999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            nextArrow: '<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L8 7L1 0.999999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        });

        instance.addEventListener('show', function() {
            if (datepicker.picker.element.classList.contains('datepicker-orient-bottom')) {
                this.classList.add('datepicker-orient-bottom')
            }

            else {
                this.classList.add('datepicker-orient-top')
            }
        })

        instance.addEventListener('changeDate', function() {
            datepicker.update()

            let newDate = datepicker.getDate()

            instance.dataset.date = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`

            if (newDate < new Date()) {
                instance.dataset.date = ''
                instance.value = ''
            }
        })

        instance.addEventListener('hide', function() {
            this.classList.remove('datepicker-orient-bottom', 'datepicker-orient-top')
        })
    });
}


function addPrematurelyCost() {
    document.querySelectorAll('.prematurely-payment__cost').forEach(el => {
        el.addEventListener('input', function() {
            calcChange()
        })
    });
}


function addNewPrematurely() {
    addPrematurelyCost()
    addDatePicker()

    calcChange()

    document.querySelectorAll('.prematurely-payment__sum select.select-styled').forEach(el => {
        if (!el.tomselect) {
            el.id = '';
            el.classList.remove('tomselected', 'ts-hidden-accessible')
            el.nextElementSibling.remove()

            new TomSelect(el, {
                onInitialize:function() {
                    this.control.append(createSelectArrow())
                }
            })

            addPeriodChange(el)
        }
    });
}


function addPeriodChange(el) {
    el.addEventListener('change', function() {
        calcChange()
    })
}