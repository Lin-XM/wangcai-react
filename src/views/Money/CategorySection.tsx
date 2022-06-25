import styled from 'styled-components';

const CategorySection = styled.section`
  > ul{
  display: flex;
  background-color: #47f69f;
   font-size: 24px ;

    >li{
       width: 50%;
       text-align: center;
       padding:16px 0 ;
       position: relative;
     &.selected::after{
         content:'';
         display: block;
         height: 2px ;
         background-color: black;
         position:absolute;
         width: 100%;
         bottom: 0;
         left:0;
     }  
    }
  }

`;

export {CategorySection}