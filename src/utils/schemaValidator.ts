/* eslint-disable no-template-curly-in-string */
import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    default: 'Campo inválido',
    required: 'Campo obrigatório',
    oneOf: 'Campo deve ser um dos seguintes valores: ${values}',
    notOneOf: 'Campo não pode ser um dos seguintes valores: ${values}',
  },
  string: {
    length: 'Campo deve ter exatamente ${length} caracteres',
    min: 'Campo deve ter pelo menos ${min} caracteres',
    max: 'Campo deve ter no máximo ${max} caracteres',
    email: 'Campo tem o formato de e-mail inválido',
    url: 'Valor deve ter um formato de URL válida',
    trim: 'Valor não deve conter espaços no início ou no fim.',
    lowercase: 'Valor deve estar em maiúsculo',
    uppercase: 'Valor deve estar em minúsculo',
  },
  number: {
    min: 'Valor deve ser no mínimo ${min}',
    max: 'Valor deve ser no máximo ${max}',
    lessThan: 'Valor deve ser menor que ${less}',
    moreThan: 'Valor deve ser maior que ${more}',
    positive: 'Valor deve ser um número posítivo',
    negative: 'Valor deve ser um número negativo',
    integer: 'Valor deve ser um número inteiro',
  },
  date: {
    min: 'Valor deve ser maior que a data ${min}',
    max: 'Valor deve ser menor que a data ${max}',
  },
  array: {
    min: 'Campo deve ter no mínimo ${min} itens',
    max: 'Campo deve ter no máximo ${max} itens',
  },
});

export default Yup;
