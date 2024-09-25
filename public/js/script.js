'use strict';

(function () {

    /**
     * Counter
     */

    const /** {HTMLElement} */  $decrementBtn = document.querySelector('[data-decrement-btn]');

    const /** {HTMLElement} */  $incrementBtn = document.querySelector('[data-increment-btn]');

    const  /** {HTMLElement} */  $counterField = document.querySelector('[data-counter-field]');

    const  /** {HTMLElement} */  $total = document.querySelector('[data-total]');

    const  /** {NUMeBER} */  $minValue = 1;

    const  /** {NUMeBER} */  $maxValue = 999;

    /**
     * increment
    */

    $incrementBtn.addEventListener('click', function () {
        const currentValue = $counterField.value

        if (currentValue < $maxValue) {
            $counterField.value = Number(currentValue) + 1
            updateTotal.call($counterField)

        }


    })

    /**
    * decrement
    */

    $decrementBtn.addEventListener('click', function () {
        const currentValue = $counterField.value

        if (currentValue > $minValue) {
            $counterField.value = Number(currentValue) - 1
            updateTotal.call($counterField)

        }

    })

    const updateTotal = function () {
        $total.textContent = this.value
    }

    $counterField.addEventListener('input', updateTotal.bind($counterField))
                                               
    const contributeform = document.querySelector('[data-contribute-form]')
    const submitBtn = document.querySelector('[data-submit-btn]')

    contributeform.addEventListener('submit', async function (event) {
        event.preventDefault();

        submitBtn.setAttribute('disabled' ,'')

        try {
            const formFields = document.querySelectorAll('[data-form-field]')

            const formData = {}
        
            console.log(   "Hello World this block");  
        
            formFields.forEach(item => {
            
                formData[item.getAttribute('name')] = item.value.trim()
            })
            
            const response = await fetch('/checkout', {
                method: 'POST',
                body: new URLSearchParams(formData).toString(),
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            })
            
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData); 
                console.log("Hellp codeer in your program  "); 
            
            } else {
                console.error('Form submission failed :', response.statusText);
            
            }
            
        } catch (error) {
            console.error(error);
            throw error
            
        } finally {
            submitBtn.removeAttribute('disabled')
        }

    })

})();

