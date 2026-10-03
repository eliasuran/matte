<script lang="ts">
  let open = $state(false)
  let currentInput = $state<(number | string)[]>([])
  let result = $state<number | null | string>(null)

  const OPTIONS = [
    {id:"BACK",text:"<--",func:()=>{currentInput.pop()}},
    {id:"RESET",text:"AC",func:()=>{currentInput=[];result=null}},
    {id:"LOG",text:"log",func:()=>{currentInput=[];result="NOT SUPPORTED"}}
  ]
  const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const OPERATORS = [":", "*", "-", "+", "="]

  function tempCalculateFunction() {
    const expression = currentInput.join("")
    result = Function(`"use strict"; return (${expression})`)();
  }

  //not in use until it works, use UNSAFE one above for now
  /*
  function calculate() {
    const formattedInput = []
    let lastOperatorIdx = 0
    for (const [i,v] of currentInput.entries()) {
      if (OPERATORS.includes(String(v))) {
        const tempList = currentInput
        const number = Number(tempList.slice(lastOperatorIdx,i).join())
        formattedInput.push(number)
        if (v === "=") break;
        formattedInput.push(v)
        lastOperatorIdx = i
      }
    }
    console.log(formattedInput)
  }
  */

  const buttonClasses = "border-border rounded-full border grid place-items-center w-8 aspect-square cursor-pointer"
</script>

{#if open}
  <div onclick={() => open = false} class="z-10 h-full w-full bg-black/50 fixed inset-0 duration-300"></div>
{/if}
<div 
  aria-expanded={open}
  onmouseenter={() => !open ? open = true : null} 
  class={`z-11 flex flex-col h-96 w-64 bg-cards border-border border-2 rounded-lg p-4 gap-2 fixed duration-300 ${open ? "top-1/2 -translate-y-1/2" : "top-[95%]"}`}
>
  <div class="bg-card border-border border-2 w-full rounded-lg flex items-center justify-center h-12 overflow-hidden">
    {#if result !== null}
      {result}
    {:else}
      {currentInput.join("")}
    {/if}
  </div>
  <div class="flex gap-2 w-full">
    <div class="flex flex-col gap-2">
      <div class="flex gap-2">
        {#each OPTIONS as option}
          <button class={buttonClasses} onclick={option.func}>{option.text}</button>
        {/each}
      </div>
      <div class="grid grid-cols-3 gap-2">
        {#each NUMBERS as number}
          <button class={buttonClasses} onclick={() => currentInput.push(number)}>{number}</button>
        {/each}
      </div>
    </div>
    <div class="flex flex-col gap-2">
      {#each OPERATORS as operator}
        <button 
          class={buttonClasses}
          onclick={() => {
            if (currentInput.length == 0) return;
            if (OPERATORS.includes(String(currentInput[currentInput.length - 1]))) {
              currentInput[currentInput.length - 1] = operator
              return
            }
            if (operator === "=") {
              tempCalculateFunction()
              return
            }
            currentInput.push(operator)
          }}
        >
          {operator}
        </button>
      {/each}
    </div>
  </div>
</div>
