<script lang="ts">
  import { getUserAnswer } from "../state/userAnswer.state.svelte";
</script>

<div class="flex flex-col">
  <label for="">Ditt svar</label>
  <div class="bg-cards border-border border-2 rounded-lg min-w-40 h-10 text-3xl font-jura-semibold px-4 grid place-items-center">
    {getUserAnswer()}
  </div>
</div>
