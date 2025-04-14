var asteroidCollision = function (asteroids) {
  const n = asteroids.length;
  const stack = [];
  for (let i = 0; i < n; i++) {
    // asteroids moving right won't collide, add to stack
    if (asteroids[i] > 0) stack.push(asteroids[i]);
    // handle asteroids moving left
    else {
      // while top of stack has smaller asteroids that current asteroid and moving in opposite direction
      // pop because they are destroyed
      // while loop because asteroid can destroy multiple asteroids as long as all smaller than itself
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < -asteroids[i]
      ) {
        stack.pop();
      }
      // handle asteroids of same size moving opposite directions
      if (stack.length > 0 && stack[stack.length - 1] === -asteroids[i])
        stack.pop();
      // handle larger asteroid in stack
      else if (stack.length > 0 && stack[stack.length - 1] > -asteroids[i])
        continue;
      // handle stack is empty
      else stack.push(asteroids[i]);
    }
  }
  return stack;
};

// Time: O(n)
// Space: O(1)
