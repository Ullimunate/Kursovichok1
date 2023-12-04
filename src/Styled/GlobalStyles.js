import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body{
   background-color:#f7f7f5;
   margin-left:calc(50% - 700px);
   margin-right:calc(50% - 700px);
}`;