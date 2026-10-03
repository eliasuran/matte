<script lang="ts">
    import Answer from "./lib/components/Answer.svelte";
  import Calculator from "./lib/components/Calculator.svelte";
    import Keyboard from "./lib/components/Keyboard.svelte";
    import Question from "./lib/components/Question.svelte";
</script>

<main class="bg-bg text-text-primary font-jura h-screen fixed inset-0 flex flex-col gap-8 items-center justify-center">
  <Question />
  <Answer />
  <Keyboard />
  <Calculator />
</main>
