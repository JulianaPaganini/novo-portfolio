
import styled from 'styled-components';

export const ContactWrapper = styled.section`
padding: 60px 20px;
max-width: 700px;
margin: 0 auto;
`;


export const Title = styled.h2`
color: #fff;
margin-bottom: 24px;
text-align: center;
`;


export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 16px;
background: rgba(255,255,255,0.02);
padding: 28px;
border-radius: 20px;
box-shadow: 0 4px 16px rgba(0,0,0,0.25);
`;


export const Input = styled.input`
padding: 12px 14px;
border-radius: 8px;
border: 1px solid rgba(255,255,255,0.08);
background: rgba(0,0,0,0.3);
color: #fff;
font-size: 15px;
`;


export const TextArea = styled.textarea`
padding: 12px 14px;
min-height: 120px;
border-radius: 8px;
border: 1px solid rgba(255,255,255,0.08);
background: rgba(0,0,0,0.3);
color: #fff;
font-size: 15px;
resize: none;
`;


export const Button = styled.button`
padding: 9px 10px;
background: linear-gradient(90deg, #7c5cff, #5a3cff);
border: none;
border-radius: 8px;
color: #fff;
font-weight: 600;
cursor: pointer;
width:150px;
margin: 0 auto;
`;