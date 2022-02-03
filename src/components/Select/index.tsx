import React, { useCallback } from 'react';
import { Controller, Control, get } from 'react-hook-form';
import ReactSelect, {
  components,
  OptionProps,
  Props as ReactSelectProps,
} from 'react-select';

import { Container, Label, Error } from './styles';

interface ISelectProps extends ReactSelectProps<OptionProps> {
  name: string;
  label: string;
  control: Control;
  className?: string;
}

export function Select({
  name,
  label,
  control: controlForm,
  className,
  options,
  defaultValue,
  ...rest
}: ISelectProps) {
  const error = get(controlForm._formState.errors, name);

  const ControlComponent = useCallback(
    (props: any) => {
      return (
        <>
          <Label
            isFocused={props?.isFocused}
            isFilled={props?.hasValue}
            isErrored={!!error}
          >
            {label}
          </Label>
          <components.Control {...props} />
        </>
      );
    },
    [error, label],
  );

  return (
    <Container className={className} isErrored={!!error}>
      <Controller
        name={name}
        control={controlForm}
        render={({ field: { onChange, value, ...restFieldProps } }) => (
          <ReactSelect
            classNamePrefix="react-select"
            placeholder=""
            components={{
              Control: ControlComponent,
              IndicatorSeparator: null,
            }}
            options={options}
            defaultValue={
              options?.find((option: any) => option.value === value) ||
              defaultValue
            }
            onChange={(option: any) => {
              if (rest.isMulti) {
                onChange(option?.map((opt: any) => opt.value));

                return;
              }

              onChange(option?.value);
            }}
            {...rest}
            {...restFieldProps}
          />
        )}
        defaultValue={defaultValue}
      />

      {error && <Error>{error.message}</Error>}
    </Container>
  );
}
