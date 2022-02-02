import React, {
  FormEvent,
  useCallback,
  useState,
  InputHTMLAttributes,
  useMemo,
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
  onChange?(event: FormEvent<HTMLInputElement>): void;
  onBlur?(event: FormEvent<HTMLInputElement>): void;
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
  onChange,
  onBlur,

  ...restProps
}: IInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!restProps.defaultValue);

  const handleKeyUp = useCallback(
    (e: FormEvent<HTMLInputElement>) => mask && masks[mask](e),
    [mask],
  );

  const inputProps = useMemo(() => {
    if (!(register && restProps.name)) return {};

    return {
      ...register(restProps.name, {
        onChange,
        onBlur: (e: FormEvent<HTMLInputElement>) => {
          setIsFocused(false);
          setIsFilled(!!e.currentTarget.value);
          if (onBlur) onBlur(e);
        },
      }),
    };
  }, [onBlur, onChange, register, restProps.name]);

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
          {...inputProps}
          {...restProps}
        />

        {error && <span>{error.message}</span>}
      </div>
    </Container>
  );
}
