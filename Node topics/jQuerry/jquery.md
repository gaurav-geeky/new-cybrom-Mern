
1. slide, fade, animate, focus, blur , 
mouse leave, mouse enter, 

once effect finished cb execute.........
# jQuery concept

1.   $(selector).action( time, cb); 


2.  $("#wiki").show(1000, callbackFunction);

# #####################################################
3. 
| Usage    | Meaning                          | Good for callbacks? | Safe recursion?                    
| -------- | -------------------------------- | ------------------- | ---------------------------------- 
| `loop`   | pass the function, don’t call it | ✔ Yes               | ✔ Yes                              
| `loop()` | call the function immediately    | ❌ No                | ❌ Causes recursion if used wrongly 



4. so only passing function name __loop__ as a cb is good 
 __or__  
 we can pass whole new function may be to print some message then inside it we call call   ___  function () {   __loop()__   } ___
 


# slide up slide down and  fadeIn fadeout
✅ slideUp / slideDown
Purpose: Animate the height of an element.

slideUp() → height goes from full → 0px (collapses upward)

slideDown() → height goes from 0px → full height

It also affects padding and margin while collapsing/expanding.

Gives a sliding motion.

✔️ What it animates:  height , padding , margin


✅ fadeIn / fadeOut
Purpose: Animate the visibility (opacity) of an element.

fadeOut() → opacity goes 1 → 0, element becomes invisible

fadeIn() → opacity 0 → 1, element becomes visible again

Height and layout remain the same until animation completes.

Gives a smooth transparency effect, no sliding.

✔️ What it animates: opacity only

# #####################################################
| Function | Effect                       |
| -------- | ---------------------------- |
| slideUp  | moves upward while shrinking |
| fadeOut  | just becomes transparent     |

| Function        | Requires element hidden? |          Why               |
| --------------- | ------------------------ | -------------------------- |
| **slideDown()** | ✅ YES                    | needs height = 0 to expand |
| **fadeIn()**    | ❌ NO                     | only changes opacity       |




