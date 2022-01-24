/*Confirm ingredients: Start*/
const confirmIngredient = e =>{
    let contador = 0;
    document.querySelectorAll('.ingredients_check').forEach(box =>{
        if(box.checked) contador++;
        else contador--;
  
        if(contador == 10) document.getElementById('btn_ingredients-confirm').classList.replace('btn_finish-red','btn_finish-green');
        else document.getElementById('btn_ingredients-confirm').classList.replace('btn_finish-green','btn_finish-red');
    });
  };
  
  document.querySelectorAll('.ingredients_check').forEach(ingredients =>{
      ingredients.addEventListener('change',confirmIngredient);
  });
  
  document.getElementById('btn_ingredients-confirm').addEventListener('click',e=>{
      const ingredients = document.getElementById('btn_ingredients-confirm');
      if(ingredients.classList.contains('btn_finish-green')){
         Swal.fire(
          'Good job!',
          "You've got all the ingredients!",
          'success'
          );
      };
  });
  /*Confirm ingredients: End*/
  
  /*Confirm instructions complete: Start*/
  const confirmRecipe = e =>{
        let contador = 0;
        document.querySelectorAll('.instructions_check').forEach(box =>{
            if(box.checked) contador++;
            else contador--;
            
            if(contador == 7) document.getElementById('btn_confirm-recipe').classList.replace('btn_finish-red','btn_finish-green');
            else document.getElementById('btn_confirm-recipe').classList.replace('btn_finish-green','btn_finish-red');     
        });
  };
  
  document.querySelectorAll('.instructions_check').forEach(instruction =>{
      instruction.addEventListener('change',confirmRecipe);
  });
  /*Confirm instructions complete: End*/
  
  /*Confirm recipe complete: Start*/
  document.getElementById('btn_confirm-recipe').addEventListener('click',e=>{
      let ingredients = document.getElementById('btn_ingredients-confirm');
      let recipe      = document.getElementById('btn_confirm-recipe');
      if(ingredients.classList.contains('btn_finish-green') && recipe.classList.contains('btn_finish-green')){
         Swal.fire(
          'Good job!',
          'You have managed to complete the recipe! Enjoy your achievement.',
          'success'
          );
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You have not yet completed the recipe completely.',
          });
      }
  });
  /*Confirm recipe complete: End*/