/*div.cover1
{
	content:url("Guitar-cover.jpg","Guitar.png");
	position: relative;
	height: 500px;
	width: 100%;;
}*/
.cover{
  height: 100vh;
  background-image: url(cover1.jpg);
  background-attachment: fixed;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;

  /*display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;*/

}
.title_fixed
{

  background-attachment: fixed;


}
.image1
{
   background-image: url(aradhya.png);
   background-size: 40% 60%;
   background-repeat: no-repeat;
   background-position: bottom right;
   visibility: hidden;
 

    margin-right: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    
}

#giveborder
{
  border: dashed;
  border-color: black;
  opacity: 0;
}
.land1,.land2,.land3,.land4 {
    overflow: hidden;
    position: relative;
    margin-left: 5%;
     float: left;
    width: 10%;
    height: 100px;
    background-color: white;
    border: 1px solid black;
}
