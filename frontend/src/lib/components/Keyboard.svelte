<script lang="ts">
  import { setUserAnswer } from "../state/userAnswer.state.svelte";

  const KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ",", "(", ")"]
  const OPTIONS = [
    {text:"x²",func:()=>{setUserAnswer(prev => prev + "²")}},
    {text:"<--",func:()=>{setUserAnswer(prev => prev.slice(0,-1))}},
    {text:"RESET",func:()=>{setUserAnswer("")}},
  ]

  const buttonClasses = "rounded-md bg-cards border-border border-2 grid place-items-center w-20 h-10 cursor-pointer"
</script>

<div class="grid grid-cols-4 gap-2">
  {#each KEYS as key}
    <button 
      onclick={() => setUserAnswer(prev => prev + key)}
      class={buttonClasses}
    >
      {key}
    </button>
  {/each}
  {#each OPTIONS as option}
    <button 
      onclick={option.func}
      class={buttonClasses}
    >
      {option.text}
    </button>
  {/each}
</div>
