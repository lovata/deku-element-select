const deku = require('deku');
const element = deku.element;
const Option = require('./option/index.js');

const getText = (options) => {
    for (var i = 0; i < options.length; i++) {
        if (options[i].active) {
            return options[i].label;
        }
    }
    return options[0].label;
}

const Select = {
    render: model => {
        let { options, onChange } = model.props;

        let optionsElements = options.map(option => {
            let { active, disabled, label, value } = option;
            return element(Option, { active, disabled, label, value, onClick: onChange })
        });

        return element('div', { class: 'Select' }, [
            element('label', {}, [
                element('div', {
                    class: 'Select-input',
                }, getText(options)),
                element('input', {
                    type: 'checkbox',
                    onBlur: event => {
                        let checkbox = event.target;
                        if (checkbox.checked) {
                            setTimeout(() => {
                                checkbox.checked = false;
                            }, 300);
                        }
                    }
                }),
                element('div', { class: 'Select-options' }, optionsElements)
            ])
        ]);
    }
}
module.exports = Select;
