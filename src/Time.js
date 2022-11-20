import React from "react";
import { FormField } from "@sanity/base/components";
import { TextInput } from "@sanity/ui";
import { useId } from "@reach/auto-id";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";

const MyCustomString = React.forwardRef((props, ref) => {
  const {
    type,
    value,
    readOnly,
    markers,
    presence,
    onFocus,
    onBlur,
    onChange,
  } = props;

  const inputId = useId();

  const handleChange = React.useCallback(
    (event) => {
      const inputValue = event.currentTarget.value;
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange]
  );

  return (
    <FormField
      description={type.description}
      title={type.title}
      __unstable_markers={markers}
      __unstable_presence={presence}
      inputId={inputId}
    >
      <TextInput
        id={inputId}
        value={value || ""}
        onChange={handleChange}
        readOnly={readOnly}
        placeholder="HH:MM"
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
      />
    </FormField>
  );
});

export default MyCustomString;
