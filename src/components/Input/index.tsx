import React, {
  FormEvent,
  useCallback,
  useState,
  InputHTMLAttributes,
} from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

import masks, { IMask } from './masks';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelIconRight?: React.ReactNode;
  labelIconLeft?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  mask?: IMask;
  register?: UseFormRegister<any>;
  error?: FieldError;
}

export function Input({
  label,
  labelIconRight,
  labelIconLeft,
  className,
  isDisabled,
  mask,
  register,
  error,

  ...restProps
}: IInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!restProps.defaultValue);

  // eslint-disable-next-line no-param-reassign
  restProps.onBlur = useCallback((e: FormEvent<HTMLInputElement>) => {
    setIsFocused(false);

    setIsFilled(!!e.currentTarget.value);
  }, []);

  const handleKeyUp = useCallback(
    (e: FormEvent<HTMLInputElement>) => mask && masks[mask](e),
    [mask],
  );

  return (
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}
      className={className}
    >
      <label htmlFor={label}>
        {labelIconLeft && labelIconLeft}
        {label}
        {labelIconRight && labelIconRight}
      </label>

      <div>
        <input
          onFocus={() => setIsFocused(true)}
          disabled={isDisabled}
          onKeyUp={mask && handleKeyUp}
          {...(register && restProps.name ? register(restProps.name) : {})}
          {...restProps}
        />

        {error && <span>{error.message}</span>}
      </div>
    </Container>
  );
}
