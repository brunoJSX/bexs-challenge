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
  // eslint-disable-next-line no-underscore-dangle
  const { errors } = controlForm._formState;

  const ControlComponent = useCallback(
    (props: any) => {
      return (
        <>
          <Label isFocused={props?.isFocused} isFilled={props?.hasValue}>
            {label}
          </Label>
          <components.Control {...props} />
        </>
      );
    },
    [label],
  );

  return (
    <Container className={className}>
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

      {errors && <Error>{get(errors, name)?.message}</Error>}
    </Container>
  );
}
