import { WrapperInputStyle } from './style';

const InputForm = (props) => {
    const { placeholder = 'Nhập text', value, ...rests } = props;
    const handleOnchangeInput = (e) => {
        props.onChange(e.target.value);
    };
    return <WrapperInputStyle placeholder={placeholder} value={value} {...rests} onChange={handleOnchangeInput} />;
};

export default InputForm;
