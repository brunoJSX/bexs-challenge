import React, { useCallback } from 'react';
import { Controller, Control, get } from 'react-hook-form';
import ReactSelect, {
  components,
  OptionProps,
  Props as ReactSelectProps,
} from 'react-select';

import { Container, Label } from './styles';

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
        render={({ field }) => (
          <ReactSelect
            classNamePrefix="react-select"
            placeholder=""
            components={{
              Control: ControlComponent,
              IndicatorSeparator: null,
            }}
            options={options}
            {...rest}
            {...field}
          />
        )}
        defaultValue={defaultValue}
      />

      {errors && <p>{get(errors, name)?.message}</p>}
    </Container>
  );
}
