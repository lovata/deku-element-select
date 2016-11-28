const deku = require('deku');
const element = deku.element;

const Option = {
    render: model => {
        const { active, disabled, label, onClick, value } = model.props;
        return element('div', {
            class: 'Option' + (active ? ' Option--active' : '') + (disabled ? ' Option--disabled' : ''),
            onClick: () => { disabled || active ? () => {} : onClick(value) }
        }, label);
    }
}

module.exports = Option;
