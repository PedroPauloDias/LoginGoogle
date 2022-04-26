import styled from "styled-components"

export const AreaHeader = styled.div`

height: 60px;
background-image: linear-gradient(to right, #fe5d26, #370d44 );
      
color: #fff;

.container{
padding: 5px 20px;
display: flex;
align-items: center;
}
 .logo{
  flex: 1;

    img{
      width:45px;
      border-radius:50%;
    }
 }
 nav{
   display:flex;

    ul{
    display: flex;

    }

      li{
        list-style: none;
        margin-left:20px;
      
        a{
          text-decoration: none;
          color: #fff;
          display: flex;
          align-items: center;
          
                  
          


          &:hover{
            color:#f5bb00;
          }

        }
    }
    .avatar{
      display: flex;
      align-items: center;

      img {
        width: 35px;
        border-radius: 20px;
        margin-left:20px;
        margin-right:10px;
        cursor:pointer;
      }
      label{
        font-size: 13px;
        cursor: pointer;
        color: #ccc;
      }
      @media screen and (max-width: 600px){
        label{
          display: none;
        }

      }
    }
 }

`
