import React, { useCallback, useState } from 'react';
import { UseControllerProps, useController } from 'react-hook-form';

import { Container } from './styles';

type IInputProps = UseControllerProps & {
  label: string;
  className?: string;
  isDisabled?: boolean;
  onBlur?: () => void;
};

export function Input({
  label,
  className,
  isDisabled,
  onBlur,

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

  return (
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!fieldState.error}
      className={className}
    >
      <label htmlFor={label}>{label}</label>

      <div>
        <input
          onFocus={() => setIsFocused(true)}
          disabled={isDisabled}
          {...field}
        />

        {fieldState.error && <span>{fieldState.error.message}</span>}
      </div>
    </Container>
  );
}
