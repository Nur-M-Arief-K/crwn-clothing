import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = (props) => {
    const { label, id, ...otherProps } = props;
    return(
        <Group>
        <Input id={id} { ...otherProps }/>
        {
            label && (
                <FormInputLabel htmlFor={id} shrink={otherProps.value.length}>{ label }</FormInputLabel>
            )
        }
        </Group>
    );
};

export default FormInput;