import styled from 'styled-components';
import { Col, InputNumber } from 'antd';
import { Image } from 'antd';
export const WrapperStyleImageSmall = styled(Image)`
    height: 64px;
    width: 64px;
`;
export const WrapperStyleColImage = styled(Col)`
    flex-basis: unset;
    display: flex;
`;
export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-break: break-word;
`;
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);
`;
export const WrapperPriceProduct = styled.div`
    background: rgb(250, 250, 250);
    border-radius: 4px;
`;

export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;
    font-weight: 500;
    padding: 10px;
    margin-top: 10px;
`;

export const WrapperDesciptionProduct = styled.div`
    margin: 40px 0;
    span.header-desciption {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsisl;
    }
    p.body-desciption {
        margin-left: 5px;
        margin-top: 10px;

        color: rgb(11, 116, 229);
        font-size: 12;
        line-height: 24px;
        font-weight: 500;
    }
`;
export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    width: 100px;
    border: 1px solid rgb(166, 166, 176);
    border-radius: 4px;
    justify-content: space-around;
`;
export const WrapperInputNumber = styled(InputNumber)`
    width: 30px;
    border: none;
    text-align: center;
    .ant-input-number-handler-wrap {
        display: none;
    }
`;
