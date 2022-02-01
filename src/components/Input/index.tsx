import React, { FormEvent, useCallback, useState } from 'react';
import { UseControllerProps, useController } from 'react-hook-form';

import masks, { IMask } from './masks';

import { Container } from './styles';

type IInputProps = UseControllerProps & {
  label: string;
  labelIconRight?: React.ReactNode;
  labelIconLeft?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  maxLength?: number;
  onBlur?: () => void;
  mask?: IMask;
};

export function Input({
  label,
  labelIconRight,
  labelIconLeft,
  className,
  isDisabled,
  maxLength,
  onBlur,
  mask,

  ...restProps
}: IInputProps) {
  const { field, fieldState } = useController({ ...restProps });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!field.value);

  field.onBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!field.value);

    if (onBlur) onBlur();
  }, [field.value, onBlur]);

  const handleKeyUp = useCallback(
    (e: FormEvent<HTMLInputElement>) => mask && masks[mask](e),
    [mask],
  );

  return (
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!fieldState.error}
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
          maxLength={maxLength}
          onKeyUp={mask && handleKeyUp}
          {...field}
        />

        {fieldState.error && <span>{fieldState.error.message}</span>}
      </div>
    </Container>
  );
}
