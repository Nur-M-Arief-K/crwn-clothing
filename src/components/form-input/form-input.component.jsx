import { Component } from "react";
import { FormInputLabel, Input, Group } from './form-input.styles';

class FormInput extends Component {
    render() {
        const { label, ...otherProps } = this.props;
        return(
            <Group>
                <Input { ...otherProps }/>
                {
                    label && (
                        <FormInputLabel shrink={otherProps.value.length}>{ label }</FormInputLabel>
                    )
                }
            </Group>
        );
    };
};

export default FormInput;