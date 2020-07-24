function Calculator() {
    this.display = document.querySelector('.display');
    this.start = () => {
        this.handleClick();
        this.pressButton();
    };
    this.handleClick = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta(el);
            this.display.focus();
        });
    };
    this.pressButton = () => {
        document.addEventListener('keyup', event => {
            if (event.keyCode === 13) this.realizaConta();
        })
    }
    this.addNumDisplay = (el) => this.display.value += el.innerText;
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Conta inválida')
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida')
            return;
        }
    };
    this.display.focus();

};

const calculator = new Calculator();
calculator.start();