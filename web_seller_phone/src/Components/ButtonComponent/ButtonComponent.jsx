import { Button } from 'antd';
function ButtonComponent({ size, styleButton, styleTextButton, textButton, ...rests }) {
    return (
        <Button size={size} style={styleButton} {...rests}>
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    );
}

export default ButtonComponent;
