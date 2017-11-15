Optiones for making a grid

Grid of images that are different sizes. Ways to do this:

1) create a HTML table


<!-- using a table to organize stuff -->
<table>
  <tr>
    <td>Jill</td>
    <td>Smith</td> 
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
  </tr>
</table>

  <!-- using a table to organize stuff -->
<!--   <table>
    <tr>
      <td><img src="images/1.jpg" id = "boat"></td>
      <td><img src="images/4.jpg" id = "wheel"></td> 
    </tr>
    <tr>
      <td><img src="images/2.jpg" id = "wave"></td>
      <td><img src="images/3.jpg" id = "car"></td> 
    </tr>
  </table>
 -->


 float 

 float taking out of flow of DOM and takes away all built in treatments of elements. Take it out of the normal protocol. clear fix to reintroduce flow of DOM. 

 .left-col {
   float: left;
 }

 .right-col {
   float: left;
 }

 divs grow as the content inside grows


 <!-- using float to wrap elements around each other -->

 <!--  <div>
      <img src="images/1.jpg" id = "boat" class="left-col">
      <img src="images/2.jpg" id = "wave">
      <div class="clear">
        <img src="images/4.jpg" id = "wheel" class="left-col">
        <img src="images/3.jpg" id = "car">
      </div>  
  </div> -->



position-absolute

Every element has a default position value of relative.

Best way!!!

For positioning if we have things that are the same size, we can just create a div that will constrict the placement of the elementa via using width and height.

Another way is to use floats to take elements out of the normal DOM flow. Need a following container with property of clear: both or clear: left or clear:right

Another way is using tables, frowned upon.

Another was is inline block.

For elements that are of differenct sizes, we can think about position-absolute or negative margins.



