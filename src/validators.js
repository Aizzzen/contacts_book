import { defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
    generateMessage: localize('ru', {
        messages: {
            required: 'Поле не может быть пустым',
            email: 'Некорректный e-mail',
            min: 'Слишком короткое имя',
        },
    }),
});