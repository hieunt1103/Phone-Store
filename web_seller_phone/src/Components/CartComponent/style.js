import styled from 'styled-components';
import { InputNumber } from 'antd';

export const WrapperCartContainer = styled.div`
    width: 100%;
    padding: 16px 0;
    background-color: #fff;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    margin: 40px;
`;

export const WrapperCartInner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;
export const WrapperCartInnerLeft = styled.div`
    padding: 30px;
    flex: 1;
    display: flex;
    align-items: center;
`;
export const WrapperCartInnerRight = styled.div`
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const WrapperCartName = styled.div`
    max-height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #212121;
    padding: 0 40px;
`;
export const WrapperCartPrice = styled.div`
    font-size: 14px;
    color: #f57224;
    font-weight: 400;
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
export const WrapperCartRemove = styled.div`
    font-size: 15px;
    &:hover {
        cursor: pointer;
    }
`;
