import { defineRule, configure } from 'vee-validate';
import {required, email, min, numeric} from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('numeric', numeric);

configure({
    generateMessage: localize('ru', {
        messages: {
            required: 'Поле не может быть пустым',
            email: 'Некорректный e-mail',
            min: 'Слишком короткое имя',
            numeric: 'Введите номер без +7 и буквенных символов',
        },
    }),
});