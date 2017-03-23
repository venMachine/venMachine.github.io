var app = (function (){

    var Purse =[10,10,10,10],
        PurseVM = [100,100,100,100],
        Money = [1,2,5,10],
        Acount = [],
        Goods = [10,20,20,15],
        digits = [],
        Bill=0,
        valid = true,
        Change = [13,18,21,35];

    var initInside = function () {
        _setUpListners();
    };

    var  _setUpListners = function () {
        $('.buttonform').on('click', _addMoney)
        $('.buttonformVM').on('click', _addChange)
        $('.center_down-item--a').on('click', _addGoods)
         $('.class_form input').on('keypress', _checkingNum);
    }


  function _checkingNum(e) {
      if(e.keyCode < 32)return false;
      if( String.fromCharCode(e.keyCode)<'0'||String.fromCharCode(e.keyCode)>'9') return false;
  }




function _addMoney(e) {
    e.preventDefault();
    var form = $('.class_form');
    if(!validation.validateForm(form, Purse)){
       return false;
    }

    Acount = [];
     $('.input_item-form').each(function(index, elem) {
         Purse[index] = Purse[index] - $(elem).val();
         Acount.push($(elem).val() * Money[index])
         $(elem).val(0);
     });
    Acount.map(function (value,index) {
        Bill = Bill + value
    })
    $('.center_up-middle-p').text(Bill)


    digits = counterChange(Bill);
    PurseVM = PurseVM.map(function (value,index) {
        return value + digits[index];
    })
    product();
}


function _addChange(e) {
    e.preventDefault();
    digits = counterChange(Bill);
     PurseVM.forEach(function (value,index) {
         PurseVM[index] = value - digits[index];
         Purse[index] = Purse[index] + digits[index];
    })
    Bill = 0;
    $('.center_up-middle-p').text(0);
    modal.modalMassag('Спасибо');
    product();

}

    function product() {
        $('.counter_item-form').each(function (index, elem) {
            $(elem).html( Purse[index] + 'штук')
        })
        $('.counter_item-formVM').each(function (index, elem) {
            $(elem).html( PurseVM[index] + 'штук')
        })

    }

function _addGoods(e) {
    var arr=[];
    $('.center_down-item--a').map(function (index, elem){
     arr.push(elem.id)

   })
    var index = arr.indexOf(e.target.id);
    if(Goods[index] <= 0 || Bill < Change[index]){

        valid = false
    } else {
        Bill = Bill - Change[index]
        Goods[index]--;
    }

    if(valid){
        $('.center_up-middle-p').text(Bill)
        $('.center_down-item--p').each(function (index, elem) {
            $(elem).html(Goods[index] + ' порций')
        })


    }

    valid = true;
}


function counterChange(number) {
        var digits = [];
        digits.push(Math.floor(number/10));
        var a = number % 10;
        digits.push(Math.floor(a/5));
        var b = a % 5;
        digits.push(Math.floor(b/2));
        var c = b % 2;
        digits.push(Math.floor(c/1));
        return digits.reverse();
    }


    return {
        init: initInside
    };
})();

var validation = (function (){


    function validateForm(form, arr) {

        var elements = form.find('input'),
            valid = true,
            countVal =0;

        $.each(elements, function(index, elem){
            var
                element = $(elem),
                value = element.val();
            countVal = countVal + element.val();

            if(arr[index] < element.val()){

                modal.modalMassag('У вас не хватает монет');
                valid = false;
            }
        })

        if(countVal == 0){
            modal.modalMassag('Вы ничего не ввели');
            valid = false;
        }
        return valid;
    }

    return {
        validateForm: validateForm
    };


})();

var modal = (function (){

    var initInside = function () {
        _setUpListners();
    };
    function _showMassag(msg) {
        $('.modal').css({
            'display': 'block'
        })
        $('.modal_center-text').text(msg);
    }



    var  _setUpListners = function () {
        $('.modal_center-button').on('click', _hideMasseg)
    }

    function _hideMasseg(e) {
        e.preventDefault();

        $('.modal').css({
            'display': 'none'
        })
        $('.modal_center-text').text('');
    }

    return {
        init: initInside,
        modalMassag: _showMassag
    };
})();
modal.init();
app.init();



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gKGZ1bmN0aW9uICgpe1xuXG4gICAgdmFyIFB1cnNlID1bMTAsMTAsMTAsMTBdLFxuICAgICAgICBQdXJzZVZNID0gWzEwMCwxMDAsMTAwLDEwMF0sXG4gICAgICAgIE1vbmV5ID0gWzEsMiw1LDEwXSxcbiAgICAgICAgQWNvdW50ID0gW10sXG4gICAgICAgIEdvb2RzID0gWzEwLDIwLDIwLDE1XSxcbiAgICAgICAgZGlnaXRzID0gW10sXG4gICAgICAgIEJpbGw9MCxcbiAgICAgICAgdmFsaWQgPSB0cnVlLFxuICAgICAgICBDaGFuZ2UgPSBbMTMsMTgsMjEsMzVdO1xuXG4gICAgdmFyIGluaXRJbnNpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zZXRVcExpc3RuZXJzKCk7XG4gICAgfTtcblxuICAgIHZhciAgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5idXR0b25mb3JtJykub24oJ2NsaWNrJywgX2FkZE1vbmV5KVxuICAgICAgICAkKCcuYnV0dG9uZm9ybVZNJykub24oJ2NsaWNrJywgX2FkZENoYW5nZSlcbiAgICAgICAgJCgnLmNlbnRlcl9kb3duLWl0ZW0tLWEnKS5vbignY2xpY2snLCBfYWRkR29vZHMpXG4gICAgICAgICAkKCcuY2xhc3NfZm9ybSBpbnB1dCcpLm9uKCdrZXlwcmVzcycsIF9jaGVja2luZ051bSk7XG4gICAgfVxuXG5cbiAgZnVuY3Rpb24gX2NoZWNraW5nTnVtKGUpIHtcbiAgICAgIGlmKGUua2V5Q29kZSA8IDMyKXJldHVybiBmYWxzZTtcbiAgICAgIGlmKCBTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSk8JzAnfHxTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSk+JzknKSByZXR1cm4gZmFsc2U7XG4gIH1cblxuXG5cblxuZnVuY3Rpb24gX2FkZE1vbmV5KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGZvcm0gPSAkKCcuY2xhc3NfZm9ybScpO1xuICAgIGlmKCF2YWxpZGF0aW9uLnZhbGlkYXRlRm9ybShmb3JtLCBQdXJzZSkpe1xuICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBBY291bnQgPSBbXTtcbiAgICAgJCgnLmlucHV0X2l0ZW0tZm9ybScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW0pIHtcbiAgICAgICAgIFB1cnNlW2luZGV4XSA9IFB1cnNlW2luZGV4XSAtICQoZWxlbSkudmFsKCk7XG4gICAgICAgICBBY291bnQucHVzaCgkKGVsZW0pLnZhbCgpICogTW9uZXlbaW5kZXhdKVxuICAgICAgICAgJChlbGVtKS52YWwoMCk7XG4gICAgIH0pO1xuICAgIEFjb3VudC5tYXAoZnVuY3Rpb24gKHZhbHVlLGluZGV4KSB7XG4gICAgICAgIEJpbGwgPSBCaWxsICsgdmFsdWVcbiAgICB9KVxuICAgICQoJy5jZW50ZXJfdXAtbWlkZGxlLXAnKS50ZXh0KEJpbGwpXG5cblxuICAgIGRpZ2l0cyA9IGNvdW50ZXJDaGFuZ2UoQmlsbCk7XG4gICAgUHVyc2VWTSA9IFB1cnNlVk0ubWFwKGZ1bmN0aW9uICh2YWx1ZSxpbmRleCkge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyBkaWdpdHNbaW5kZXhdO1xuICAgIH0pXG4gICAgcHJvZHVjdCgpO1xufVxuXG5cbmZ1bmN0aW9uIF9hZGRDaGFuZ2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkaWdpdHMgPSBjb3VudGVyQ2hhbmdlKEJpbGwpO1xuICAgICBQdXJzZVZNLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLGluZGV4KSB7XG4gICAgICAgICBQdXJzZVZNW2luZGV4XSA9IHZhbHVlIC0gZGlnaXRzW2luZGV4XTtcbiAgICAgICAgIFB1cnNlW2luZGV4XSA9IFB1cnNlW2luZGV4XSArIGRpZ2l0c1tpbmRleF07XG4gICAgfSlcbiAgICBCaWxsID0gMDtcbiAgICAkKCcuY2VudGVyX3VwLW1pZGRsZS1wJykudGV4dCgwKTtcbiAgICBtb2RhbC5tb2RhbE1hc3NhZygn0KHQv9Cw0YHQuNCx0L4nKTtcbiAgICBwcm9kdWN0KCk7XG5cbn1cblxuICAgIGZ1bmN0aW9uIHByb2R1Y3QoKSB7XG4gICAgICAgICQoJy5jb3VudGVyX2l0ZW0tZm9ybScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtKSB7XG4gICAgICAgICAgICAkKGVsZW0pLmh0bWwoIFB1cnNlW2luZGV4XSArICfRiNGC0YPQuicpXG4gICAgICAgIH0pXG4gICAgICAgICQoJy5jb3VudGVyX2l0ZW0tZm9ybVZNJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW0pIHtcbiAgICAgICAgICAgICQoZWxlbSkuaHRtbCggUHVyc2VWTVtpbmRleF0gKyAn0YjRgtGD0LonKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG5mdW5jdGlvbiBfYWRkR29vZHMoZSkge1xuICAgIHZhciBhcnI9W107XG4gICAgJCgnLmNlbnRlcl9kb3duLWl0ZW0tLWEnKS5tYXAoZnVuY3Rpb24gKGluZGV4LCBlbGVtKXtcbiAgICAgYXJyLnB1c2goZWxlbS5pZClcblxuICAgfSlcbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihlLnRhcmdldC5pZCk7XG4gICAgaWYoR29vZHNbaW5kZXhdIDw9IDAgfHwgQmlsbCA8IENoYW5nZVtpbmRleF0pe1xuXG4gICAgICAgIHZhbGlkID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgICBCaWxsID0gQmlsbCAtIENoYW5nZVtpbmRleF1cbiAgICAgICAgR29vZHNbaW5kZXhdLS07XG4gICAgfVxuXG4gICAgaWYodmFsaWQpe1xuICAgICAgICAkKCcuY2VudGVyX3VwLW1pZGRsZS1wJykudGV4dChCaWxsKVxuICAgICAgICAkKCcuY2VudGVyX2Rvd24taXRlbS0tcCcpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtKSB7XG4gICAgICAgICAgICAkKGVsZW0pLmh0bWwoR29vZHNbaW5kZXhdICsgJyDQv9C+0YDRhtC40LknKVxuICAgICAgICB9KVxuXG5cbiAgICB9XG5cbiAgICB2YWxpZCA9IHRydWU7XG59XG5cblxuZnVuY3Rpb24gY291bnRlckNoYW5nZShudW1iZXIpIHtcbiAgICAgICAgdmFyIGRpZ2l0cyA9IFtdO1xuICAgICAgICBkaWdpdHMucHVzaChNYXRoLmZsb29yKG51bWJlci8xMCkpO1xuICAgICAgICB2YXIgYSA9IG51bWJlciAlIDEwO1xuICAgICAgICBkaWdpdHMucHVzaChNYXRoLmZsb29yKGEvNSkpO1xuICAgICAgICB2YXIgYiA9IGEgJSA1O1xuICAgICAgICBkaWdpdHMucHVzaChNYXRoLmZsb29yKGIvMikpO1xuICAgICAgICB2YXIgYyA9IGIgJSAyO1xuICAgICAgICBkaWdpdHMucHVzaChNYXRoLmZsb29yKGMvMSkpO1xuICAgICAgICByZXR1cm4gZGlnaXRzLnJldmVyc2UoKTtcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRJbnNpZGVcbiAgICB9O1xufSkoKTtcblxudmFyIHZhbGlkYXRpb24gPSAoZnVuY3Rpb24gKCl7XG5cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmb3JtLCBhcnIpIHtcblxuICAgICAgICB2YXIgZWxlbWVudHMgPSBmb3JtLmZpbmQoJ2lucHV0JyksXG4gICAgICAgICAgICB2YWxpZCA9IHRydWUsXG4gICAgICAgICAgICBjb3VudFZhbCA9MDtcblxuICAgICAgICAkLmVhY2goZWxlbWVudHMsIGZ1bmN0aW9uKGluZGV4LCBlbGVtKXtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSAkKGVsZW0pLFxuICAgICAgICAgICAgICAgIHZhbHVlID0gZWxlbWVudC52YWwoKTtcbiAgICAgICAgICAgIGNvdW50VmFsID0gY291bnRWYWwgKyBlbGVtZW50LnZhbCgpO1xuXG4gICAgICAgICAgICBpZihhcnJbaW5kZXhdIDwgZWxlbWVudC52YWwoKSl7XG5cbiAgICAgICAgICAgICAgICBtb2RhbC5tb2RhbE1hc3NhZygn0KMg0LLQsNGBINC90LUg0YXQstCw0YLQsNC10YIg0LzQvtC90LXRgicpO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoY291bnRWYWwgPT0gMCl7XG4gICAgICAgICAgICBtb2RhbC5tb2RhbE1hc3NhZygn0JLRiyDQvdC40YfQtdCz0L4g0L3QtSDQstCy0LXQu9C4Jyk7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZGF0ZUZvcm06IHZhbGlkYXRlRm9ybVxuICAgIH07XG5cblxufSkoKTtcblxudmFyIG1vZGFsID0gKGZ1bmN0aW9uICgpe1xuXG4gICAgdmFyIGluaXRJbnNpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zZXRVcExpc3RuZXJzKCk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBfc2hvd01hc3NhZyhtc2cpIHtcbiAgICAgICAgJCgnLm1vZGFsJykuY3NzKHtcbiAgICAgICAgICAgICdkaXNwbGF5JzogJ2Jsb2NrJ1xuICAgICAgICB9KVxuICAgICAgICAkKCcubW9kYWxfY2VudGVyLXRleHQnKS50ZXh0KG1zZyk7XG4gICAgfVxuXG5cblxuICAgIHZhciAgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5tb2RhbF9jZW50ZXItYnV0dG9uJykub24oJ2NsaWNrJywgX2hpZGVNYXNzZWcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2hpZGVNYXNzZWcoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCgnLm1vZGFsJykuY3NzKHtcbiAgICAgICAgICAgICdkaXNwbGF5JzogJ25vbmUnXG4gICAgICAgIH0pXG4gICAgICAgICQoJy5tb2RhbF9jZW50ZXItdGV4dCcpLnRleHQoJycpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRJbnNpZGUsXG4gICAgICAgIG1vZGFsTWFzc2FnOiBfc2hvd01hc3NhZ1xuICAgIH07XG59KSgpO1xubW9kYWwuaW5pdCgpO1xuYXBwLmluaXQoKTtcblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
